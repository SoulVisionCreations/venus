import { ObjectControlTypes } from "../../Configs/types";
import { PresentationControls } from "@react-three/drei";
import { objectDefaults } from "../../Constants/defaults";

export const ObjectControls = ({ ...props }) => {
  const controls = props.control ? props.control.type : objectDefaults.control;
  switch (controls) {
    case ObjectControlTypes.BouncyPresentation:
      return (
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          {...props.control}
        >
          {props.children}
        </PresentationControls>
      );
    default:
      return <>{props.children}</>;
  }
};
