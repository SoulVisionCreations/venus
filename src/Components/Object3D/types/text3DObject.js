import React, { useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import { Text3D } from "@react-three/drei";
import { text3DDefaults } from "../../../Constants/defaults";

const AnimatedText3D = animated(Text3D);

export const Text3DObject = ({ font, text, ...props }) => {
  const [clicked, setClicked] = useState(false);
  const [hover, setHover] = useState(false);

  const scale = props.scale ? props.scale : text3DDefaults.scale;
  const color = props.color ? props.color : text3DDefaults.color;
  const springs = useSpring({
    scale: clicked ? 0.2 : scale,
    color: hover ? "red" : color,
  });
  return (
    <AnimatedText3D
      onClick={() => setClicked((s) => !s)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      font={font}
      {...props}
      scale={springs.scale}
    >
      {text}
      <animated.meshStandardMaterial color={springs.color} />
    </AnimatedText3D>
  );
};
