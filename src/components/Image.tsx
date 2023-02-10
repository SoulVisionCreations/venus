import { Html } from '@react-three/drei';
import { ImageProps } from '../types/types';
import { ImageTypes } from '../types/enums';
import { getAssetbyId } from '../utils/download';
import './Image.css';
import { useSpringAnimation } from '../utils/Animations/springAnimations';
import { useScrollAnimation } from '../utils/Animations/scrollAnimation';
import { SceneProps } from './Scene';
import { animated } from '@react-spring/three';

const AnimatedHtml = animated(Html);

const renderImage = ({ type, ...props }: any) => {
    switch (type) {
        case ImageTypes.Rounded:
            return <img className="rounded" {...props} alt="load failed" />;
        case ImageTypes.Circle:
            return <img className="circle" {...props} alt="load failed" />;
        case ImageTypes.Square:
            return <img className="square" {...props} alt="load failed" />;
        case ImageTypes.Icon:
            return <img className="icon" {...props} alt="load failed" />;
        default:
            return <img {...props} alt="load failed" />;
    }
};

const Image = ({ imageProps, sceneProps }: { imageProps: ImageProps; sceneProps: SceneProps }) => {
    const src: string = getAssetbyId(imageProps.assetId);
    const [spring, api] = useSpringAnimation(imageProps, sceneProps);
    useScrollAnimation(imageProps, sceneProps, api);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, position, rotation, scale, ...props } = imageProps;
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <AnimatedHtml transform scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props}>
            {renderImage({ type, ...props, src })}
        </AnimatedHtml>
    );
};

export default Image;
