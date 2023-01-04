import { PresentationControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react';
import Bouncy from './bouncy';
import { floatAnimation } from '../Animations/utility';


export default function BouncyFloat({mesh})
{
    const objectRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        floatAnimation(time, objectRef.current);
    })
   
    return (
        <Bouncy mesh={mesh} meshRef={objectRef} />
    );
}