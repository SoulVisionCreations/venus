import { animated } from '@react-spring/three';
import { Center, Text3D } from '@react-three/drei';
import { useScrollAnimation } from '../../../utils/Animations/scrollAnimation';
import { useSpringAnimation } from '../../../utils/Animations/springAnimations';
import { getAssetbyId } from '../../../utils/download';
import { Text3DObjectProps } from '../../../types/object3DTypes';
import { SceneProps } from '../../Scene';
import { useRef } from 'react';

const AnimatedCenter = animated(Center);

const Text3DObject = ({ objectProps, sceneProps }: { objectProps: Text3DObjectProps; sceneProps: SceneProps }) => {
    const [spring, api] = useSpringAnimation(objectProps, sceneProps);
    useScrollAnimation(objectProps, sceneProps, api);
    let font: any = objectProps.font;
    if (objectProps.assetId) {
        font = getAssetbyId(objectProps.assetId);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, animations, position, rotation, scale, ...props } = objectProps;
    const text3DRef = useRef<any>();

    return (
        <AnimatedCenter scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation}>
            <Text3D ref={text3DRef} {...props} font={font}>
                {objectProps.text}
                <meshStandardMaterial color={objectProps.color} />
            </Text3D>
        </AnimatedCenter>
    );
};

export default Text3DObject;
