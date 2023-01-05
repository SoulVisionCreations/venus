import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { applyAnimations} from './animation';


export default function AnimatedMesh({meshProps})
{
    const objectRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if(objectRef.current) {
            applyAnimations(meshProps.animations, time, objectRef.current);
        }
        
    })
    
    return (
        <mesh position={meshProps.position} ref={objectRef} scale={meshProps.scale}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    );
}