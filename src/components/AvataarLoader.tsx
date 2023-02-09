import { Html } from '@react-three/drei';
import { arrayToVec3, arrayToEuler } from '../utils/utility';

export interface AvataarLoaderProps {
    center?: boolean;
    position?: number[];
    rotation?: number[];
    scale?: number;
}

const AvataarLoader = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }: AvataarLoaderProps) => {
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: scale };
    return (
        <Html {...props} {...prs}>
            <img src="./loader-avataar.gif" alt="Loading" width="200" />
        </Html>
    );
};

export default AvataarLoader;
