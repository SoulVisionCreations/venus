import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { floatAnimation } from './utility';


export default function Float({mesh})
{
    const objectRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        floatAnimation(time, objectRef.current);
    })
   
    return (
        <mesh position={mesh.position} ref={objectRef} scale={mesh.scale}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
    );
}