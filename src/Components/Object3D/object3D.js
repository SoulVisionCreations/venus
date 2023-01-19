import { ObjectTypes } from "../../Configs/types";
import { renderGeometry } from "../Geometry/geometry";
import { GltfLoader } from "../Gltf/gltf";
import { renderHtml } from "../Html/html";
import { ImplicitObject } from "../ImplicitObject/implicitObject";
import { renderMaterial } from "../Material/material";

export function Object3D({objectProps, sceneProps}) {
  const renderHtmls = () => {
    return objectProps.htmls.map((htmlProps, index) => {
      return renderHtml({ ...htmlProps });
    });
  };
  const renderGeometries = () => {
    return objectProps.geometry.map((geometryProps, index) => {
      return renderGeometry({ ...geometryProps });
    });
  };
  const renderMaterials = () => {
    return objectProps.material.map((materialProps, index) => {
      return renderMaterial({ ...materialProps });
    });
  };
  switch (objectProps.type) {
    case ObjectTypes.ImplicitObject:
      return (
        <ImplicitObject objectProps={objectProps} sceneProps={sceneProps}>
          {objectProps.htmls && renderHtmls()}
        </ImplicitObject>
      );
    case ObjectTypes.GltfObject:
      return <GltfLoader url={objectProps.url} objectProps={objectProps} sceneProps={sceneProps} />;
    case ObjectTypes.StandardObject:
      return (
        <mesh>
          {renderGeometries()}
          {renderMaterials()}
        </mesh>
      );
  }
}
