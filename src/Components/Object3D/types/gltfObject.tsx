import { renderObjectHtmls, ObjectPropsType } from '../object3D'
import { useSpringAnimation } from '../../../Utils/Animations/springAnimations'
import { animated } from '@react-spring/three'
import { getAssetbyId } from '../../../Utils/download'
import { useScrollAnimation } from '../../../Utils/Animations/scrollAnimation'
import { ScenePropsType } from '../../Scene/Scene'

const GltfObject = ({
  objectProps,
  sceneProps,
}: {
  objectProps: ObjectPropsType
  sceneProps: ScenePropsType
}): JSX.Element => {
  const model = getAssetbyId(objectProps.assetId)
  const [spring, api] = useSpringAnimation(objectProps, sceneProps)
  useScrollAnimation(objectProps, sceneProps, api)

  return (
    <animated.primitive
      object={model.scene}
      position={spring.position}
      rotation={spring.rotation}
      scale={spring.scale}
      {...objectProps}
    >
      {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
    </animated.primitive>
  )
}

export default GltfObject
