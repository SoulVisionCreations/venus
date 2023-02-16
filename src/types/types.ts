import { Alignment, AssetTypes, CameraTypes, ComponentTypes, LightTypes, MaterialTypes, SceneControlTypes, StandardGeometryTypes, TextTypes } from './enums';
import { BufferGeometry, Shape, Vector2, TextureEncoding } from 'three';
import { Object3DProps } from './object3DTypes';
import { Animation } from './animationTypes';

export interface GeometryProps {
    arc?: number;
    capSubdivisions?: number;
    closed?: boolean;
    curveSegments?: number;
    depth?: number;
    depthSegments?: number;
    detail?: number;
    geometry?: BufferGeometry;
    height?: number;
    heightSegments?: number;
    indices?: Array<number>;
    innerRadius?: number;
    length?: number;
    openEnded?: boolean;
    options?: object;
    outerRadius?: number;
    p?: number;
    path?: any;
    phiLength?: number;
    phiSegments?: number;
    phiStart?: number;
    points?: Array<Vector2>;
    q?: number;
    radialSegments?: number;
    radius?: number;
    radiusBottom?: number;
    radiusLeft?: number;
    radiusTop?: number;
    segments?: number;
    shapes?: Shape | Array<Shape>;
    thetaLength?: number;
    thetaSegments?: number;
    thetaStart?: number;
    thresholdAngle?: number;
    tube?: number;
    tubularSegments?: number;
    type: StandardGeometryTypes;
    vertices?: Array<number>;
    width?: number;
    widthSegments?: number;
}

export interface ImageProps {
    assetId: string;
    src?: string;
    position?: number[];
    rotation?: number[];
    scale?: number[];
    zoom?: number;
    color?: string;
    grayscale?: number;
    transparent?: boolean;
    opacity?: number;
    animations?: Array<Animation>;
}

export interface LightProps {
    angle?: number;
    color?: string;
    decay?: number;
    distance?: number;
    groundColor?: string;
    height?: number;
    intensity?: number;
    penumbra?: number;
    position?: number[];
    rotation?: number[];
    scale?: number[];
    skyColor?: string;
    type: LightTypes;
    width?: number;
}

export interface MaterialProps {
    type: MaterialTypes;
}

export interface TextProps {
    list?: Array<string>;
    numbered?: boolean;
    position?: number[];
    rotation?: number[];
    scale?: number[];
    animations?: Array<Animation>;
    text?: string;
    title?: string;
    type: TextTypes;
    font?: any;
    color?: string;
}

export type CameraProps = {
    type: CameraTypes;
    position: number[];
    fov?: number;
    near?: number;
    far?: number;
};

export interface EnvironmentProps {
    files: string | string[];
    background?: boolean;
    encoding?: TextureEncoding;
}

export interface CanvasNodeProps {
    type: ComponentTypes;
    style?: any;
    className?: string;
    id?: string;
    camera?: CameraProps;
    assetIds?: string[];
    objects?: Array<Object3DProps>;
    texts?: Array<TextProps>;
    lights?: Array<LightProps>;
    images?: Array<ImageProps>;
    sceneControl?: { type: SceneControlTypes };
    environment?: EnvironmentProps;
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

export type unknownObject = {
    [key: string | number | symbol]: any;
};
