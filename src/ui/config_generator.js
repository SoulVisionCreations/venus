import { CameraStoreState } from './store/cameraStore';
import { EnvironmentStoreState } from './store/environmentStore';
import { ImagesStoreState } from './store/Images/imagesStore';
import { LightsStoreState } from './store/Lights/lightsStore';
import { SceneControlStoreState } from './store/sceneControlStore';
import { ConfigStoreState } from '../configStore';
import { TextsStoreState } from './store/Texts/textsStore';
import { Texts3DStoreState } from './store/Texts3D/texts3DStore';
import { StandardObjectsStoreState } from './store/StandardObjects/standardObjectsStore';
import { HtmlTemplatesStoreState } from './store/HtmlTemplates/htmlTemplatesStore';

function ConfigGenerator() {
    const { type, fov, near, far, position } = CameraStoreState();
    ConfigStoreState().setCamera({ type, fov, near, far, position: [position.x, position.y, position.z] });
    ConfigStoreState().setEnvironment({
        file: EnvironmentStoreState().files,
        files: EnvironmentStoreState().files?.length > 0 ? EnvironmentStoreState().files[0].name : null,
        background: EnvironmentStoreState().background,
        encoding: EnvironmentStoreState().encoding,
    });
    ConfigStoreState().setImages(ImagesStoreState().images);
    ConfigStoreState().setSceneControl({ type: SceneControlStoreState().type });
    ConfigStoreState().setTexts(TextsStoreState().texts);
    ConfigStoreState().setHtmlTemplates(HtmlTemplatesStoreState().htmlTemplates);
    ConfigStoreState().setObjects3D([...StandardObjectsStoreState().standardObjects, ...Texts3DStoreState().texts3D]);
    ConfigStoreState().setLights(LightsStoreState().lights);
}

export default ConfigGenerator;
