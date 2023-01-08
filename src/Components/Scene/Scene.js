import React from "react";
import { renderHtml } from "../Html/html";
import { ImplicitObject } from "../ImplicitObject/implicitObject";
import { applySceneControl } from "../../Utils/SceneControls/sceneControl";
import { imageLoader } from "../Image/image";
import { textLoader } from "../Text/text";
import { text3DLoader } from "../Text3D/text3D";
import { gltfLoader } from "../Gltf/gltf";
import { getLight } from "../Light/light";

export default function Scene({
  implicitObjects,
  htmls,
  control,
  texts,
  images,
  text3D,
  gltfs,
  lights,
}) {
  const addLights = () => {
    return lights.map((lightProps, index) => {
      return getLight({ type: lightProps.type, lightProps });
    });
  };

  const renderImplicitObjects = () => {
    return implicitObjects.map((implicitObjectProps, index) => {
      return <ImplicitObject props={implicitObjectProps} key={index} />;
    });
  };

  const renderHtmls = () => {
    return htmls.map((html, index) => {
      return renderHtml(html);
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

  const renderText3D = () => {
    return text3D.map((text3DProps, index) => {
      return text3DLoader({
        font: text3DProps.font,
        text: text3DProps.text,
        ...text3DProps,
      });
    });
  };

  const renderGltfs = () => {
    return gltfs.map((gltfprops, index) => {
      return gltfLoader({
        url: gltfprops.url,
        ...gltfprops,
      });
    });
  };

  return (
    <>
      {lights ? addLights() : null}
      {control ? applySceneControl(control) : null}
      {implicitObjects ? renderImplicitObjects() : null}
      {htmls ? renderHtmls() : null}
      {texts ? renderTexts() : null}
      {images ? renderImages() : null}
      {text3D ? renderText3D() : null}
      {gltfs ? renderGltfs() : null}
    </>
  );
}
