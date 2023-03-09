import { CurvePath, Vector3 } from 'three';
import { trajectoryDefaults } from '../../constants/defaults';
import { Trajectory } from '../../types/enums';
import { CubicBezierCurve3MetaData, lineCurve3MetaData, multipleCurve3MetaData, QuadraticBezierCurve3MetaData, SplineCurve3MetaData } from '../../types/trajectoryTypes';
import { createCubicBezierCurve3, createQuadraticBezierCurve3 } from './BezierCurves';
import { createLineCurve3 } from './line3D';
import { createSplineCurve3 } from './SplineCurve';

export const createMultipleCurvePath = (data: multipleCurve3MetaData) => {
    const curvePath = new CurvePath();
    data.curves.forEach((curve) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { type, ...data } = curve;
        switch (curve.type) {
            case Trajectory.quadracticBezierCurve3:
                curvePath.add(createQuadraticBezierCurve3(data as QuadraticBezierCurve3MetaData));
                break;
            case Trajectory.cubicBezierCurve3:
                curvePath.add(createCubicBezierCurve3(data as CubicBezierCurve3MetaData));
                break;
            case Trajectory.splineCurve3:
                curvePath.add(createSplineCurve3(data as SplineCurve3MetaData));
                break;
            case Trajectory.line3:
                curvePath.add(createLineCurve3(data as lineCurve3MetaData));
                break;
        }
    });
    const closed = data.closed == undefined ? trajectoryDefaults.closed : data.closed;
    if (closed) curvePath.closePath();
    return curvePath as CurvePath<Vector3>;
};

export const getPointsOnMultipleCurvePath = (data: multipleCurve3MetaData) => {
    const curve = createMultipleCurvePath(data);
    const steps = data.steps == undefined ? trajectoryDefaults.steps : data.steps;
    const equiSpacedPoints = data.equiSpacedPoints == undefined ? trajectoryDefaults.equiSpacedPoints : data.equiSpacedPoints;
    const points3D = equiSpacedPoints ? curve.getSpacedPoints(steps) : curve.getPoints(steps);
    return points3D as Array<Vector3>;
};
