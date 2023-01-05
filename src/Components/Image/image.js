import { Image } from "@react-three/drei";

export const imageLoader = ({ url, ...props }) => {
  return <Image url={url} {...props} />;
};
