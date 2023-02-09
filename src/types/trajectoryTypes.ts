import { CatmullRomCurve3, CubicBezierCurve, QuadraticBezierCurve, SplineCurve } from 'three';

export type EllipseMetaData = {
    clockwise?: boolean;
    rotationZ?: number;
    center: number[];
    width: number;
    height: number;
    steps?: number;
    rotateCurve?: Array<{ axis: number[]; angle: number }>;
};

export type CircleMetaData = {
    clockwise?: boolean;
    rotationZ?: number;
    center: number[];
    radius: number;
    steps?: number;
    rotateCurve?: Array<{ axis: number[]; angle: number }>;
};

export type CurveMetaData = {
    points: Array<number[]>;
    steps?: number;
    closed?: boolean;
};

export type MultipleCurveMetaData = {
    curves: Array<{ points: Array<number[]> }>;
    closed?: boolean;
    steps?: number;
};

export type TrajectoryMetaData = EllipseMetaData | CircleMetaData | CurveMetaData | MultipleCurveMetaData;

export type CurveType = QuadraticBezierCurve | CubicBezierCurve | SplineCurve | CatmullRomCurve3;
