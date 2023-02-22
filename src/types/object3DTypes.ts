import { MaterialTypes, ObjectHtmlTypes, ObjectTypes } from './enums';
import { Animation } from './animationTypes';
import { GeometryProps, unknownObject } from './types';
import { Vector3 } from 'three';

export type ObjectHtmlProps = {
    html?: string;
    position?: number[];
    price?: string;
    rotation?: number[];
    scale?: number;
    type: ObjectHtmlTypes;
    style?: any;
};

export type CommonObject3DProps = {
    animations?: Array<Animation>;
    position?: number[];
    rotation?: number[];
    scale?: number[];
    type: ObjectTypes;
};

export type MaterialProps = unknownObject & { type: MaterialTypes };

export type StandardObjectProps = CommonObject3DProps & {
    useInstancing?: boolean;
    geometry: GeometryProps;
    material: MaterialProps;
    objectHtmls?: ObjectHtmlProps[];
};

export type GltfObjectProps = CommonObject3DProps & {
    assetId: string;
    objectHtmls?: ObjectHtmlProps[];
};

export type Text3DObjectProps = CommonObject3DProps & {
    assetId?: string;
    text: string;
    font: any;
    color?: string;
    size?: number;
    letterSpacing?: number;
    lineHeight?: number;
};

export type ImplicitObjectProps = CommonObject3DProps & {
    assetId: string;
    useInstancing?: boolean;
    objectHtmls?: ObjectHtmlProps[];
};

export type Object3DProps = ImplicitObjectProps | Text3DObjectProps | GltfObjectProps | StandardObjectProps;

export type strongObject3DStateOfArrays = {
    position: number[];
    rotation: number[];
    scale: number[];
};

export type weakObject3DStateofArrays = {
    position?: number[];
    rotation?: number[];
    scale?: number[];
};

export type strongObject3DStateOfVectors = {
    position: Vector3;
    rotation: Vector3;
    scale: Vector3;
};

export type weakObject3DStateofVectors = {
    position?: Vector3;
    rotation?: Vector3;
    scale?: Vector3;
};
