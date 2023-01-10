import { ObjectControlTypes } from "../../Configs/types";
import { PresentationControls } from "@react-three/drei";

export const ObjectControls = ({ ...props }) => {
  switch (props.type) {
    case ObjectControlTypes.BouncyPresentation:
      return (
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          {...props}
        >
          {props.children}
        </PresentationControls>
      );
    default:
      return null;
  }
};
