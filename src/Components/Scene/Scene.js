import React from "react";
import { applySceneControl } from "../../Utils/SceneControls/sceneControl";
import { imageLoader } from "../Image/image";
import { textLoader } from "../Text/text";
import { getLight } from "../Light/light";
import { Object3D } from "../Object3D/object3D";
import { ObjectControls } from "../../Utils/ObjectControls/objectControls";

export default function Scene({
  objects,
  sceneControl,
  texts,
  images,
  lights,
  completelyVisible,
  completelyVisibleCount,
  setCompletelyVisibleCount,
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
      return textLoader({ text: textProps.text, ...textProps });
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
