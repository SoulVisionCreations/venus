import { animated } from '@react-spring/three';
import { Text3D } from '@react-three/drei';
import { useScrollAnimation } from '../../../utils/Animations/scrollAnimation';
import { useSpringAnimation } from '../../../utils/Animations/springAnimations';
import { getAssetbyId } from '../../../utils/download';
import { text3DObjectProps } from '../../../types/object3DTypes';
import { SceneProps } from '../../Scene';

const AnimatedText3D = animated(Text3D);

const Text3DObject = ({ objectProps, sceneProps }: { objectProps: text3DObjectProps; sceneProps: SceneProps }) => {
    const [spring, api] = useSpringAnimation(objectProps, sceneProps);
    useScrollAnimation(objectProps, sceneProps, api);
    const font = getAssetbyId(objectProps.assetId);

    return (
        <AnimatedText3D {...objectProps} font={font} scale={spring.scale} position={spring.position} rotation={spring.rotation}>
            {objectProps.text}
            <meshStandardMaterial color={objectProps.color} />
        </AnimatedText3D>
    );
};

export default Text3DObject;
