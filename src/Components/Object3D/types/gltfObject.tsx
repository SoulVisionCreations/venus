import { renderObjectHtmls } from '../object3D';
import { gltfObjectProps } from '../../../Types/object3DTypes';
import { useSpringAnimation } from '../../../Utils/Animations/springAnimations';
import { animated } from '@react-spring/three';
import { getAssetbyId } from '../../../Utils/download';
import { useScrollAnimation } from '../../../Utils/Animations/scrollAnimation';
import { ScenePropsType } from '../../Scene/Scene';

const GltfObject = ({ objectProps, sceneProps }: { objectProps: gltfObjectProps; sceneProps: ScenePropsType }): JSX.Element => {
    const model = getAssetbyId(objectProps.assetId);
    const [spring, api] = useSpringAnimation(objectProps, sceneProps);
    useScrollAnimation(objectProps, sceneProps, api);

    return (
        <animated.primitive object={model.scene} {...objectProps} position={spring.position} rotation={spring.rotation} scale={spring.scale}>
            {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
        </animated.primitive>
    );
};

export default GltfObject;
