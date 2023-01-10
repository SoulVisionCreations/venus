import { Html } from "@react-three/drei";

export const renderHtml = ({ ...props }) => {
  return (
    <Html {...props}>
      <div className="annotation">{props.price}</div>
    </Html>
  );
};
