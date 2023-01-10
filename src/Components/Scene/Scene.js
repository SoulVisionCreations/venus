import React from "react";
import { ObjectTypes, TextTypes } from "../../Configs/types";
import { applySceneControl } from "../../Utils/SceneControls/sceneControl";
import { ImplicitObject } from "../ImplicitObject/implicitObject";
import { imageLoader } from "../Image/image";
import { textLoader } from "../Text/text";
import { text3DLoader } from "../Text3D/text3D";
import { gltfLoader } from "../Gltf/gltf";
import { getLight } from "../Light/light";

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
      switch (objectProps.type) {
        case ObjectTypes.ImplicitObject:
          return <ImplicitObject {...objectProps} key={index} completelyVisible={completelyVisible} completelyVisibleCount={completelyVisibleCount} setCompletelyVisibleCount={setCompletelyVisibleCount}/>;
        case ObjectTypes.GltfObject:
          return gltfLoader({
            url: objectProps.url,
            ...objectProps,
          });
      }
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
