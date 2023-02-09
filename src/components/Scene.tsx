import { applySceneControl } from '../utils/SceneControls/sceneControl';
import Image from './Image';
import Text from './Text';
import Light from './Light';
import { Object3D } from './Object3D/object3D';
import { ImageProps, LightProps, TextProps } from '../types/types';
import { Object3DProps } from '../types/object3DTypes';
import { CanvasRect } from './CanvasNode';

export type SceneProps = {
    isSceneVisible: boolean;
    isSceneCompletelyVisible: boolean;
    canvasRect: CanvasRect;
};

type Props = {
    lights?: Array<LightProps> | undefined;
    objects?: Array<Object3DProps> | undefined;
    sceneControl?: object | undefined;
    texts?: Array<TextProps> | undefined;
    images?: Array<ImageProps> | undefined;
    sceneProps: SceneProps;
};

const addLights = (lights: Array<LightProps>) => {
    return lights.map((lightProps: LightProps, index: number) => {
        return <Light {...lightProps} key={index} />;
    });
};

const renderObjects = (objects: Array<Object3DProps>, sceneProps: SceneProps) => {
    return objects.map((objectProps: Object3DProps, index: number) => {
        return <Object3D objectProps={objectProps} sceneProps={sceneProps} key={index} />;
    });
};

const renderTexts = (texts: Array<TextProps>) => {
    return texts.map((textProps: TextProps, index: number) => {
        return <Text {...textProps} key={index} />;
    });
};

const renderImages = (images: Array<ImageProps>) => {
    return images.map((imageProps: ImageProps, index: number) => {
        return <Image {...imageProps} key={index} />;
    });
};

export default function Scene(props: Props) {
    return (
        <>
            {props.lights ? addLights(props.lights) : null}
            {props.sceneControl ? applySceneControl(props.sceneControl) : null}
            {props.objects ? renderObjects(props.objects, props.sceneProps) : null}
            {props.texts ? renderTexts(props.texts) : null}
            {props.images ? renderImages(props.images) : null}
        </>
    );
}
