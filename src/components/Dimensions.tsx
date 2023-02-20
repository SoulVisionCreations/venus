import { Text } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { BufferGeometry, Vector3 } from 'three';
import { CameraProps } from '../types/types';
import { degToRad } from '../utils/utility';

const Dimensions = ({ camera }: { camera?: CameraProps }) => {
    const posz: number = camera?.position ? camera.position[2] : 2;
    const fov: number = camera?.fov ? camera.fov : 50;
    const maxh: number = posz * Math.tan(degToRad(fov) / 2);
    const maxw: number = (maxh * window.innerWidth) / window.innerHeight;
    const hpoints: Vector3[] = [new Vector3(0, -maxh, 0), new Vector3(0, maxh, 0)];
    const wpoints: Vector3[] = [new Vector3(-maxw, 0, 0), new Vector3(maxw, 0, 0)];
    const href = useRef<BufferGeometry>(null!);
    const wref = useRef<BufferGeometry>(null!);
    useLayoutEffect(() => {
        if (wref.current) {
            wref.current.setFromPoints(wpoints);
        }
        if (href.current) {
            href.current.setFromPoints(hpoints);
        }
    }, []);

    return (
        <>
            <line>
                <bufferGeometry ref={wref} />
                <lineBasicMaterial color={0xff0000} />
            </line>
            <line>
                <bufferGeometry ref={href} />
                <lineBasicMaterial color={0xff0000} />
            </line>
            <Text position={[0.25, maxh - 0.1, 0]} color="red">
                (0, {Math.round((maxh + Number.EPSILON) * 10) / 10}, 0)
            </Text>
            <Text position={[0.25, -maxh + 0.1, 0]} color="red">
                (0, -{Math.round((maxh + Number.EPSILON) * 10) / 10}, 0)
            </Text>
            <Text position={[maxw - 0.25, 0.1, 0]} color="red">
                ({Math.round((maxw + Number.EPSILON) * 10) / 10}, 0, 0)
            </Text>
            <Text position={[-maxw + 0.25, 0.1, 0]} color="red">
                (-{Math.round((maxw + Number.EPSILON) * 10) / 10}, 0, 0)
            </Text>
        </>
    );
};

export default Dimensions;
