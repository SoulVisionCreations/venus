import { Alignment, AssetTypes, CameraTypes, ComponentTypes, HtmlTemplateTypes, LightTypes, MaterialTypes, SceneControlTypes, StandardGeometryTypes, TextTypes } from './enums';
import { BufferGeometry, Shape, Vector2, TextureEncoding, Material } from 'three';
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
    numbered?: boolean;
    position?: number[];
    rotation?: number[];
    scale?: number[];
    animations?: Array<Animation>;
    data: string | string[];
    title?: string;
    type: TextTypes;
    font?: any;
    color?: string;
    fontSize?: number;
    maxWidth?: number;
    lineHeight?: number;
    letterSpacing?: number;
    textAlign?: 'center' | 'left' | 'right' | 'justify';
    anchorX?: number | 'center' | 'left' | 'right';
    anchorY?: number | 'bottom' | 'top' | 'middle' | 'top-baseline' | 'bottom-baseline';
    overflowWrap?: 'normal' | 'break-word';
    whiteSpace?: 'normal' | 'overflowWrap';
    outlineWidth?: string | number;
    outlineOffsetX?: string | number;
    outlineOffsetY?: string | number;
    outlineBlur?: string | number;
    outlineColor?: string;
    outlineOpacity?: number;
    opacity?: number;
    curveRadius?: number;
    material?: Material;
}

export type HtmlTemplateProps = unknownObject & {
    type: HtmlTemplateTypes;
    position?: number[];
    rotation?: number[];
    scale?: number;
};

export type CameraProps = {
    type: CameraTypes;
    position: number[];
    rotation?: number[];
    fov?: number;
    near?: number;
    far?: number;
    zoom?: number;
};

export interface EnvironmentProps {
    files: string | string[];
    background?: boolean;
    encoding?: TextureEncoding;
    ground?: {
        height: number;
        radius: number;
    };
}

export interface SceneControlProps {
    type: SceneControlTypes;
    autoRotate?: boolean;
    autoRotateSpeed?: number;
    minPolarAngle?: number;
    maxPolarAngle?: number;
    enableZoom?: boolean;
    enablePan?: boolean;
}

export interface CanvasNodeProps {
    disablePageScrollForScrollAnimation?: boolean;
    type: ComponentTypes;
    style?: any;
    className?: string;
    id?: string;
    camera?: CameraProps;
    showDimensions?: boolean;
    assetIds?: string[];
    objects?: Array<Object3DProps>;
    texts?: Array<TextProps>;
    lights?: Array<LightProps>;
    images?: Array<ImageProps>;
    htmlTemplates?: Array<HtmlTemplateProps>;
    sceneControl?: SceneControlProps;
    environment?: EnvironmentProps;
}

export interface VideoNodeProps {
    type: ComponentTypes;
    style?: any;
    src: string;
}

export interface ContainerNodeProps {
    type: ComponentTypes;
    alignment?: Alignment;
    assets?: any;
    style?: any;
    className?: string;
    children: Array<ContainerNodeProps | CanvasNodeProps | VideoNodeProps>;
}

export interface AssetProps {
    assetId: string | symbol;
    assetPath: string;
    assetType: AssetTypes;
}

export type unknownObject = {
    [key: string | number | symbol]: any;
};
