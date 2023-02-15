import { Euler, Matrix4, Quaternion, Vector2, Vector3, Vector4 } from 'three';
import { objectDefaults } from '../constants/defaults';

export function degToRad(deg: number): number {
    return deg * (Math.PI / 180);
}

export const convertVec3ToArray = (vec: Vector3) => {
    return [vec.x, vec.y, vec.z];
};

export const arrayToVec = (arr: Array<number>) => {
    switch (arr.length) {
        case 2:
            return new Vector2(...arr);
        case 3:
            return new Vector3(...arr);
        case 4:
            return new Vector4(...arr);
        default:
            return 'invalidInput';
    }
};

export const arrayToVec3 = (arr: Array<number>) => {
    return new Vector3(...arr);
};

export const arrayToEuler = (arr: Array<number>) => {
    return new Euler(...arr);
};

export const getInitialStateArr = (instance: any): Array<number[]> => {
    const position = instance.position ? instance.position : objectDefaults.position;
    const rotation = instance.rotation ? instance.rotation : objectDefaults.rotation;
    const scale = instance.scale ? instance.scale : objectDefaults.scale;
    return [position, rotation, scale];
};

export const getInitialState = (instance: any): Array<Vector3> => {
    const position = instance.position ? new Vector3(...instance.position) : new Vector3(...objectDefaults.position);
    const rotation = instance.rotation ? new Vector3(...instance.rotation) : new Vector3(...objectDefaults.rotation);
    const scale = instance.scale ? new Vector3(...instance.scale) : new Vector3(...objectDefaults.scale);
    return [position, rotation, scale];
};

export const createMatrix4 = (position: Vector3, rotation: Vector3, scale: Vector3): Matrix4 => {
    const quaternion = new Quaternion();
    const euler = new Euler();
    euler.setFromVector3(rotation);
    quaternion.setFromEuler(euler);
    const matrix = new Matrix4();
    matrix.compose(position, quaternion, scale);
    return matrix;
};

export const getInitialialStateMatrix4 = (instance: any): Matrix4 => {
    const [position, rotation, scale]: Array<Vector3> = getInitialState(instance);
    const matrix = createMatrix4(position, rotation, scale);
    return matrix;
};
