import { Trajectory } from "../../types/enums";
import { weakObject3DStateofArrays, weakObject3DStateofVectors } from "../../types/object3DTypes";
import { CircleMetaData, CubicBezierCurve3MetaData, EllipseMetaData, lineCurve3MetaData, multipleCurve3MetaData, QuadraticBezierCurve3MetaData, SplineCurve3MetaData, TrajectoryMetaData } from "../../types/trajectoryTypes";
import { createCubicBezierCurve3, createQuadraticBezierCurve3 } from "./BezierCurves";
import { createCircle } from "./Circle";
import { createEllipse } from "./Ellipse";
import { createLineCurve3 } from "./line3";
import { createMultipleCurvePath } from "./multipleCurvePath";
import { createSplineCurve3 } from "./SplineCurve";

export const getTrajectory = (trajectoryMetaData: TrajectoryMetaData) => {
    let curve;
    const {type, ...data} = trajectoryMetaData;
    switch (type) {
        case Trajectory.circle:
            curve = createCircle(data as CircleMetaData);
            break;
        case Trajectory.ellipse:
            curve = createEllipse(data as EllipseMetaData);
            break;
        case Trajectory.line3:
            curve = createLineCurve3(data as lineCurve3MetaData);
            break;
        case Trajectory.quadracticBezierCurve3:
            curve = createQuadraticBezierCurve3(data as QuadraticBezierCurve3MetaData);
            break;
        case Trajectory.cubicBezierCurve3:
            curve = createCubicBezierCurve3(data as CubicBezierCurve3MetaData);
            break;
        case Trajectory.splineCurve3:
            curve = createSplineCurve3(data as SplineCurve3MetaData);
            break;
        case Trajectory.multipleCurvePath:
            curve = createMultipleCurvePath(data as multipleCurve3MetaData);
            break;
    }
    return curve;
};

const convertStateVecToArr = (stateVec: stateVec): stateArr => {
    return {
        position: [stateVec.position.x, stateVec.position.y, stateVec.position.z],
        rotation: [stateVec.rotation.x, stateVec.rotation.y, stateVec.rotation.z],
        scale: [stateVec.scale.x, stateVec.scale.y, stateVec.scale.z],
    };
};

export const getTrajectoryPoints = (animation, state: ): [Array<weakObject3DStateofArrays>, Array<weakObject3DStateofVectors>] => {
    const trajectory: Array<weakObject3DStateofArrays> = [];
    const trajectoryVec: Array<weakObject3DStateofVectors> = [];
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