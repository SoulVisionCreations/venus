import { create } from 'zustand';
import { SceneControlTypes } from '../../types/enums';

type SceneControl = {
    type: SceneControlTypes;
    setType: (type: SceneControlTypes) => void;
};

const useSceneControlStore = create<SceneControl>((set) => ({
    type: SceneControlTypes.None,
    setType: (type) => set({ type }),
}));

const SceneControlStoreState = useSceneControlStore.getState;

export { SceneControlStoreState };

export default useSceneControlStore;
