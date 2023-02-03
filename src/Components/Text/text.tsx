import React from "react";
// import PropTypes from "prop-types";
import { Html } from "@react-three/drei";
import { htmlDefaults } from "../../Constants/defaults";
import { TextTypes } from "../../Configs/types";

type TextProps = {
  list: string[],
  numbererd: boolean,
  position?: number[],
  rotation: number[],
  scale: number,
  text: string,
  title: string,
  type?: 0|1,
}

const renderList = (list: string[]) => {
  return list.map(function (item, i) {
    return <li key={i}>{item}</li>;
  });
};

const Text = (props: TextProps) => {
  const scale = props.scale ? props.scale * htmlDefaults.scale : htmlDefaults.scale;
  switch (props.type) {
    case TextTypes.List:
      return (
        <Html transform {...props} scale={scale}>
          {props.title}
          {props.numbererd ? (
            <ol> {renderList(props.list)} </ol>
          ) : (
            <ul> {renderList(props.list)} </ul>
          )}
        </Html>
      );
    case TextTypes.Paragraph:
      return (
        <Html transform {...props} scale={scale}>
          {props.text}
        </Html>
      );
  }
};

export default Text;
