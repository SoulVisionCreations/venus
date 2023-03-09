import { create } from 'zustand';
import { ObjectTypes } from '../../../types/enums';
import { Text3DObjectProps } from '../../../types/object3DTypes';

export type Text3D = Text3DObjectProps & {
    file: any;
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
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    // animations: null,
};

const useText3DStore = create<Text3D & Text3DActions>((set) => ({
    ...InitialState,
    setFile: (file) => set({ file }),
    setText: (text) => set({ text }),
    setColor: (color) => set({ color }),
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
    resetText: () => set(InitialState),
}));

const Text3DStoreState = useText3DStore.getState;

export { Text3DStoreState };

export default useText3DStore;
