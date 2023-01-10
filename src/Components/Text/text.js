import { Text } from "@react-three/drei";

export const textLoader = ({ text, ...props }) => {
  return (
    <Text anchorX="center" anchorY="middle" {...props}>
      {text}
    </Text>
  );
};
