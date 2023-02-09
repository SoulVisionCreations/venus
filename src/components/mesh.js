import { animated } from '@react-spring/three';
import { useSpringAnimation } from '../utils/Animations/springAnimations';
import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { ObjectControls } from '../utils/ObjectControls/objectControls';
import { useScrollAnimation } from '../utils/Animations/scrollAnimation';
import { renderObjectHtmls } from './Object3D/object3D';

export function Mesh({ geometry, material, gSceneParams, objectProps, sceneProps }) {
    const meshRef = useRef();
    const [spring, api] = useSpringAnimation(objectProps, sceneProps);
    useScrollAnimation(objectProps, sceneProps, api);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.material.uniforms?.CamPos.value.copy(state.camera.position);
    });

    useEffect(() => {
        if (!meshRef.current) return;
        if (gSceneParams) meshRef.current.userData.SceneParams = gSceneParams.current;
    }, [meshRef.current]);

    return (
        <ObjectControls {...objectProps}>
            <animated.mesh
                ref={meshRef}
                geometry={geometry}
                material={material}
                rotation={spring.rotation}
                position={spring.position}
                scale={spring.scale}
            >
                {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
            </animated.mesh>
        </ObjectControls>
    );
}
