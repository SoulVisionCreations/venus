import { create } from 'zustand';
import { ImageTypes } from '../../../types/enums';

export type Image = {
    type: ImageTypes;
    file: any;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    // style: any;
    // animations: any;
};

export type ImageActions = {
    setType: (type: ImageTypes) => void;
    setFile: (file: any) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    // setStyle: (style: any) => void;
    // setAnimations: (animations: any) => void;
    resetImage: () => void;
};

const InitialState: Image = {
    type: ImageTypes.None,
    file: null,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    // style: null,
    // animations: null,
};

const useImageStore = create<Image & ImageActions>((set) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setFile: (file) => set({ file }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: { ...state.position, x: value } }));
        else if (pos === 'y') set((state) => ({ position: { ...state.position, y: value } }));
        else if (pos === 'z') set((state) => ({ position: { ...state.position, z: value } }));
    },
    setRotation: (value, pos) => {
        if (pos === 'x') set((state) => ({ rotation: { ...state.rotation, x: value } }));
        else if (pos === 'y') set((state) => ({ rotation: { ...state.rotation, y: value } }));
        else if (pos === 'z') set((state) => ({ rotation: { ...state.rotation, z: value } }));
    },
    setScale: (value, pos) => {
        if (pos === 'x') set((state) => ({ scale: { ...state.scale, x: value } }));
        else if (pos === 'y') set((state) => ({ scale: { ...state.scale, y: value } }));
        else if (pos === 'z') set((state) => ({ scale: { ...state.scale, z: value } }));
    },
    // setStyle: (style) => set({style}),
    // setAnimations: (animations) => set({animations}),
    resetImage: () => set(InitialState),
}));

const ImageStoreState = useImageStore.getState;

export { ImageStoreState };

export default useImageStore;
