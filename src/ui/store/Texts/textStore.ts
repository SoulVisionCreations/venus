import { create } from 'zustand';
import { TextTypes } from '../../../types/enums';

export type Text = {
    type: TextTypes;
    text?: string;
    title?: string;
    numbered?: boolean;
    list?: string[];
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    // style: any;
    // animations: any;
};

export type TextActions = {
    setType: (type: TextTypes) => void;
    setText: (text: string) => void;
    setTitle: (title: string) => void;
    setNumbered: (numbered: boolean) => void;
    setList: (list: string[]) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    // setStyle: (style: any) => void;
    // setAnimations: (animations: any) => void;
    resetText: () => void;
};

const InitialState: Text = {
    type: TextTypes.Paragraph,
    text: '',
    title: '',
    numbered: false,
    list: [],
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    // style: null,
    // animations: null,
};

const useTextStore = create<Text & TextActions>((set) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setText: (text) => set({ text }),
    setTitle: (title) => set({ title }),
    setNumbered: (numbered) => set({ numbered }),
    setList: (list) => set({ list }),
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
    resetText: () => set(InitialState),
}));

const TextStoreState = useTextStore.getState;

export { TextStoreState };

export default useTextStore;
