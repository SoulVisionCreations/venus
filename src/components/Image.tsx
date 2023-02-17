import { animated } from '@react-spring/three';
import { Image } from '@react-three/drei';
import { ImageProps } from '../types/types';
import { getAssetbyId } from '../utils/download';
import { useSpringAnimation } from '../utils/Animations/springAnimations';
import { useScrollAnimation } from '../utils/Animations/scrollAnimation';
import { SceneProps } from './Scene';

const AnimatedImage = animated(Image);

export type ImageAsset = {
    src: string;
    aspectRatio: number;
};

const ImageLoader = ({ imageProps, sceneProps }: { imageProps: ImageProps; sceneProps: SceneProps }) => {
    const asset: ImageAsset = getAssetbyId(imageProps.assetId);
    if (!imageProps.src) imageProps = { ...imageProps, scale: [asset.aspectRatio, 1, 1] };
    const [spring, api] = useSpringAnimation(imageProps, sceneProps);
    useScrollAnimation(imageProps, sceneProps, api);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { position, rotation, scale, animations, assetId, ...props } = imageProps;
    return <AnimatedImage url={imageProps.src ? imageProps.src : asset.src} scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props} />;
};

export default ImageLoader;
