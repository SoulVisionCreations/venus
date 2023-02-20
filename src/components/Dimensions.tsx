import { Text } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import { BufferGeometry, Vector3 } from 'three';
import { CameraProps } from '../types/types';

const degtoRad = (deg: number) => {
    return (deg * Math.PI) / 180;
};

const Dimensions = ({ camera }: { camera?: CameraProps }) => {
    const posz = camera?.position ? camera.position[2] : 2;
    const fov = camera?.fov ? camera.fov : 50;
    const maxh = posz * Math.tan(degtoRad(fov) / 2);
    const maxw = (maxh * window.innerWidth) / window.innerHeight;
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
