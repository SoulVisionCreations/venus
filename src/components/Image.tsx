import { animated } from '@react-spring/three';
import { Image } from '@react-three/drei';
import { ImageProps } from '../types/types';
import { useAnimation } from '../utils/Animations/useAnimation';
// import { ImageTypes } from '../types/enums';
import { getAssetbyId } from '../utils/download';
import './Image.css';
import { SceneProps } from './Scene';

const AnimatedImage = animated(Image);

// const renderImage = ({ type, ...props }: any) => {
//     switch (type) {
//         case ImageTypes.Rounded:
//             return <img className="rounded" {...props} alt="load failed" />;
//         case ImageTypes.Circle:
//             return <img className="circle" {...props} alt="load failed" />;
//         case ImageTypes.Square:
//             return <img className="square" {...props} alt="load failed" />;
//         case ImageTypes.Icon:
//             return <img className="icon" {...props} alt="load failed" />;
//         default:
//             return <img {...props} alt="load failed" />;
//     }
// };

const ImageLoader = ({ imageProps, sceneProps }: { imageProps: ImageProps; sceneProps: SceneProps }) => {
    const spring = useAnimation(imageProps, sceneProps);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, position, rotation, scale, animations, assetId, ...props } = imageProps;
    const src: string = getAssetbyId(assetId);
    return <AnimatedImage url={src} scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props} />;
};

export default ImageLoader;
