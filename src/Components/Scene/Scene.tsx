import { applySceneControl } from '../../Utils/SceneControls/sceneControl';
import Image from '../Image/image';
import Text from '../Text/text';
import Light from '../Light/light';
import { Object3D } from '../Object3D/object3D';
import { CanvasRect, ImageProps, LightProps, TextProps } from '../../Types/types';
import { Object3DProps } from '../../Types/object3DTypes';

export type ScenePropsType = {
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
  sceneProps: ScenePropsType;
};

const addLights = (lights: Array<LightProps>): JSX.Element[] => {
  return lights.map((lightProps: LightProps, index: number): JSX.Element => {
    return <Light {...lightProps} key={index} />;
  });
};

const renderObjects = (objects: Array<Object3DProps>, sceneProps: ScenePropsType): JSX.Element[] => {
  return objects.map((objectProps: Object3DProps, index: number): JSX.Element => {
    return <Object3D objectProps={objectProps} sceneProps={sceneProps} key={index} />;
  });
};

const renderTexts = (texts: Array<TextProps>): JSX.Element[] => {
  return texts.map((textProps: TextProps, index: number): JSX.Element => {
    return <Text {...textProps} key={index} />;
  });
};

const renderImages = (images: Array<ImageProps>): JSX.Element[] => {
  return images.map((imageProps: ImageProps, index: number): JSX.Element => {
    return <Image {...imageProps} key={index} />;
  });
};

export default function Scene(props: Props): JSX.Element {
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
