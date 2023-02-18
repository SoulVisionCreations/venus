import { LineCurve3, Vector3 } from "three"
import { trajectoryDefaults } from "../../constants/defaults";
import { lineCurve3MetaData } from "../../types/trajectoryTypes"
import { arrayToVec3 } from "../utility"

export const createLineCurve3 = (data: lineCurve3MetaData) => {
    const curve = new LineCurve3(arrayToVec3(data.startPoint), arrayToVec3(data.endPoint));
    return curve;
}

export const getPointsOnLineCurve3 = (data: lineCurve3MetaData) => {
    const curve = new LineCurve3(arrayToVec3(data.startPoint), arrayToVec3(data.endPoint));
    const steps = data.steps == undefined ? trajectoryDefaults.steps : data.steps;
    const points3D = curve.getSpacedPoints(steps);
    return points3D as Array<Vector3>;
}