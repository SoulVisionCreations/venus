import { OrbitControls } from '@react-three/drei';

export default function Orbit() {
    return <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.15} makeDefault />;
}
