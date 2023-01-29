import { CatmullRomCurve3, CubicBezierCurve3, CurvePath, EllipseCurve, QuadraticBezierCurve3, Vector3 } from "three";
import { Animation } from "../../Configs/types";
import { arrayToVec } from "../utility";

const convertStateVecToArr = (stateVec) => {
    return {
        position: [...stateVec.position],
        rotation: [...stateVec.rotation],
        scale: [...stateVec.scale],
    }
}

export const getTrajectory = (animation, state) => {
    const trajectory = [];
    const trajectoryVec = [];
    trajectoryVec.push(state.current);
    trajectory.push(convertStateVecToArr(state.current));
    if(animation.trajectory == undefined) animation.trajectory = Animation.trajectory.manual;
    switch(animation.trajectory) {
        case(Animation.trajectory.manual) :
            animation.stateIncrements.forEach(increment => {
                const currentState = trajectoryVec.slice(-1)[0];
                increment.position && currentState.position.add(arrayToVec(increment.position));
                increment.rotation && currentState.rotation.add(arrayToVec(increment.rotation));
                increment.scale && currentState.scale.add(arrayToVec(increment.scale));
                trajectoryVec.push(currentState);
                trajectory.push(convertStateVecToArr(currentState));
            });
            break;
        case(Animation.trajectory.ellipse) :
            const pointsE = createEllipse(animation.trajectoryMetaData);
            pointsE.forEach(point => {
                trajectory.push({position: [...point]});
                trajectoryVec.push({position: point});
            });
            break;
        case(Animation.trajectory.circle) :
            const pointsC = createCircle(animation.trajectoryMetaData);
            pointsC.forEach(point => {
                trajectory.push({position: [...point]});
                trajectoryVec.push({position: point});
            });
            break;
        case(Animation.trajectory.curveDefinedByPoints) :
            const pointsD = createCurveByPoints(animation.trajectoryMetaData);
            pointsD.forEach(point => {
                trajectory.push({position: [...point]});
                trajectoryVec.push({position: point});
            });
            break;
    }
    return [trajectory, trajectoryVec];
}

export const createEllipse = (data) => {
    const clockwise = data.clockwise == undefined ? false : data.clockwise;
    const rotationZ = data.rotationZ == undefined ? Math.PI/2 : data.rotationZ;
    const ellipse = new EllipseCurve(
        data.center[0],  data.center[1],            // ax, aY
        data.height, data.width,           // xRadius, yRadius
        0,  2*Math.PI,  // aStartAngle, aEndAngle
        clockwise,            // aClockwise
        rotationZ                   // aRotation
    );
    const points2D = ellipse.getPoints(data.steps);
    const points3D = [];
    points2D.forEach(point => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotate && data.rotate.forEach(rotation => {
            const axis = new Vector3(...rotation.axis);
            point3D.applyAxisAngle(axis, rotation.angle);
        })
        points3D.push(point3D);
    });
    return points3D;
}

export const createCircle = () => {
    const clockwise = data.clockwise == undefined ? false : data.clockwise;
    const ellipse = new EllipseCurve(
        data.center[0],  data.center[1],            // ax, aY
        data.radius, data.radius,           // xRadius, yRadius
        0,  2*Math.PI,  // aStartAngle, aEndAngle
        clockwise,            // aClockwise
        0                    // aRotation
    );
    const points2D = ellipse.getPoints(data.steps);
    const points3D = [];
    points2D.forEach(point => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotate && data.rotate.forEach(rotation => {
            const axis = new Vector3(...rotation.axis);
            point3D.applyAxisAngle(axis, rotation.angle);
        })
        points3D.push(point3D);
    });
    return points3D;
}

export const createQuadraticBezierCurve = (data) => {
    const point1Vec = new Vector3(...data.points[0]);
    const point2Vec = new Vector3(...data.points[1]);
    const point3Vec = new Vector3(...data.points[2]);
    const curve = new QuadraticBezierCurve3(point1Vec, point2Vec, point3Vec);
    return curve;
}

export const createCubicBezierCurve = (data) => {
    const point1Vec = new Vector3(...data.points[0]);
    const point2Vec = new Vector3(...data.points[1]);
    const point3Vec = new Vector3(...data.points[2]);
    const point4Vec = new Vector3(...data.points[3]);
    const curve = new CubicBezierCurve3(point1Vec, point2Vec, point3Vec, point4Vec);
    return curve;
}

export const createSplineCurve = (data) => {
    const pointsVec = [];
    data.points.forEach(point => {
        pointsVec.push(new Vector3(...point));
    })
    const curve = new CatmullRomCurve3(pointsVec);
    return curve;
}

export const createCurveByPoints = (data) => {
    let curve;
    switch(data.points.length) {
        case(3):
            curve = createQuadraticBezierCurve(data);
            break;
        case(4):
            curve = createCubicBezierCurve(data);
            break;
        default:
            curve = createSplineCurve(data);
            break;
    }
    const curvePath = new CurvePath();
    curvePath.add(curve);
    const closed = data.closed == undefined ? false : data.closed;
    if(closed) curvePath.closePath();
    const steps = data.steps == undefined ? 100 : data.steps;
    const points3D = curvePath.getPoints(steps);
    return points3D;
}


export const createMultipleCurvesByPoints = (data) => {
    const curvePath = new CurvePath();
    data.curves.forEach(curve => {
        switch(curve.points.length) {
            case(3):
                curvePath.add(createQuadraticBezierCurve(data));
                break;
            case(4):
                curvePath.add(createCubicBezierCurve(data));
                break;
            default:
                curvePath.add(createSplineCurve(data));
                break;
        }
    })
    const closed = data.closed == undefined ? false : data.closed;
    if(closed) curvePath.closePath();
    const steps = data.steps == undefined ? 100 : data.steps;
    const points3D = curvePath.getPoints(steps);
    return points3D;
}


