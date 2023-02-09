import { MaterialTypes, ObjectHtmlTypes, ObjectTypes } from './enums';
import { Animation } from './animationTypes';
import { GeometryProps, unknownObject } from './types';

export type ObjectHtmlProps = {
    html?: string;
    position?: number[];
    price?: string;
    rotation?: number[];
    scale?: number;
    type: ObjectHtmlTypes;
    style?: any;
};

export type commonObject3DProps = {
    animations?: Array<Animation>;
    position?: number[];
    rotation?: number[];
    scale?: number[];
    type: ObjectTypes;
};

export type MaterialProps = unknownObject & { type: MaterialTypes };

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
