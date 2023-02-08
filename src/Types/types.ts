import { Alignment, AssetTypes, ComponentTypes } from '../enums';
import { Vector3, Euler, BufferGeometry, Shape, Vector2 } from 'three';
import { Object3DProps } from './object3DTypes';

export interface GeometryProps {
    arc: number;
    capSubdivisions: number;
    closed: boolean;
    curveSegments: number;
    depth: number;
    depthSegments: number;
    detail: number;
    geometry: BufferGeometry;
    height: number;
    heightSegments: number;
    indices: Array<number>;
    innerRadius: number;
    length: number;
    openEnded: boolean;
    options: object;
    outerRadius: number;
    p: number;
    path: any;
    phiLength: number;
    phiSegments: number;
    phiStart: number;
    points: Array<Vector2>;
    q: number;
    radialSegments: number;
    radius: number;
    radiusBottom: number;
    radiusLeft: number;
    radiusTop: number;
    segments: number;
    shapes: Shape | Array<Shape>;
    thetaLength: number;
    thetaSegments: number;
    thetaStart: number;
    thresholdAngle: number;
    tube: number;
    tubularSegments: number;
    type: any;
    vertices: Array<number>;
    width: number;
    widthSegments: number;
}

export interface ImageProps {
    assetId: string;
    imgSrc: string;
    position: Vector3;
    rotation: Euler;
    scale: number;
    type: any;
}

export interface LightProps {
    angle: number;
    color: string;
    decay: number;
    distance: number;
    groundColor: string;
    height: number;
    intensity: number;
    penumbra: number;
    position: Vector3;
    rotation: Euler;
    scale: Vector3 | number;
    skyColor: string;
    type: any;
    width: number;
}

export interface MaterialProps {
    type: any;
}

export interface TextProps {
    list: Array<string>;
    numbererd: boolean;
    position: number[];
    rotation: number[];
    scale: number;
    text: string;
    title: string;
    type: any;
}

interface CameraProps {
    position: number[];
    fov?: number;
    near?: number;
    far?: number;
    orthographic?: boolean;
}

export interface CanvasNodeProps {
    type: ComponentTypes;
    style?: any;
    className?: string;
    id?: string;
    camera: CameraProps;
    assetIds?: string[];
    objects?: Array<Object3DProps>;
    texts?: Array<TextProps>;
    lights?: Array<LightProps>;
    images?: Array<ImageProps>;
    sceneControl?: { control: any };
}

export interface ContainerNodeProps {
    type: ComponentTypes;
    alignment?: Alignment;
    assets?: any;
    style?: any;
    className?: string;
    children: Array<ContainerNodeProps | CanvasNodeProps>;
}

export interface AssetProps {
    assetId: string;
    assetPath: string;
    assetType: AssetTypes;
}

export type CanvasRect = {
    top: number;
    left: number;
    bottom: number;
};

export type unknownObject = {
    [key: string | number | symbol]: any;
};
