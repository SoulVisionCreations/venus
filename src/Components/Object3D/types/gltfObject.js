import PropTypes from "prop-types";
import { renderObjectHtmls } from "../object3D";
import { useSpringAnimation } from "../../../Utils/Animations/springAnimations";
import { animated } from "@react-spring/three";
import { getAssetbyId } from "../../../Utils/download";

const GltfObject = ({ objectProps, sceneProps }) => {
  const model = getAssetbyId(objectProps.assetId);
  const spring = useSpringAnimation(objectProps, sceneProps);

  return (
    <animated.primitive object={model.scene} position={spring.position} rotation={spring.rotation} scale={spring.scale} {...objectProps}>
      {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
    </animated.primitive>
  );
};

GltfObject.propTypes = {
    objectProps: PropTypes.shape({
    assetId: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  })
}

export default GltfObject;