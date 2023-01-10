import React from "react";
import { TextTypes } from "../../Configs/types";
import { applySceneControl } from "../../Utils/SceneControls/sceneControl";
import { imageLoader } from "../Image/image";
import { textLoader } from "../Text/text";
import { text3DLoader } from "../Text3D/text3D";
import { getLight } from "../Light/light";
import { Object3D } from "../Object3D/object3D";
import { ObjectControls } from "../../Utils/ObjectControls/objectControls";

export default function Scene({
  objects,
  sceneControl,
  texts,
  images,
  lights,
  completelyVisible, completelyVisibleCount, setCompletelyVisibleCount
}) {
  const addLights = () => {
    return lights.map((lightProps, index) => {
      return getLight({ type: lightProps.type, lightProps });
    });
  };

  const renderObjects = () => {
    return objects.map((objectProps, index) => {
      return (
        <ObjectControls {...objectProps}>
          <Object3D {...objectProps} key={index} />;
        </ObjectControls>
      );
    });
  };

  const renderTexts = () => {
    return texts.map((textProps, index) => {
      switch (textProps.type) {
        case TextTypes.Text2D:
          return textLoader({ text: textProps.text, ...textProps });
        case TextTypes.Text3D:
          return text3DLoader({
            font: textProps.font,
            text: textProps.text,
            ...textProps,
          });
      }
    });
  };

  const renderImages = () => {
    return images.map((imageProps, index) => {
      return imageLoader({ url: imageProps.url, ...imageProps });
    });
  };

  return (
    <>
      {lights ? addLights() : null}
      {sceneControl ? applySceneControl(sceneControl) : null}
      {objects ? renderObjects() : null}
      {texts ? renderTexts() : null}
      {images ? renderImages() : null}
    </>
  );
}
