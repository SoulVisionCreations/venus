import { ObjectTypes } from "../../Configs/types";
import ImplicitObject from "./types/implicitObject";
import GltfObject from "./types/gltfObject";
import StandardObject from "./types/standardObject";
import Text3DObject from "./types/text3DObject";
import HtmlLoader from "../Html/html";

export const renderHtmls = (htmls) => {
  return htmls.map((htmlProps, index) => {
    return <HtmlLoader {...htmlProps} />;
  });
};

export function Object3D({ objectProps, sceneProps }) {
  switch (objectProps.type) {
    case ObjectTypes.ImplicitObject:
      return <ImplicitObject objectProps={objectProps} sceneProps={sceneProps} />;
    case ObjectTypes.GltfObject:
      return <GltfObject objectProps={objectProps} sceneProps={sceneProps} />;
    case ObjectTypes.StandardObject:
      return <StandardObject objectProps={objectProps} sceneProps={sceneProps} />;
    case ObjectTypes.Text3D:
      return <Text3DObject objectProps={objectProps} sceneProps={sceneProps} />;
  }
}
