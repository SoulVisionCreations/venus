import { Html } from "@react-three/drei";
import { htmlDefaults } from "../../../Constants/defaults";

export const renderHtml = ({ ...props }) => {
  const scale = props.scale ? props.scale : htmlDefaults.scale;
  return (
    <Html scale={scale} {...props}>
      <div className="annotation">{props.price}</div>
    </Html>
  );
};
