import { EllipseCurve, Vector3 } from "three";
import { trajectoryDefaults } from "../../constants/defaults";
import { CircleMetaData } from "../../types/trajectoryTypes";

export const createCircle = (data: CircleMetaData) => {
    const clockwise = data.clockwise == undefined ? trajectoryDefaults.clockwise : data.clockwise;
    const rotationZ = data.rotationZ == undefined ? 0 : data.rotationZ;
    const circle = new EllipseCurve(
        data.center[0],
        data.center[1], // ax, aY
        data.radius,
        data.radius, // xRadius, yRadius
        0,
        2 * Math.PI, // aStartAngle, aEndAngle
        clockwise, // aClockwise
        rotationZ // aRotation
    );
    return circle;
};

export const getPointsOnCircle = (data: CircleMetaData): Array<Vector3> => {
    const circle = createCircle(data);
    const steps = data.steps == undefined ? trajectoryDefaults.steps : data.steps;
    const points2D = circle.getPoints(steps);
    const points3D: Array<Vector3> = [];
    points2D.forEach((point) => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotateCurve &&
            data.rotateCurve.forEach((rotation) => {
                const axis = new Vector3(...rotation.axis);
                point3D.applyAxisAngle(axis, rotation.angle);
            });
        points3D.push(point3D);
    });
    return points3D;
};