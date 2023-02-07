import { CatmullRomCurve3, CubicBezierCurve3, CurvePath, EllipseCurve, QuadraticBezierCurve3, Vector3 } from 'three';
import { AnimationTrajectory } from '../../enums';
import { circleMetaData, curveMetaData, ellipseMetaData, multipleCurveMetaData } from '../../Types/trajectoryTypes';

type stateVec = {
  position: Vector3; 
  rotation: Vector3; 
  scale: Vector3
}

type stateArr = {
  position: number[];
  rotation: number[];
  scale: number[];
}

const convertVec3ToArray = (vec: Vector3) => {
  return [vec.x, vec.y, vec.z];
}

const convertStateVecToArr = (stateVec: stateVec): stateArr => {
  return {
    position: [stateVec.position.x, stateVec.position.y, stateVec.position.z],
    rotation: [stateVec.rotation.x, stateVec.rotation.y, stateVec.rotation.z],
    scale: [stateVec.scale.x, stateVec.scale.y, stateVec.scale.z],
  };
};

export const getTrajectoryPoints = (animation: any, state: {current: stateVec}) => {
  const trajectory: Array<stateArr> = [];
  const trajectoryVec: Array<stateVec> = [];
  trajectoryVec.push(state.current);
  trajectory.push(convertStateVecToArr(state.current));
  if (animation.trajectory == undefined) animation.trajectory = AnimationTrajectory.manual;
  switch (animation.trajectory) {
    case AnimationTrajectory.manual:
      animation.stateIncrements.forEach((increment: stateArr) => {
        const currentState = trajectoryVec.slice(-1)[0];
        increment.position && currentState.position.add(new Vector3(...increment.position));
        increment.rotation && currentState.rotation.add(new Vector3(...increment.rotation));
        increment.scale && currentState.scale.add(new Vector3(...increment.scale));
        trajectoryVec.push(currentState);
        trajectory.push(convertStateVecToArr(currentState));
      });
      break;
    case AnimationTrajectory.ellipse:
      const pointsE = getPointsOnEllipse(animation.trajectoryMetaData);
      pointsE.forEach((point) => {
        trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
        trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
      });
      break;
    case AnimationTrajectory.circle:
      const pointsC = getPointsOnCircle(animation.trajectoryMetaData);
      pointsC.forEach((point) => {
        trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
        trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
      });
      break;
    case AnimationTrajectory.curveDefinedByPoints:
      const curve = createCurveByPoints(animation.trajectoryMetaData);
      const pointsD = getPointsOn3DCurve(curve, animation.trajectoryMetaData.steps);
      pointsD.forEach((point) => {
        trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
        trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
      });
      break;
    case AnimationTrajectory.multipleCurveDefinedByPoints:
      // const curvePath = createMultipleCurvesByPoints(
      //   animation.trajectoryMetaData
      // )
      const pointsP = getPointsOn3DCurve(curve, animation.trajectoryMetaData.steps);
      pointsP.forEach((point) => {
        trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
        trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
      });
      break;
  }
  return [trajectory, trajectoryVec];
};

export const getTrajectory = (animation: any) => {
  let curve;
  switch (animation.trajectory) {
    case AnimationTrajectory.circle:
      curve = createCircle(animation.trajectoryMetaData);
      break;
    case AnimationTrajectory.ellipse:
      curve = createEllipse(animation.trajectoryMetaData);
      break;
    case AnimationTrajectory.curveDefinedByPoints:
      curve = createCurveByPoints(animation.trajectoryMetaData);
      break;
    case AnimationTrajectory.multipleCurveDefinedByPoints:
      curve = createMultipleCurvesByPoints(animation.trajectoryMetaData);
  }
  return curve;
};

export const createEllipse = (data: ellipseMetaData): EllipseCurve => {
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

export const getPointsOnEllipse = (data: ellipseMetaData): Array<Vector3> => {
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

export const createCircle = (data: circleMetaData): EllipseCurve => {
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

export const getPointsOnCircle = (data: circleMetaData): Array<Vector3> => {
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

export const createQuadraticBezierCurve = (data: curveMetaData): QuadraticBezierCurve3 => {
  const point1Vec = new Vector3(...data.points[0]);
  const point2Vec = new Vector3(...data.points[1]);
  const point3Vec = new Vector3(...data.points[2]);
  const curve = new QuadraticBezierCurve3(point1Vec, point2Vec, point3Vec);
  return curve;
};

export const createCubicBezierCurve = (data: curveMetaData): CubicBezierCurve3 => {
  const point1Vec = new Vector3(...data.points[0]);
  const point2Vec = new Vector3(...data.points[1]);
  const point3Vec = new Vector3(...data.points[2]);
  const point4Vec = new Vector3(...data.points[3]);
  const curve = new CubicBezierCurve3(point1Vec, point2Vec, point3Vec, point4Vec);
  return curve;
};

export const createSplineCurve = (data: curveMetaData): CatmullRomCurve3 => {
  const pointsVec: Array<Vector3> = [];
  data.points.forEach((point) => {
    pointsVec.push(new Vector3(...point));
  });
  const curve = new CatmullRomCurve3(pointsVec);
  return curve;
};

export const createCurveByPoints = (data: curveMetaData): CurvePath<any> => {
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
  return curvePath;
};

export const createMultipleCurvesByPoints = (data: multipleCurveMetaData) => {
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
  return curvePath;
};

export const getPointsOn3DCurve = (curve: any, steps: number): Array<Vector3> => {
  if (steps == undefined) steps = 100;
  const points = curve.getPoints(steps);
  return points;
};
