import { create } from 'zustand';
import { Animation } from '../../../types/animationTypes';
import { TextTypes } from '../../../types/enums';
import { TextProps } from '../../../types/types';

export type TextActions = {
    setType: (type: TextTypes) => void;
    setTitle: (title: string) => void;
    setData: (data: string | string[]) => void;
    setColor: (color: string) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    addAnimations: (animation: Animation) => void;
    removeAnimations: (id: number) => void;
    resetText: () => void;
};

const InitialState: TextProps = {
    type: TextTypes.Paragraph,
    title: '',
    data: '',
    numbered: false,
    color: '#000000',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    animations: [],
};

const useTextStore = create<TextProps & TextActions>((set, get) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setData: (data) => set({ data }),
    setTitle: (title) => set({ title }),
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
    addAnimations: (animation) =>
        set((state) => ({
            animations: [...(state.animations as any), animation],
        })),
    removeAnimations: (id) => {
        const { animations } = get();
        (animations as any).splice(id, 1);
        set({ animations });
    },
    resetText: () => set(InitialState),
}));

const TextStoreState = useTextStore.getState;

export { TextStoreState };

export default useTextStore;
