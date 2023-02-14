import { CameraStoreState } from './store/cameraStore';
import { EnvironmentStoreState } from './store/environmentStore';
import { LightsStoreState } from './store/lightsStore';
import { SceneControlStoreState } from './store/sceneControlStore';

function ConfigGenerator() {
    const config = {};
    config.camera = {
        fov: CameraStoreState().fov,
        near: CameraStoreState().near,
        far: CameraStoreState().far,
        position: [CameraStoreState().position.x, CameraStoreState().position.y, CameraStoreState().position.z],
        orthographic: CameraStoreState().orthographic,
    };
    config.environment = {
        files: EnvironmentStoreState().files,
        background: EnvironmentStoreState().background,
        encoding: EnvironmentStoreState().encoding,
    };
    config.sceneControl = {
        type: SceneControlStoreState().type,
    };
    config.lights = LightsStoreState().lights;
    return config;
}

export default ConfigGenerator;
