import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { AnimationTypes } from '../types';
import { floatAnimation, rotateAnimation } from './animation';


export default function AnimatedMesh({meshProps})
{
    const objectRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshProps.animations.forEach(animation => {
            switch(animation.type) {
                case AnimationTypes.Rotate :  
                    rotateAnimation(time, objectRef.current, animation);
                    break;
                case AnimationTypes.Float :  
                    floatAnimation(time, objectRef.current);
                    break;
            }
        });
        
    })
   
    return (
        <mesh position={meshProps.position} ref={objectRef} scale={meshProps.scale} onClick={() => console.log("click")}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    );
}