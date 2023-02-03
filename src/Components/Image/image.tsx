import React from "react";
import { Html } from "@react-three/drei";
import { ImageTypes } from "../../Configs/types";
import { htmlDefaults } from "../../Constants/defaults";
import { getAssetbyId } from "../../Utils/download";
import "./image.css";

type ImageProps = {
  assetId: string,
  position: number[],
  rotation: number[],
  scale: number,
  type?: 0|1|2|3|4,
}

const renderImage = (props: ImageProps, imgSrc: string) => {
  switch (props.type) {
    case ImageTypes.Rounded:
      return <img src={imgSrc} className="rounded" {...props} />;
    case ImageTypes.Circle:
      return <img src={imgSrc} className="circle" {...props} />;
    case ImageTypes.Square:
      return <img src={imgSrc} className="square" {...props} />;
    case ImageTypes.Icon:
      return <img src={imgSrc} className="icon" {...props} />;
    default:
      return <img src={imgSrc} />;
  }
};

const Image = (props: ImageProps) => {
  const scale = props.scale ? props.scale * htmlDefaults.scale : htmlDefaults.scale;
  const imgSrc = getAssetbyId(props.assetId);
  return (
    <Html transform {...props} scale={scale}>
      {renderImage(props, imgSrc)}
    </Html>
  );
};

export default Image;
