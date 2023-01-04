import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { cameraDefaults } from './defaults.js';
import {CameraTypes } from './types.js';

export const getCamera = (camera) => {
    switch(camera.type) {
        case CameraTypes.Perspective:
            return <PerspectiveCamera makeDefault position={camera.position ? camera.position : cameraDefaults.position} fov={camera.fov ? camera.fov : 100} />;
        case CameraTypes.Orthographic:
            return <OrthographicCamera makeDefault position={camera.position} zoom={50} fov={camera.fov ? camera.fov : 100} />;
    }
}