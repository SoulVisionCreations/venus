import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import PropTypes from "prop-types";
import { text3DDefaults } from "../../../Constants/defaults";

const AnimatedText3D = animated(Text3D);

const Text3DObject = ({objectProps, sceneProps}) => {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const scale = objectProps.scale ? objectProps.scale : text3DDefaults.scale;
  const color = objectProps.color ? objectProps.color : text3DDefaults.color;
  const springs = useSpring({
    scale: clicked ? 0.2 : scale,
    color: hover ? "red" : color,
  });
  return (
    <AnimatedText3D
      onClick={() => setClicked((s) => !s)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      font={objectProps.font}
      {...objectProps}
      scale={springs.scale}
    >
      {objectProps.text}
      <animated.meshStandardMaterial color={springs.color} />
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