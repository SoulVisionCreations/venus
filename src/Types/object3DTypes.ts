import { MaterialProps } from '@react-three/fiber';
import { ObjectTypes } from '../enums';
import { Animation } from './animationTypes';
import { GeometryProps } from './types';

export type ObjectHtmlProps = {
    html: string;
    position: number[];
    price: number;
    rotation: number[];
    scale: number;
    type: any;
};

export type commonObject3DProps = {
    animations?: Array<Animation>;
    position: number[];
    rotation?: number[];
    scale?: number[];
    type: ObjectTypes;
};

export type standardObjectProps = commonObject3DProps & {
    useInstancing?: boolean;
    color: string;
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
