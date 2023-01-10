import { ObjectTypes } from "../../Configs/types";
import { renderGeometry } from "../Geometry/geometry";
import { gltfLoader } from "../Gltf/gltf";
import { renderHtml } from "../Html/html";
import { ImplicitObject } from "../ImplicitObject/implicitObject";
import { renderMaterial } from "../Material/material";

export function Object3D({ ...props }) {
  const renderHtmls = () => {
    return props.htmls.map((htmlProps, index) => {
      return renderHtml({ ...htmlProps });
    });
  };
  const renderGeometries = () => {
    return props.geometry.map((geometryProps, index) => {
      return renderGeometry({ ...geometryProps });
    });
  };
  const renderMaterials = () => {
    return props.material.map((materialProps, index) => {
      return renderMaterial({ ...materialProps });
    });
  };
  switch (props.type) {
    case ObjectTypes.ImplicitObject:
      return (
        <ImplicitObject {...props}>
          {props.htmls && renderHtmls()}
        </ImplicitObject>
      );
    case ObjectTypes.GltfObject:
      return gltfLoader({
        url: props.url,
        ...props,
      });
    case ObjectTypes.StandardObject:
      return (
        <mesh>
          {renderGeometries()}
          {renderMaterials()}
        </mesh>
      );
  }
}
