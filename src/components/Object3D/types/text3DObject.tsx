import { animated } from '@react-spring/three';
import { Center, Text3D } from '@react-three/drei';
import { getAssetbyId } from '../../../utils/download';
import { Text3DObjectProps } from '../../../types/object3DTypes';
import { SceneProps } from '../../Scene';
import { useAnimation } from '../../../utils/Animations/useAnimation';

const AnimatedCenter = animated(Center);

const Text3DObject = ({ objectProps, sceneProps }: { objectProps: Text3DObjectProps; sceneProps: SceneProps }) => {
    const spring = useAnimation(objectProps, sceneProps);
    const font: any = objectProps.assetId ? getAssetbyId(objectProps.assetId) : objectProps.font;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, animations, position, rotation, scale, ...props } = objectProps;

    return (
        <AnimatedCenter scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation}>
            <Text3D {...props} font={objectProps.font ? objectProps.font : font}>
                {objectProps.text}
                <meshStandardMaterial color={objectProps.color} />
            </Text3D>
        </AnimatedCenter>
    );
};

export default Text3DObject;
