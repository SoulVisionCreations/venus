// import { CameraStoreState } from './store/cameraStore';
// import { EnvironmentStoreState } from './store/environmentStore';
// import { ImagesStoreState } from './store/Images/imagesStore';
import { LightsStoreState } from './store/Lights/lightsStore';
import { SceneControlStoreState } from './store/sceneControlStore';
import { ConfigStoreState } from '../configStore';
import { TextsStoreState } from './store/Texts/textsStore';
import { objToArr } from './utils/utility';

function ConfigGenerator() {
    // const camera = {
    //     fov: CameraStoreState().fov,
    //     near: CameraStoreState().near,
    //     far: CameraStoreState().far,
    //     position: [CameraStoreState().position.x, CameraStoreState().position.y, CameraStoreState().position.z],
    //     orthographic: CameraStoreState().orthographic,
    // };
    // config.images = ImagesStoreState().images;
    // ConfigStoreState().setEnvironment({ files: EnvironmentStoreState().files, background: EnvironmentStoreState().background, encoding: EnvironmentStoreState().encoding });
    ConfigStoreState().setSceneControl({ type: SceneControlStoreState().type });
    ConfigStoreState().setTexts(objToArr(TextsStoreState().texts));
    ConfigStoreState().setLights(objToArr(LightsStoreState().lights));
}

export default ConfigGenerator;
