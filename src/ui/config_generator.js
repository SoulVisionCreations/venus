import { CameraStoreState } from './store/cameraStore';
import { EnvironmentStoreState } from './store/environmentStore';
import { ImagesStoreState } from './store/Images/imagesStore';
import { LightsStoreState } from './store/Lights/lightsStore';
import { SceneControlStoreState } from './store/sceneControlStore';
import { TextsStoreState } from './store/Texts/textsStore';

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
    config.texts = TextsStoreState().texts;
    config.images = ImagesStoreState().images;
    return config;
}

export default ConfigGenerator;
