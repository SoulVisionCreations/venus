import { applySceneControl } from '../utils/SceneControls/sceneControl';
import Light from './Light';
import { Object3D } from './Object3D/object3D';
import { HtmlTemplateProps, ImageProps, LightProps, TextProps } from '../types/types';
import { Object3DProps } from '../types/object3DTypes';
import { CanvasRect } from './CanvasNode';
import TextLoader from './Text';
import ImageLoader from './Image';
import HtmlTemplateLoader from './HtmlTemplate';

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
    htmlTemplates?: Array<HtmlTemplateProps> | undefined;
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

const renderTexts = (texts: Array<TextProps>, sceneProps: SceneProps) => {
    console.log(texts);
    return texts.map((textProps: TextProps, index: number) => {
        return <TextLoader textProps={textProps} sceneProps={sceneProps} key={index} />;
    });
};

const renderHtmlTemplates = (htmlTemplates: Array<HtmlTemplateProps>) => {
    return htmlTemplates.map((htmlTemplateProps: HtmlTemplateProps, index: number) => {
        return <HtmlTemplateLoader {...htmlTemplateProps} key={index} />;
    });
};

const renderImages = (images: Array<ImageProps>, sceneProps: SceneProps) => {
    return images.map((imageProps: ImageProps, index: number) => {
        return <ImageLoader imageProps={imageProps} sceneProps={sceneProps} key={index} />;
    });
};

export default function Scene(props: Props) {
    return (
        <>
            {props.lights && props.lights.length > 0 ? addLights(props.lights) : null}
            {props.sceneControl ? applySceneControl(props.sceneControl) : null}
            {props.objects && props.objects.length > 0 ? renderObjects(props.objects, props.sceneProps) : null}
            {props.texts && props.texts.length > 0 ? renderTexts(props.texts, props.sceneProps) : null}
            {props.images && props.images.length > 0 ? renderImages(props.images, props.sceneProps) : null}
            {props.htmlTemplates && props.htmlTemplates.length > 0 ? renderHtmlTemplates(props.htmlTemplates) : null}
        </>
    );
}
