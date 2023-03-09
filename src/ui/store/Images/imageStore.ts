import { create } from 'zustand';
import { ImageProps } from '../../../types/types';

export type Image = ImageProps & {
    file: any;
};

export type ImageActions = {
    setFile: (file: any) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    // setAnimations: (animations: any) => void;
    resetImage: () => void;
};

const InitialState: Image = {
    assetId: '',
    file: null,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    src: '',
    // animations: null,
};

const useImageStore = create<Image & ImageActions>((set) => ({
    ...InitialState,
    setFile: (file) => set({ file }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: [value, (state.position as any)[1], (state.position as any)[2]] }));
        else if (pos === 'y') set((state) => ({ position: [(state.position as any)[0], value, (state.position as any)[2]] }));
        else if (pos === 'z') set((state) => ({ position: [(state.position as any)[0], (state.position as any)[1]], value }));
    },
    setRotation: (value, rot) => {
        if (rot === 'x') set((state) => ({ rotation: [value, (state.rotation as any)[1], (state.rotation as any)[2]] }));
        else if (rot === 'y') set((state) => ({ rotation: [(state.rotation as any)[0], value, (state.rotation as any)[2]] }));
        else if (rot === 'z') set((state) => ({ rotation: [(state.rotation as any)[0], (state.rotation as any)[1]], value }));
    },
    setScale: (value, scl) => {
        if (scl === 'x') set((state) => ({ scale: [value, (state.scale as any)[1], (state.scale as any)[2]] }));
        else if (scl === 'y') set((state) => ({ scale: [(state.scale as any)[0], value, (state.scale as any)[2]] }));
        else if (scl === 'z') set((state) => ({ scale: [(state.scale as any)[0], (state.scale as any)[1]], value }));
    },
    // setAnimations: (animations) => set({animations}),
    resetImage: () => set(InitialState),
}));

const ImageStoreState = useImageStore.getState;

export { ImageStoreState };

export default useImageStore;
