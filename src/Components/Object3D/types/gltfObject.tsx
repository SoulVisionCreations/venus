import { renderObjectHtmls } from '../object3D'
import { useSpringAnimation } from '../../../Utils/Animations/springAnimations'
import { animated } from '@react-spring/three'
import { getAssetbyId } from '../../../Utils/download'
import { useScrollAnimation } from '../../../Utils/Animations/scrollAnimation'
import { ScenePropsType } from '../../Scene/Scene'
import { ObjectPropsType } from '../../../Configs/propTypes'

// type SpringPropsType = Array<{
//   rotation: SpringValue<Array<any>>
//   position: SpringValue<Array<any>>
//   scale: SpringValue<Array<any>>
// }>
// | SpringRef<{ rotation: Array<any>; position: Array<any>; scale: Array<any> }>

const GltfObject = ({
  objectProps,
  sceneProps,
}: {
  objectProps: ObjectPropsType
  sceneProps: ScenePropsType
}): JSX.Element => {
  const model: any = getAssetbyId(objectProps.assetId)
  const [spring, api] = useSpringAnimation(objectProps, sceneProps)
  useScrollAnimation(objectProps, sceneProps, api)

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <animated.primitive
      object={model.scene}
      {...objectProps}
      position={spring.position}
      rotation={spring.rotation}
      scale={spring.scale}
      // position={spring.position}
      // rotation={spring.rotation}
      // scale={spring.scale}
    >
      {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
    </animated.primitive>
  )
}

export default GltfObject
