import { animated } from '@react-spring/three';
import { Image } from '@react-three/drei';
import { ImageProps } from '../types/types';
import { useAnimation } from '../utils/Animations/useAnimation';
import { getAssetbyId } from '../utils/download';
import { SceneProps } from './Scene';

const AnimatedImage = animated(Image);

export type ImageAsset = {
    src: string;
    aspectRatio: number;
};

const ImageLoader = ({ imageProps, sceneProps }: { imageProps: ImageProps; sceneProps: SceneProps }) => {
    const asset: ImageAsset = getAssetbyId(imageProps.assetId);
    imageProps = { ...imageProps, scale: [asset.aspectRatio, 1, 1] };
    //if (!imageProps.src) imageProps = { ...imageProps, scale: [asset.aspectRatio, 1, 1] };
    const spring = useAnimation(imageProps, sceneProps);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { position, rotation, scale, animations, assetId, ...props } = imageProps;
    return <AnimatedImage url={imageProps.src ? imageProps.src : asset.src} scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props} />;
};

export default ImageLoader;
