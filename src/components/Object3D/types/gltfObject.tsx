import { renderObjectHtmls } from '../object3D';
import { GltfObjectProps } from '../../../types/object3DTypes';
import { useSpringAnimation } from '../../../utils/Animations/springAnimations';
import { animated } from '@react-spring/three';
import { getAssetbyId } from '../../../utils/download';
import { useScrollAnimation } from '../../../utils/Animations/scrollAnimation';
import { SceneProps } from '../../Scene';

const GltfObject = ({ objectProps, sceneProps }: { objectProps: GltfObjectProps; sceneProps: SceneProps }) => {
    const model = getAssetbyId(objectProps.assetId);
    const [spring, api] = useSpringAnimation(objectProps, sceneProps);
    useScrollAnimation(objectProps, sceneProps, api);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <animated.primitive object={model.scene} {...objectProps} position={spring.position} rotation={spring.rotation} scale={spring.scale}>
            {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
        </animated.primitive>
    );
};

export default GltfObject;
