import { CatmullRomCurve3, CubicBezierCurve3, CurvePath, EllipseCurve, QuadraticBezierCurve3, Vector, Vector3 } from 'three';
import { AnimationTrajectory } from '../../enums';
import { AnimationGeneratedTrajectoryData, AnimationManualTrajectoryData, AnimationTrajectoryData, ObjectState } from '../../Types/animationTypes';
import { CircleMetaData, CurveMetaData, EllipseMetaData, MultipleCurveMetaData, TrajectoryMetaData } from '../../Types/trajectoryTypes';
import { unknownObject } from '../../Types/types';
import { convertVec3ToArray } from '../utility';

export type stateVec = {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;
};

type stateArr = {
    position: number[];
    rotation: number[];
    scale: number[];
};

const convertStateVecToArr = (stateVec: stateVec): stateArr => {
    return {
        position: [stateVec.position.x, stateVec.position.y, stateVec.position.z],
        rotation: [stateVec.rotation.x, stateVec.rotation.y, stateVec.rotation.z],
        scale: [stateVec.scale.x, stateVec.scale.y, stateVec.scale.z],
    };
};

export const getTrajectoryPoints = (animation: unknownObject & AnimationTrajectoryData, state: { current: stateVec }): [Array<stateArr>, Array<stateVec>] => {
    const trajectory: Array<stateArr> = [];
    const trajectoryVec: Array<stateVec> = [];
    trajectoryVec.push(state.current);
    trajectory.push(convertStateVecToArr(state.current));
    if (animation.trajectory == undefined) animation.trajectory = AnimationTrajectory.manual;
    switch (animation.trajectory) {
        case AnimationTrajectory.manual:
            (animation as unknownObject & AnimationManualTrajectoryData).stateIncrements.forEach((increment: ObjectState) => {
                const currentState = trajectoryVec.slice(-1)[0];
                increment.position && currentState.position.add(new Vector3(...increment.position));
                increment.rotation && currentState.rotation.add(new Vector3(...increment.rotation));
                increment.scale && currentState.scale.add(new Vector3(...increment.scale));
                trajectoryVec.push(currentState);
                trajectory.push(convertStateVecToArr(currentState));
            });
            break;
        case AnimationTrajectory.ellipse:
            const pointsE = getPointsOnEllipse((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & EllipseMetaData);
            pointsE.forEach((point) => {
                trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
                trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
            });
            break;
        case AnimationTrajectory.circle:
            const pointsC = getPointsOnCircle((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & CircleMetaData);
            pointsC.forEach((point) => {
                trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
                trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
            });
            break;
        case AnimationTrajectory.curveDefinedByPoints:
            const curve = createCurveByPoints((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & CurveMetaData);
            const pointsD = getPointsOn3DCurve(curve, (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.steps);
            pointsD.forEach((point) => {
                trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
                trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
            });
            break;
        case AnimationTrajectory.multipleCurveDefinedByPoints:
            const curvePath = createMultipleCurvesByPoints((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & MultipleCurveMetaData);
            const pointsP = getPointsOn3DCurve(curvePath, (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.steps);
            pointsP.forEach((point) => {
                trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
                trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
            });
            break;
    }
    return [trajectory, trajectoryVec];
};

export const getTrajectory = <T extends { trajectory: AnimationTrajectory; trajectoryMetaData: unknownObject & TrajectoryMetaData }>(animation: T) => {
    let curve;
    switch (animation.trajectory) {
        case AnimationTrajectory.circle:
            curve = createCircle(animation.trajectoryMetaData as CircleMetaData);
            break;
        case AnimationTrajectory.ellipse:
            curve = createEllipse(animation.trajectoryMetaData as EllipseMetaData);
            break;
        case AnimationTrajectory.curveDefinedByPoints:
            curve = createCurveByPoints(animation.trajectoryMetaData as CurveMetaData);
            break;
        case AnimationTrajectory.multipleCurveDefinedByPoints:
            curve = createMultipleCurvesByPoints(animation.trajectoryMetaData as MultipleCurveMetaData);
    }
    return curve;
};

export const createEllipse = (data: EllipseMetaData): EllipseCurve => {
    const clockwise = data.clockwise == undefined ? false : data.clockwise;
    const rotationZ = data.rotationZ == undefined ? Math.PI / 2 : data.rotationZ;
    const ellipse = new EllipseCurve(
        data.center[0],
        data.center[1], // ax, aY
        data.height,
        data.width, // xRadius, yRadius
        0,
        2 * Math.PI, // aStartAngle, aEndAngle
        clockwise, // aClockwise
        rotationZ // aRotation
    );
    return ellipse;
};

export const getPointsOnEllipse = (data: EllipseMetaData): Array<Vector3> => {
    const ellipse = createEllipse(data);
    const steps = data.steps == undefined ? 100 : data.steps;
    const points2D = ellipse.getPoints(steps);
    const points3D: Array<Vector3> = [];
    points2D.forEach((point) => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotateCurve &&
            data.rotateCurve.forEach((rotation: { axis: number[]; angle: number }) => {
                const axis = new Vector3(...rotation.axis);
                point3D.applyAxisAngle(axis, rotation.angle);
            });
        points3D.push(point3D);
    });
    return points3D;
};

export const createCircle = (data: CircleMetaData): EllipseCurve => {
    const clockwise = data.clockwise == undefined ? false : data.clockwise;
    const rotationZ = data.rotationZ == undefined ? Math.PI / 2 : data.rotationZ;
    const circle = new EllipseCurve(
        data.center[0],
        data.center[1], // ax, aY
        data.radius,
        data.radius, // xRadius, yRadius
        0,
        2 * Math.PI, // aStartAngle, aEndAngle
        clockwise, // aClockwise
        rotationZ // aRotation
    );
    return circle;
};

export const getPointsOnCircle = (data: CircleMetaData): Array<Vector3> => {
    const circle = createCircle(data);
    const points2D = circle.getPoints(data.steps);
    const points3D: Array<Vector3> = [];
    points2D.forEach((point) => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotateCurve &&
            data.rotateCurve.forEach((rotation) => {
                const axis = new Vector3(...rotation.axis);
                point3D.applyAxisAngle(axis, rotation.angle);
            });
        points3D.push(point3D);
    });
    return points3D;
};

export const createQuadraticBezierCurve = (data: CurveMetaData): QuadraticBezierCurve3 => {
    const point1Vec = new Vector3(...data.points[0]);
    const point2Vec = new Vector3(...data.points[1]);
    const point3Vec = new Vector3(...data.points[2]);
    const curve = new QuadraticBezierCurve3(point1Vec, point2Vec, point3Vec);
    return curve;
};

export const createCubicBezierCurve = (data: CurveMetaData): CubicBezierCurve3 => {
    const point1Vec = new Vector3(...data.points[0]);
    const point2Vec = new Vector3(...data.points[1]);
    const point3Vec = new Vector3(...data.points[2]);
    const point4Vec = new Vector3(...data.points[3]);
    const curve = new CubicBezierCurve3(point1Vec, point2Vec, point3Vec, point4Vec);
    return curve;
};

export const createSplineCurve = (data: CurveMetaData): CatmullRomCurve3 => {
    const pointsVec: Array<Vector3> = [];
    data.points.forEach((point) => {
        pointsVec.push(new Vector3(...point));
    });
    const curve = new CatmullRomCurve3(pointsVec);
    return curve;
};

export const createCurveByPoints = (data: CurveMetaData): CurvePath<Vector3> => {
    let curve;
    switch (data.points.length) {
        case 3:
            curve = createQuadraticBezierCurve(data);
            break;
        case 4:
            curve = createCubicBezierCurve(data);
            break;
        default:
            curve = createSplineCurve(data);
            break;
    }
    const curvePath = new CurvePath();
    curvePath.add(curve);
    const closed = data.closed == undefined ? false : data.closed;
    if (closed) curvePath.closePath();
    return curvePath as CurvePath<Vector3>;
};

export const createMultipleCurvesByPoints = (data: MultipleCurveMetaData): CurvePath<Vector3> => {
    const curvePath = new CurvePath();
    data.curves.forEach((curve) => {
        switch (curve.points.length) {
            case 3:
                curvePath.add(createQuadraticBezierCurve(curve));
                break;
            case 4:
                curvePath.add(createCubicBezierCurve(curve));
                break;
            default:
                curvePath.add(createSplineCurve(curve));
                break;
        }
    });
    const closed = data.closed == undefined ? false : data.closed;
    if (closed) curvePath.closePath();
    return curvePath as CurvePath<Vector3>;
};

export const getPointsOn3DCurve = (curve: CurvePath<Vector>, steps?: number): Array<Vector3> => {
    if (steps == undefined) steps = 100;
    const points = curve.getPoints(steps);
    return points as Array<Vector3>;
};
