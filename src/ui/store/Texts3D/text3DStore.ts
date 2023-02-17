import { create } from 'zustand';
import { ObjectTypes } from '../../../types/enums';

export type Text3D = {
    file: any;
    font: string;
    text?: string;
    color?: string;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    type: ObjectTypes.Text3D;
    // animations: any;
};

export type Text3DActions = {
    setFile: (file: any) => void;
    setText: (text: string) => void;
    setColor: (color: string) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    // setAnimations: (animations: any) => void;
    resetText: () => void;
};

const InitialState: Text3D = {
    type: ObjectTypes.Text3D,
    file: null,
    font: '',
    text: '',
    color: '#000000',
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    // animations: null,
};

const useText3DStore = create<Text3D & Text3DActions>((set) => ({
    ...InitialState,
    setFile: (file) => set({ file }),
    setText: (text) => set({ text }),
    setColor: (color) => set({ color }),
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
    // setAnimations: (animations) => set({animations}),
    resetText: () => set(InitialState),
}));

const Text3DStoreState = useText3DStore.getState;

export { Text3DStoreState };

export default useText3DStore;
