import { CameraStoreState } from './store/cameraStore';
// import { EnvironmentStoreState } from './store/environmentStore';
// import { ImagesStoreState } from './store/Images/imagesStore';
import { LightsStoreState } from './store/Lights/lightsStore';
import { SceneControlStoreState } from './store/sceneControlStore';
import { ConfigStoreState } from '../configStore';
import { TextsStoreState } from './store/Texts/textsStore';
import { objToArr } from './utils/utility';

function ConfigGenerator() {
    const { type, fov, near, far, position } = CameraStoreState();
    ConfigStoreState().setCamera({ type, fov, near, far, position: [position.x, position.y, position.z] });
    // config.images = ImagesStoreState().images;
    // ConfigStoreState().setEnvironment({ files: EnvironmentStoreState().files, background: EnvironmentStoreState().background, encoding: EnvironmentStoreState().encoding });
    ConfigStoreState().setSceneControl({ type: SceneControlStoreState().type });
    ConfigStoreState().setTexts(objToArr(TextsStoreState().texts));
    ConfigStoreState().setLights(objToArr(LightsStoreState().lights));
}

export default ConfigGenerator;
