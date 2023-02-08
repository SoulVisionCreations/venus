import { Euler, Vector3 } from 'three';
import { MaterialTypes, ObjectTypes } from '../enums';
import { Animation } from './animationTypes';
import { GeometryProps, unkownObject } from './types';

export type ObjectHtmlProps = {
    html?: string;
    position?: number[] | Vector3;
    price?: string;
    rotation?: number[] | Euler;
    scale?: number;
    type: any;
};

export type commonObject3DProps = {
    animations?: Array<Animation>;
    position?: number[] | Vector3;
    rotation?: number[] | Euler;
    scale?: number[] | Vector3;
    type: ObjectTypes;
};

export type MaterialProps = unkownObject & { type: MaterialTypes };

export type standardObjectProps = commonObject3DProps & {
    useInstancing?: boolean;
    geometry: GeometryProps;
    material: MaterialProps;
    objectHtmls?: ObjectHtmlProps[];
};

export type gltfObjectProps = commonObject3DProps & {
    assetId: string;
    objectHtmls?: ObjectHtmlProps[];
};

export type text3DObjectProps = commonObject3DProps & {
    assetId: string;
    text: string;
    font: string;
    color: string;
};

export type implicitObjectProps = commonObject3DProps & {
    assetId: string;
    useInstancing?: boolean;
    objectHtmls?: ObjectHtmlProps[];
};

export type Object3DProps = implicitObjectProps | text3DObjectProps | gltfObjectProps | standardObjectProps;
