import { animated } from '@react-spring/three';
import { Text3D } from '@react-three/drei';
import { useScrollAnimation } from '../../../utils/Animations/scrollAnimation';
import { useSpringAnimation } from '../../../utils/Animations/springAnimations';
import { getAssetbyId } from '../../../utils/download';
import { Text3DObjectProps } from '../../../types/object3DTypes';
import { SceneProps } from '../../Scene';

const AnimatedText3D = animated(Text3D);

const Text3DObject = ({ objectProps, sceneProps }: { objectProps: Text3DObjectProps; sceneProps: SceneProps }) => {
    const [spring, api] = useSpringAnimation(objectProps, sceneProps);
    useScrollAnimation(objectProps, sceneProps, api);
    const font = getAssetbyId(objectProps.assetId);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, animations, ...props } = objectProps;

    return (
        <AnimatedText3D {...props} font={font} scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation}>
            {objectProps.text}
            <meshStandardMaterial color={objectProps.color} />
        </AnimatedText3D>
    );
};

export default Text3DObject;
