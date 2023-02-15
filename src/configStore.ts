import { create } from 'zustand';
import produce from 'immer';
import { textImageExample } from './configs/textImageExample';

type Config = {
    config: any;
    setConfig: (config: any) => void;
    setCamera: (camera: any) => void;
    setSceneControl: (sceneControl: any) => void;
    setEnvironment: (environment: any) => void;
    setLights: (lights: any) => void;
    setTexts: (texts: any) => void;
};

const useConfigStore = create<Config>((set) => ({
    config: textImageExample,
    setConfig: (config) => set({ config }),
    setCamera: (camera) =>
        set(
            produce((state) => {
                state.config.children[0].camera = camera;
            })
        ),
    setSceneControl: (sceneControl) =>
        set(
            produce((state) => {
                state.config.children[0].sceneControl = sceneControl;
            })
        ),
    setEnvironment: (environment) =>
        set(
            produce((state) => {
                state.config.children[0].environment = environment;
            })
        ),
    setLights: (lights) =>
        set(
            produce((state) => {
                state.config.children[0].lights = lights;
            })
        ),
    setTexts: (texts) =>
        set(
            produce((state) => {
                state.config.children[0].texts = texts;
            })
        ),
}));

const ConfigStoreState = useConfigStore.getState;

export { ConfigStoreState };

export default useConfigStore;
