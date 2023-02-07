import { applySceneControl } from '../../Utils/SceneControls/sceneControl'
import Image from '../Image/image'
import Text from '../Text/text'
import Light from '../Light/light'
import { Object3D } from '../Object3D/object3D'
import {
  LightPropsType,
  ObjectPropsType,
  ImagePropsType,
  TextPropsType,
} from '../../Configs/propTypes'

export type ScenePropsType = {
  isSceneVisible: boolean
  isSceneCompletelyVisible: boolean
  canvasRect: number[]
}

type Props = {
  lights: Array<LightPropsType>
  objects: Array<ObjectPropsType>
  sceneControl: object
  texts: Array<TextPropsType>
  images: Array<ImagePropsType>
  sceneProps: ScenePropsType
}

const addLights = (lights: Array<LightPropsType>): JSX.Element[] => {
  return lights.map(
    (lightProps: LightPropsType, index: number): JSX.Element => {
      return <Light {...lightProps} key={index} />
    }
  )
}

const renderObjects = (
  objects: Array<ObjectPropsType>,
  sceneProps: ScenePropsType
): JSX.Element[] => {
  return objects.map(
    (objectProps: ObjectPropsType, index: number): JSX.Element => {
      return (
        <Object3D
          objectProps={objectProps}
          sceneProps={sceneProps}
          key={index}
        />
      )
    }
  )
}

const renderTexts = (texts: Array<TextPropsType>): JSX.Element[] => {
  return texts.map((textProps: TextPropsType, index: number): JSX.Element => {
    return <Text {...textProps} key={index} />
  })
}

const renderImages = (images: Array<ImagePropsType>): JSX.Element[] => {
  return images.map(
    (imageProps: ImagePropsType, index: number): JSX.Element => {
      return <Image {...imageProps} key={index} />
    }
  )
}

export default function Scene(props: Props): JSX.Element {
  return (
    <>
      {props.lights ? addLights(props.lights) : null}
      {props.sceneControl ? applySceneControl(props.sceneControl) : null}
      {props.objects ? renderObjects(props.objects, props.sceneProps) : null}
      {props.texts ? renderTexts(props.texts) : null}
      {props.images ? renderImages(props.images) : null}
    </>
  )
}
