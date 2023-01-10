import { ObjectTypes } from "../../Configs/types";
import { gltfLoader } from "../Gltf/gltf";
import { renderHtml } from "../Html/html";
import { ImplicitObject } from "../ImplicitObject/implicitObject";

export function Object3D({ ...props }) {
  const renderHtmls = () => {
    return props.htmls.map((htmlProps, index) => {
      return renderHtml({ ...htmlProps });
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
  }
}
