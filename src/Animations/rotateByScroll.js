import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll, Html } from '@react-three/drei';


export default function RotateByScroll({mesh})
{
    const scroll = useScroll();
    const objectRef = useRef();

    useFrame(() => {
        objectRef.current.rotation.y = scroll.offset*Math.PI;
    })
   
    return (
        <>
            <mesh position={mesh.position} ref={objectRef} scale={mesh.scale}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
        </>
    );
}