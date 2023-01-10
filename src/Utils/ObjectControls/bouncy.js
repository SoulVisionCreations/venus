import { PresentationControls } from '@react-three/drei';
import { objectDefaults } from '../../Constants/defaults';

export default function Bouncy({ObjRef, ObjProps})
{   
    const position = ObjProps.position != undefined ? ObjProps.position : objectDefaults.position;
    const scale = ObjProps.scale != undefined ? ObjProps.scale : objectDefaults.scale;
    return (
        <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]} >
            <primitive object={ObjRef} position={position} scale={scale} />
        </PresentationControls>
    );
}