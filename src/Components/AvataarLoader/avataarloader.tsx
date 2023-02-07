import { Html } from '@react-three/drei';
import { Euler, Vector3 } from 'three';

export interface AvataarLoaderProps {
  center: boolean;
  position?: Vector3;
  rotation?: Euler;
  scale?: number;
}

const AvataarLoader = (props: AvataarLoaderProps) => {
  return (
    <Html {...props}>
      <img src="./loader-avataar.gif" alt="Loading" width="200" />
    </Html>
  );
};

export default AvataarLoader;
