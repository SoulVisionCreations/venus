import { EllipseCurve, Vector3 } from "three";

export const createEllipse = (data) => {
    const ellipse = new EllipseCurve(
        data.center[0],  data.center[1],            // ax, aY
        data.height, data.width,           // xRadius, yRadius
        0,  2*Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        Math.PI/2                    // aRotation
    );
    const points2D = ellipse.getPoints(data.steps);
    const points3D = [];
    points2D.forEach(point => {
        const point3D = new Vector3(point.x, point.y, data.center[2]);
        data.rotate && data.rotate.forEach(rotation => {
            const axis = new Vector3(...rotation.axis);
            point3D.applyAxisAngle(axis, rotation.angle);
        })
        points3D.push(point3D);
    });
    return points3D;
}