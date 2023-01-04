import { PresentationControls } from '@react-three/drei';

export default function Bouncy({mesh, meshRef})
{   
    return (
        <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
            <mesh position={mesh.position} scale={mesh.scale} ref={meshRef}>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
      </PresentationControls>
    );
}