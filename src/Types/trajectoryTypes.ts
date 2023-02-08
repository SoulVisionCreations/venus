import { CatmullRomCurve3, CubicBezierCurve, QuadraticBezierCurve, SplineCurve } from 'three';

export type ellipseMetaData = {
    clockwise?: boolean;
    rotationZ?: number;
    center: number[];
    width: number;
    height: number;
    steps?: number;
    rotateCurve?: Array<{ axis: number[]; angle: number }>;
};

export type circleMetaData = {
    clockwise?: boolean;
    rotationZ?: number;
    center: number[];
    radius: number;
    steps?: number;
    rotateCurve?: Array<{ axis: number[]; angle: number }>;
};

export type curveMetaData = {
    points: Array<number[]>;
    steps?: number;
    closed?: boolean;
};

export type multipleCurveMetaData = {
    curves: Array<{ points: Array<number[]> }>;
    closed?: boolean;
    steps?: number;
};

export type trajectoryMetaData = ellipseMetaData | circleMetaData | curveMetaData | multipleCurveMetaData;

export type curve = QuadraticBezierCurve | CubicBezierCurve | SplineCurve | CatmullRomCurve3;
