import { Trajectory } from './enums';

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

export type lineCurve3MetaData = {
    startPoint: number[];
    endPoint: number[];
    steps?: number;
    equiSpacedPoints?: boolean;
};

export type multipleCurve3MetaData = {
    curves: Array<TrajectoryMetaData & { type: Trajectory }>;
    steps?: number;
    closed?: number;
    equiSpacedPoints?: boolean;
};

export type line1DMetaData = {
    startPoint: number;
    endPoint: number;
    steps?: number;
}

export type TrajectoryMetaData = {
    type: Trajectory;
} & (EllipseMetaData | CircleMetaData | QuadraticBezierCurve3MetaData | CubicBezierCurve3MetaData | SplineCurve3MetaData | lineCurve3MetaData | line1DMetaData | multipleCurve3MetaData);
