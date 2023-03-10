import { AnimationTrajectory } from '../../../types/animationTypes';
import { Trajectory } from '../../../types/enums';
import {
    CircleMetaData,
    CubicBezierCurve3MetaData,
    EllipseMetaData,
    Line1DMetaData,
    Line3DMetaData,
    MultipleCurve3MetaData,
    QuadraticBezierCurve3MetaData,
    SplineCurve3MetaData,
    TrajectoryMetaData,
} from '../../../types/trajectoryTypes';

export const initialEllipseMetaData: EllipseMetaData = {
    clockwise: true,
    rotationZ: 0,
    center: [0, 0, 0],
    width: 2,
    height: 1,
    steps: 100,
    rotateCurve: [],
    equiSpacedPoints: true,
};

export const initialCircleMetaData: CircleMetaData = {
    clockwise: true,
    rotationZ: 0,
    center: [0, 0, 0],
    radius: 1,
    steps: 100,
    rotateCurve: [],
    equiSpacedPoints: true,
};

export const initialQuadraticBezierCurve3MetaData: QuadraticBezierCurve3MetaData = {
    points: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    steps: 100,
    closed: false,
    equiSpacedPoints: true,
};

export const initialCubicBezierCurve3MetaData: CubicBezierCurve3MetaData = {
    points: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    steps: 100,
    closed: false,
    equiSpacedPoints: true,
};

export const initialSplineCurve3MetaData: SplineCurve3MetaData = {
    points: [], // needs atleast 2 points
    steps: 100,
    closed: false,
    equiSpacedPoints: true,
};

export const initialLine3DMetaData: Line3DMetaData = {
    startPoint: [0, 0, 0],
    endPoint: [0, 0, 0],
    steps: 100,
    equiSpacedPoints: true,
};

export const initialMultipleCurve3MetaData: MultipleCurve3MetaData = {
    curves: [],
    steps: 100,
    closed: false,
    equiSpacedPoints: true,
};

export const initialLine1DMetaData: Line1DMetaData = {
    startPoint: 0,
    endPoint: 0,
    steps: 100,
};

export const initialTrajectoryMetaData: TrajectoryMetaData = {
    type: Trajectory.line3D,
    ...initialEllipseMetaData,
    ...initialCircleMetaData,
    ...initialCubicBezierCurve3MetaData,
    ...initialQuadraticBezierCurve3MetaData,
    ...initialMultipleCurve3MetaData,
    ...initialLine1DMetaData,
    ...initialLine3DMetaData,
    ...initialSplineCurve3MetaData,
};

export const IntitalTrajectoryState: AnimationTrajectory = {
    rotation: {
        trajectoryMetaData: initialTrajectoryMetaData,
        speed: 0,
    },
    position: {
        trajectoryMetaData: initialTrajectoryMetaData,
        speed: 0,
    },
    scale: {
        trajectoryMetaData: initialTrajectoryMetaData,
        speed: 0,
    },
    opacity: {
        trajectoryMetaData: initialTrajectoryMetaData,
        speed: 0,
    },
};
