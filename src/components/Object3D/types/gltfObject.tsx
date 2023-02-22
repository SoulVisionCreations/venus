import { renderObjectHtmls } from '../object3D';
import { GltfObjectProps } from '../../../types/object3DTypes';
import { animated } from '@react-spring/three';
import { getAssetbyId } from '../../../utils/download';
import { useAnimation } from '../../../utils/Animations/useAnimation';
import { SceneProps } from '../../Scene';

const GltfObject = ({ objectProps, sceneProps }: { objectProps: GltfObjectProps; sceneProps: SceneProps }) => {
    const model = getAssetbyId(objectProps.assetId);
    const spring = useAnimation(objectProps, sceneProps);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <animated.primitive object={model.scene.clone()} {...objectProps} position={spring.position} rotation={spring.rotation} scale={spring.scale}>
            {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
        </animated.primitive>
    );
};

export default GltfObject;
