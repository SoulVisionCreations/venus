import { Text3D } from "@react-three/drei";
import { ObjectControlTypes } from "../../../Configs/types";
import { ObjectControls } from "../../../Utils/ObjectControls/objectControls";

export const Text3DObject = ({ font, text, ...props }) => {
  return (
    <ObjectControls control={{ type: ObjectControlTypes.BouncyPresentation }}>
      <Text3D font={font} {...props}>
        {text}
      </Text3D>
    </ObjectControls>
  );
};
