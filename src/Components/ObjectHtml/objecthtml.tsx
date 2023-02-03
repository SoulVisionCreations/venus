import React from "react";
import { Html } from "@react-three/drei";
import { ObjectHtmlTypes } from "../../Configs/types";
import { htmlDefaults } from "../../Constants/defaults";
import './objecthtml.css';

type ObjectHtmlProps = {
  html: string,
  position: number[],
  price: number;
  rotation: number[],
  scale: number,
  type?: 0|1|2|3|4,
}

const ObjectHtml = (props: ObjectHtmlProps) => {
  const scale = props.scale ? htmlDefaults.scale * props.scale : htmlDefaults.scale;
  switch (props.type) {
    case ObjectHtmlTypes.PriceTag:
      return (
        <Html {...props} scale={scale}>
          <div className="annotation">{props.price}</div>
        </Html>
      );
    default:
      return <Html>{props.html}</Html>;
  }
};

export default ObjectHtml;
