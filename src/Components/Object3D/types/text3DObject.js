import { animated } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import PropTypes from "prop-types";
import { useScrollAnimation } from "../../../Utils/Animations/scrollAnimation";
import { useSpringAnimation } from "../../../Utils/Animations/springAnimations";
import { getAssetbyId } from "../../../Utils/download";

const AnimatedText3D = animated(Text3D);

const Text3DObject = ({objectProps, sceneProps}) => {
  const [spring, api] = useSpringAnimation(objectProps, sceneProps);
  useScrollAnimation(objectProps, sceneProps, api);
  const font = getAssetbyId(objectProps.assetId);

  return (
    <AnimatedText3D
      font={font}
      scale={spring.scale}
      position={spring.position}
      rotation={spring.rotation}
      {...objectProps}
    >
      {objectProps.text}
      <meshStandardMaterial color={objectProps.color} />
    </AnimatedText3D>
  );
};

Text3DObject.propTypes = {
  objectProps: PropTypes.shape({
    assetId: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  })
}

export default Text3DObject;