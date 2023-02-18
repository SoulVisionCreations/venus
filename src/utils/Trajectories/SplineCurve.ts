import { CatmullRomCurve3, CurvePath, Vector3 } from "three";
import { trajectoryDefaults } from "../../constants/defaults";
import { SplineCurve3MetaData } from "../../types/trajectoryTypes";

// Create a smooth 3d spline curve from a series of points using the Catmull-Rom algorithm.
export const createSplineCurve3 = (data: SplineCurve3MetaData) => {
    const pointsVec: Array<Vector3> = [];
    data.points.forEach((point) => {
        pointsVec.push(new Vector3(...point));
    });
    const curve = new CatmullRomCurve3(pointsVec);
    return curve;
};

export const getPointsOnSplineCurve3 = (data: SplineCurve3MetaData) => {
    const curve = createSplineCurve3(data);
    const curvePath = new CurvePath();
    curvePath.add(curve);
    const closed = data.closed == undefined ? trajectoryDefaults.closed : data.closed;
    if (closed) curvePath.closePath();
    const steps = data.steps == undefined ? trajectoryDefaults.steps : data.steps;
    const equiSpacedPoints = data.equiSpacedPoints == undefined ? trajectoryDefaults.equiSpacedPoints : data.equiSpacedPoints;
    const points3D = equiSpacedPoints ? curve.getSpacedPoints(steps) : curve.getPoints(steps);
    return points3D as Array<Vector3>;
};