import { CubicBezierCurve3, CurvePath, QuadraticBezierCurve3, Vector3 } from "three";
import { trajectoryDefaults } from "../../constants/defaults";
import { CubicBezierCurve3MetaData, QuadraticBezierCurve3MetaData } from "../../types/trajectoryTypes";

export const createQuadraticBezierCurve3 = (data: QuadraticBezierCurve3MetaData) => {
    const point1Vec = new Vector3(...data.points[0]);
    const point2Vec = new Vector3(...data.points[1]);
    const point3Vec = new Vector3(...data.points[2]);
    const curve = new QuadraticBezierCurve3(point1Vec, point2Vec, point3Vec);
    return curve;
};

export const createCubicBezierCurve3 = (data: CubicBezierCurve3MetaData) => {
    const point1Vec = new Vector3(...data.points[0]);
    const point2Vec = new Vector3(...data.points[1]);
    const point3Vec = new Vector3(...data.points[2]);
    const point4Vec = new Vector3(...data.points[3]);
    const curve = new CubicBezierCurve3(point1Vec, point2Vec, point3Vec, point4Vec);
    return curve;
};

export const getPointsOnQuadraticBezierCurve3 = (data: QuadraticBezierCurve3MetaData) => {
    const curve = createQuadraticBezierCurve3(data);
    const curvePath = new CurvePath();
    curvePath.add(curve);
    const closed = data.closed == undefined ? trajectoryDefaults.closed : data.closed;
    if (closed) curvePath.closePath();
    const steps = data.steps == undefined ? trajectoryDefaults.steps : data.steps;
    const equiSpacedPoints = data.equiSpacedPoints == undefined ? trajectoryDefaults.equiSpacedPoints : data.equiSpacedPoints;
    const points3D = equiSpacedPoints ? curve.getSpacedPoints(steps) : curve.getPoints(steps);
    return points3D as Array<Vector3>;
};

export const getPointsOnCubicBezierCurve3 = (data: CubicBezierCurve3MetaData) => {
    const curve = createCubicBezierCurve3(data);
    const curvePath = new CurvePath();
    curvePath.add(curve);
    const closed = data.closed == undefined ? trajectoryDefaults.closed : data.closed;
    if (closed) curvePath.closePath();
    const steps = data.steps == undefined ? trajectoryDefaults.steps : data.steps;
    const equiSpacedPoints = data.equiSpacedPoints == undefined ? trajectoryDefaults.equiSpacedPoints : data.equiSpacedPoints;
    const points3D = equiSpacedPoints ? curve.getSpacedPoints(steps) : curve.getPoints(steps);
    return points3D as Array<Vector3>;
};

