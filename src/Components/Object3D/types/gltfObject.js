import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { applyAnimations } from "../../../Utils/Animations/animation";
import {
  applyEventDrivenAnimations,
  useEvents,
} from "../../../Utils/Events/events";
import AvataarLoader from "../../AvataarLoader/avataarloader";
import { renderHtmls } from "../object3D";
import { useSpringAnimation } from "../../../Utils/Animations/springAnimations";
import { animated } from "@react-spring/three";

const GltfObject = ({objectProps, sceneProps}) => {
  const [loading, updateLoading] = useState(true);
  const model = useLoader(GLTFLoader, objectProps.url);
  const scrolledRotationValue = useRef(0);
  
  const spring = useSpringAnimation(objectProps, sceneProps);

  useEvents(objectProps, scrolledRotationValue);

  useFrame((state) => {
    if (model.scene && loading) {
      updateLoading(false);
    }
    if (!loading) {
      const time = state.clock.getElapsedTime();
      // if (props.animations) applyAnimations(props.animations, time, model.scene);
      // if (props.events) applyEventDrivenAnimations(props, time, model.scene, scrolledRotationValue);
    }
  });

  const renderGltf = ({ ...objectProps }) => {
    return (
      <animated.primitive
        object={model.scene}
        position={spring.position}
        rotation={spring.rotation}
        scale={spring.scale}
        {...objectProps}
      >
        {objectProps.htmls && renderHtmls(objectProps.htmls)}
      </animated.primitive>
    );
  };

  return <>{loading ? <AvataarLoader center={true} /> : renderGltf({ ...objectProps })}</>;
};

GltfObject.propTypes = {
  objectProps: PropTypes.shape({
    url: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  })
}

export default GltfObject;