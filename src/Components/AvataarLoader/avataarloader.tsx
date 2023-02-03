import React from "react";
import { Html } from "@react-three/drei";

type AvataarLoaderProps = {
  position: number[],
  rotation: number[],
  scale: number[],
  center: boolean
}

const AvataarLoader = (props: AvataarLoaderProps) => {
  return (
    <Html {...props}>
      <img src="./loader-avataar.gif" alt="Loading" width="200" />
    </Html>
  );
};

export default AvataarLoader;