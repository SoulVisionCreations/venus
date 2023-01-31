import { animated } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import PropTypes from "prop-types";
import { objectDefaults } from "../../../Constants/defaults";
import { useSpringAnimation } from "../../../Utils/Animations/springAnimations";

const AnimatedText3D = animated(Text3D);

const Text3DObject = ({objectProps, sceneProps}) => {
  const spring = useSpringAnimation(objectProps, sceneProps);
  const position = spring ? spring.position : ( objectProps.position ? objectProps.position : objectDefaults.position );
  const rotation = spring ? spring.rotation : objectProps.rotation;
  const scale = spring ? spring.scale : ( objectProps.scale ?  objectProps.scale : objectDefaults.scale );

  return (
    <AnimatedText3D
      font={objectProps.font}
      scale={scale}
      position={position}
      rotation={rotation}
      {...objectProps}
    >
      {objectProps.text}
      <meshStandardMaterial color={objectProps.color} />
    </AnimatedText3D>
  );
};

Text3DObject.propTypes = {
  objectProps: PropTypes.shape({
    font: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  })
}

export default Text3DObject;