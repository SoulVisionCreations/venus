import { ObjectTypes } from "../../Configs/types";
import { renderGeometry } from "../Geometry/geometry";
import { renderMaterial } from "../Material/material";
import { renderHtml } from "./Utils/html";
import { ImplicitObject } from "./Templates/implicitObject";
import { GltfObject } from "./Templates/gltfObject";
import { Text3DObject } from "./Templates/text3DObject";

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
      return <GltfObject {...props}>{props.htmls && renderHtmls()}</GltfObject>;
    case ObjectTypes.StandardObject:
      return (
        <mesh>
          {renderGeometries()}
          {renderMaterials()}
        </mesh>
      );
    case ObjectTypes.Text3D:
      return <Text3DObject {...props}>{props.text}</Text3DObject>;
  }
}
