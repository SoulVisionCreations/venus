import { EllipseCurve, Vector3 } from 'three';
import { EllipseMetaData } from '../../types/trajectoryTypes';

export const createEllipse = (data: EllipseMetaData) => {
    const clockwise = data.clockwise == undefined ? false : data.clockwise;
    const rotationZ = data.rotationZ == undefined ? Math.PI / 2 : data.rotationZ;
    const ellipse = new EllipseCurve(
        data.center[0],
        data.center[1], // ax, aY
        data.height,
        data.width, // xRadius, yRadius
        0,
        2 * Math.PI, // aStartAngle, aEndAngle
        clockwise, // aClockwise
        rotationZ // aRotation
    );
    return ellipse;
};

export const getPointsOnEllipse = (data: EllipseMetaData) => {
    const ellipse = createEllipse(data);
    const steps = data.steps == undefined ? 100 : data.steps;
    const points2D = ellipse.getPoints(steps);
    const points3D: Array<Vector3> = [];
    points2D.forEach((point) => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotateCurve &&
            data.rotateCurve.forEach((rotation: { axis: number[]; angle: number }) => {
                const axis = new Vector3(...rotation.axis);
                point3D.applyAxisAngle(axis, rotation.angle);
            });
        points3D.push(point3D);
    });
    return points3D;
};
