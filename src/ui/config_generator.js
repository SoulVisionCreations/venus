// import { CameraStoreState } from './store/cameraStore';
// import { EnvironmentStoreState } from './store/environmentStore';
// import { ImagesStoreState } from './store/Images/imagesStore';
import { LightsStoreState } from './store/Lights/lightsStore';
import { SceneControlStoreState } from './store/sceneControlStore';
// import { TextsStoreState } from './store/Texts/textsStore';
import { ConfigStoreState } from '../configStore';

const objToArr = (objectArr) => {
    objectArr.map((object) => {
        const position = { ...object.position };
        object.position = [position.x, position.y, position.z];
    });
    return objectArr;
};

function ConfigGenerator() {
    const { config } = ConfigStoreState();
    // const camera = {
    //     fov: CameraStoreState().fov,
    //     near: CameraStoreState().near,
    //     far: CameraStoreState().far,
    //     position: [CameraStoreState().position.x, CameraStoreState().position.y, CameraStoreState().position.z],
    //     orthographic: CameraStoreState().orthographic,
    // };
    // config.texts = TextsStoreState().texts;
    // config.images = ImagesStoreState().images;
    // ConfigStoreState().setEnvironment({ files: EnvironmentStoreState().files, background: EnvironmentStoreState().background, encoding: EnvironmentStoreState().encoding });
    ConfigStoreState().setSceneControl({ type: SceneControlStoreState().type });
    ConfigStoreState().setLights(objToArr(LightsStoreState().lights));
    return config;
}

export default ConfigGenerator;
