import { line1DMetaData } from "../../types/trajectoryTypes";
import { unknownObject } from "../../types/types";

export const getPointsOnLine1D = (data: line1DMetaData) => {
    const points = [];
    let currentPoint = data.startPoint;
    const steps = data.steps == undefined ? 100 : data.steps;
    const length = data.endPoint - data.startPoint;
    const increment = Math.round((length/steps)*100)/100;
    while(currentPoint < data.endPoint) {
        points.push(currentPoint);
        currentPoint += increment;
        currentPoint = Math.round(currentPoint*100)/100;
    }
    points.push(data.endPoint);
    return points as Array<number>;
};

export const getPointAtLine1D = (data: line1DMetaData & unknownObject, state: number) => {
    const length = data.endPoint - data.startPoint;
    const point = data.startPoint + length*state;
    return point;
}