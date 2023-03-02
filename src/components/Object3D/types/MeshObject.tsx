import { renderObjectHtmls } from '../object3D';
import { MeshObjectProps } from '../../../types/object3DTypes';
import { animated } from '@react-spring/three';
import { getAssetbyId } from '../../../utils/download';
import { useAnimation } from '../../../utils/Animations/useAnimation';
import { SceneProps } from '../../Scene';

const MeshObject = ({ objectProps, sceneProps}: { objectProps: MeshObjectProps; sceneProps: SceneProps }) => {
    const model = getAssetbyId(objectProps.assetId);
    console.log(model, objectProps.assetId);
    const object = model.scene ? model.scene.clone() : model.clone();
    const spring = useAnimation(objectProps, sceneProps);
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <animated.primitive object={object} {...objectProps} position={spring.position} rotation={spring.rotation} scale={spring.scale}>
            {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
        </animated.primitive>
    );
};

export default MeshObject;
