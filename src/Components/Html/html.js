import { Html } from "@react-three/drei";

export const renderHtml = ({ ...props }) => {
  return (
    <Html
      // rotation={[Math.PI / 2, Math.PI / 4, 0]}
      // position={[1, 0, 0]}
      transform
    >
      {props.price}
    </Html>
  );
};
