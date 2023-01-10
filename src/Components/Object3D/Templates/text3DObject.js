import { Text3D } from "@react-three/drei";

export const Text3DObject = ({ font, text, ...props }) => {
  return (
    <Text3D font={font} {...props}>
      {text}
    </Text3D>
  );
};
