import { TrajectoryTypes } from './enums';

export type EllipseMetaData = {
    clockwise?: boolean;
    rotationZ?: number;
    center: number[];
    width: number;
    height: number;
    steps?: number;
    rotateCurve?: Array<{ axis: number[]; angle: number }>;
    equiSpacedPoints?: boolean;
};

export type CircleMetaData = {
    clockwise?: boolean;
    rotationZ?: number;
    center: number[];
    radius: number;
    steps?: number;
    rotateCurve?: Array<{ axis: number[]; angle: number }>;
    equiSpacedPoints?: boolean;
};

export type QuadraticBezierCurve3MetaData = {
    points: [number[], number[], number[]];
    steps?: number;
    closed?: boolean;
    equiSpacedPoints?: boolean;
};

export type CubicBezierCurve3MetaData = {
    points: [number[], number[], number[], number[]];
    steps?: number;
    closed?: boolean;
    equiSpacedPoints?: boolean;
};

export type SplineCurve3MetaData = {
    points: Array<number[]>; // needs atleast 2 points
    steps?: number;
    closed?: boolean;
    equiSpacedPoints?: boolean;
};

export type Line3DMetaData = {
    startPoint: number[];
    endPoint: number[];
    steps?: number;
    equiSpacedPoints?: boolean;
};

export type MultipleCurve3MetaData = {
    curves: Array<TrajectoryMetaData & { type: TrajectoryTypes }>;
    steps?: number;
    closed?: boolean;
    equiSpacedPoints?: boolean;
};

export type Line1DMetaData = {
    startPoint: number;
    endPoint: number;
    steps?: number;
};

export type TrajectoryMetaData = {
    type: TrajectoryTypes;
} & (EllipseMetaData | CircleMetaData | QuadraticBezierCurve3MetaData | CubicBezierCurve3MetaData | SplineCurve3MetaData | Line3DMetaData | Line1DMetaData | MultipleCurve3MetaData);
