import { create } from 'zustand';
import { LightTypes } from '../../../types/enums';

export type Light = {
    type: LightTypes;
    color: string;
    intensity: number;
    position: { x: number; y: number; z: number };
};

export type LightActions = {
    setType: (type: LightTypes) => void;
    setColor: (color: string) => void;
    setIntensity: (intensity: number) => void;
    setPosition: (value: number, pos: string) => void;
    resetLight: () => void;
};

const InitialState: Light = {
    type: LightTypes.Ambient,
    color: '#ffffff',
    intensity: 1,
    position: { x: 0, y: 0, z: 0 },
};

const useLightStore = create<Light & LightActions>((set) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setColor: (color) => set({ color }),
    setIntensity: (intensity) => set({ intensity }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: { ...state.position, x: value } }));
        else if (pos === 'y') set((state) => ({ position: { ...state.position, y: value } }));
        else if (pos === 'z') set((state) => ({ position: { ...state.position, z: value } }));
    },
    resetLight: () => set(InitialState),
}));

const LightStoreState = useLightStore.getState;

export { LightStoreState };

export default useLightStore;
