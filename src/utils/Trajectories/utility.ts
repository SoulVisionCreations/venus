import { Vector3 } from 'three';
import { animationDefaults } from '../../constants/defaults';
import { AnimationTrajectory } from '../../types/animationTypes';
import { Trajectory } from '../../types/enums';
import { strongObject3DStateOfArrays, strongObject3DStateOfVectors } from '../../types/object3DTypes';
import {
    CircleMetaData,
    CubicBezierCurve3MetaData,
    EllipseMetaData,
    line1DMetaData,
    lineCurve3MetaData,
    multipleCurve3MetaData,
    QuadraticBezierCurve3MetaData,
    SplineCurve3MetaData,
    TrajectoryMetaData,
} from '../../types/trajectoryTypes';
import { convertStateVecToArr } from '../utility';
import { createCubicBezierCurve3, createQuadraticBezierCurve3, getPointsOnCubicBezierCurve3, getPointsOnQuadraticBezierCurve3 } from './BezierCurves';
import { createCircle, getPointsOnCircle } from './Circle';
import { createEllipse, getPointsOnEllipse } from './Ellipse';
import { getPointsOnLine1D } from './line1D';
import { createLineCurve3, getPointsOnLineCurve3 } from './line3D';
import { createMultipleCurvePath, getPointsOnMultipleCurvePath } from './multipleCurvePath';
import { createSplineCurve3, getPointsOnSplineCurve3 } from './SplineCurve';

export const getTrajectory = (trajectoryMetaData: TrajectoryMetaData) => {
    let curve;
    const { type, ...data } = trajectoryMetaData;
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
        case Trajectory.line1D:
            curve = data;
    }
    return curve;
};

const getTrajectoryPoints = (trajectoryMetaData: TrajectoryMetaData) => {
    const { type, ...data } = trajectoryMetaData;
    let points: Array<Vector3 | number> = [];
    switch (type) {
        case Trajectory.circle:
            points = getPointsOnCircle(data as CircleMetaData);
            break;
        case Trajectory.ellipse:
            points = getPointsOnEllipse(data as EllipseMetaData);
            break;
        case Trajectory.line3:
            points = getPointsOnLineCurve3(data as lineCurve3MetaData);
            break;
        case Trajectory.quadracticBezierCurve3:
            points = getPointsOnQuadraticBezierCurve3(data as QuadraticBezierCurve3MetaData);
            break;
        case Trajectory.cubicBezierCurve3:
            points = getPointsOnCubicBezierCurve3(data as CubicBezierCurve3MetaData);
            break;
        case Trajectory.splineCurve3:
            points = getPointsOnSplineCurve3(data as SplineCurve3MetaData);
            break;
        case Trajectory.multipleCurvePath:
            points = getPointsOnMultipleCurvePath(data as multipleCurve3MetaData);
            break;
        case Trajectory.line1D:
            points = getPointsOnLine1D(data as line1DMetaData);
            break;
    }
    return points;
};

export const getStateTrajectoryPoints = (
    animationTrajectory: AnimationTrajectory,
    state: { current: strongObject3DStateOfVectors },
    trajectorySteps?: number
): [Array<strongObject3DStateOfVectors>, Array<strongObject3DStateOfArrays>] => {
    const stateTrajectoryVec: Array<strongObject3DStateOfVectors> = [];
    const stateTrajectoryArr: Array<strongObject3DStateOfArrays> = [];
    const steps = trajectorySteps ?? animationDefaults.steps;
    let positionTrajectory, rotationTrajectory, scaleTrajectory, opacityTrajectory;
    if (animationTrajectory.position) {
        const positionTrajectoryMetaData = { ...animationTrajectory.position.trajectoryMetaData, steps: steps };
        positionTrajectory = getTrajectoryPoints(positionTrajectoryMetaData);
    }
    if (animationTrajectory.rotation) {
        const rotationTrajectoryMetaData = { ...animationTrajectory.rotation.trajectoryMetaData, steps: steps };
        rotationTrajectory = getTrajectoryPoints(rotationTrajectoryMetaData);
    }
    if (animationTrajectory.scale) {
        const scaleTrajectoryMetaData = { ...animationTrajectory.scale.trajectoryMetaData, steps: steps };
        scaleTrajectory = getTrajectoryPoints(scaleTrajectoryMetaData);
    }
    if (animationTrajectory.opacity) {
        const opacityTrajectoryMetaData = { ...animationTrajectory.opacity.trajectoryMetaData, steps: steps };
        opacityTrajectory = getTrajectoryPoints(opacityTrajectoryMetaData);
    }
    for (let i = 0; i <= steps; i++) {
        stateTrajectoryVec.push({
            position: (positionTrajectory ? positionTrajectory[i] : state.current.position) as Vector3,
            rotation: (rotationTrajectory ? rotationTrajectory[i] : state.current.rotation) as Vector3,
            scale: (scaleTrajectory ? scaleTrajectory[i] : state.current.scale) as Vector3,
            opacity: (opacityTrajectory ? opacityTrajectory[i] : state.current.opacity) as number,
        });
        stateTrajectoryArr.push(convertStateVecToArr(stateTrajectoryVec[i]));
    }
    return [stateTrajectoryVec, stateTrajectoryArr];
};
