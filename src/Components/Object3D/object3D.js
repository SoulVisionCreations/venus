import { ObjectTypes } from "../../Configs/types";
import { ImplicitObject } from "./types/implicitObject";
import { GltfObject } from "./types/gltfObject";
import { StandardObject } from "./types/standardObject";
import { Text3DObject } from "./types/text3DObject";

export function Object3D({ ...props }) {
  switch (props.type) {
    case ObjectTypes.ImplicitObject:
      return <ImplicitObject {...props} />;
    case ObjectTypes.GltfObject:
      return <GltfObject {...props} />;
    case ObjectTypes.StandardObject:
      return <StandardObject {...props} />;
    case ObjectTypes.Text3D:
      return <Text3DObject {...props} />;
  }
}
