// import { CatmullRomCurve3, CubicBezierCurve3, CurvePath, EllipseCurve, QuadraticBezierCurve3, Vector, Vector3 } from 'three';
// import { AnimationTrajectory } from '../../types/enums';
// import { AnimationGeneratedTrajectoryData, AnimationManualTrajectoryData, AnimationTrajectoryData, ObjectState } from '../../types/animationTypes';
// import { CircleMetaData, CurveMetaData, EllipseMetaData, MultipleCurveMetaData, TrajectoryMetaData } from '../../types/trajectoryTypes';
// import { unknownObject } from '../../types/types';
// import { convertVec3ToArray } from '../utility';

// export type stateVec = {
//     position: Vector3;
//     rotation: Vector3;
//     scale: Vector3;
// };

// type stateArr = {
//     position: number[];
//     rotation: number[];
//     scale: number[];
// };

// const convertStateVecToArr = (stateVec: stateVec): stateArr => {
//     return {
//         position: [stateVec.position.x, stateVec.position.y, stateVec.position.z],
//         rotation: [stateVec.rotation.x, stateVec.rotation.y, stateVec.rotation.z],
//         scale: [stateVec.scale.x, stateVec.scale.y, stateVec.scale.z],
//     };
// };

// export const getTrajectoryPoints = (animation: unknownObject & AnimationTrajectoryData, state: { current: stateVec }): [Array<stateArr>, Array<stateVec>] => {
//     const trajectory: Array<stateArr> = [];
//     const trajectoryVec: Array<stateVec> = [];
//     trajectoryVec.push(state.current);
//     trajectory.push(convertStateVecToArr(state.current));
//     if (animation.trajectory == undefined) animation.trajectory = AnimationTrajectory.manual;
//     switch (animation.trajectory) {
//         case AnimationTrajectory.manual:
//             (animation as unknownObject & AnimationManualTrajectoryData).stateIncrements.forEach((increment: ObjectState) => {
//                 const currentState = trajectoryVec.slice(-1)[0];
//                 increment.position && currentState.position.add(new Vector3(...increment.position));
//                 increment.rotation && currentState.rotation.add(new Vector3(...increment.rotation));
//                 increment.scale && currentState.scale.add(new Vector3(...increment.scale));
//                 trajectoryVec.push(currentState);
//                 trajectory.push(convertStateVecToArr(currentState));
//             });
//             break;
//         case AnimationTrajectory.ellipse:
//             const pointsE = getPointsOnEllipse((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & EllipseMetaData);
//             pointsE.forEach((point) => {
//                 trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
//                 trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
//             });
//             break;
//         case AnimationTrajectory.circle:
//             const pointsC = getPointsOnCircle((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & CircleMetaData);
//             pointsC.forEach((point) => {
//                 trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
//                 trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
//             });
//             break;
//         case AnimationTrajectory.curveDefinedByPoints:
//             const curve = createCurveByPoints((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & CurveMetaData);
//             const pointsD = getPointsOn3DCurve(curve, (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.steps);
//             pointsD.forEach((point) => {
//                 trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
//                 trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
//             });
//             break;
//         case AnimationTrajectory.multipleCurveDefinedByPoints:
//             const curvePath = createMultipleCurvesByPoints((animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData as unknownObject & MultipleCurveMetaData);
//             const pointsP = getPointsOn3DCurve(curvePath, (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.steps);
//             pointsP.forEach((point) => {
//                 trajectory.push({ position: convertVec3ToArray(point), rotation: trajectory[0].rotation, scale: trajectory[0].scale });
//                 trajectoryVec.push({ position: point, rotation: trajectoryVec[0].rotation, scale: trajectoryVec[0].scale });
//             });
//             break;
//     }
//     return [trajectory, trajectoryVec];
// };

// export const createMultipleCurvesByPoints = (data: MultipleCurveMetaData): CurvePath<Vector3> => {
//     const curvePath = new CurvePath();
//     data.curves.forEach((curve) => {
//         switch (curve.points.length) {
//             case 3:
//                 curvePath.add(createQuadraticBezierCurve(curve));
//                 break;
//             case 4:
//                 curvePath.add(createCubicBezierCurve(curve));
//                 break;
//             default:
//                 curvePath.add(createSplineCurve(curve));
//                 break;
//         }
//     });
//     const closed = data.closed == undefined ? false : data.closed;
//     if (closed) curvePath.closePath();
//     return curvePath as CurvePath<Vector3>;
// };

// export const getPointsOn3DCurve = (curve: CurvePath<Vector>, steps?: number): Array<Vector3> => {
//     if (steps == undefined) steps = 100;
//     const points = curve.getPoints(steps);
//     return points as Array<Vector3>;
// };
