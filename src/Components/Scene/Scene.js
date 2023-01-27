import React from "react";
import { applySceneControl } from "../../Utils/SceneControls/sceneControl";
import ImageLoader from "../Image/image";
import TextLoader from "../Text/text";
import Light from "../Light/light";
import { Object3D } from "../Object3D/object3D";

export default function Scene({
  objects,
  sceneControl,
  texts,
  images,
  lights,
  sceneProps
}) {
  const addLights = () => {
    return lights.map((lightProps, index) => {
      return <Light {...lightProps } />
    });
  };

  const renderObjects = () => {
    return objects.map((objectProps, index) => {
      return <Object3D objectProps={objectProps} sceneProps={sceneProps} key={index} />;
    });
  };

  const renderTexts = () => {
    return texts.map((textProps, index) => {
      return <TextLoader { ...textProps } />;
    });
  };

  const renderImages = () => {
    return images.map((imageProps, index) => {
      return <ImageLoader {...imageProps } />;
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
