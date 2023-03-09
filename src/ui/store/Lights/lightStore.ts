import { create } from 'zustand';
import { LightTypes } from '../../../types/enums';
import { LightProps } from '../../../types/types';

export type LightActions = {
    setType: (type: LightTypes) => void;
    setColor: (color: string) => void;
    setIntensity: (intensity: number) => void;
    setPosition: (value: number, pos: string) => void;
    resetLight: () => void;
};

const InitialState: LightProps = {
    type: LightTypes.Ambient,
    color: '#ffffff',
    intensity: 1,
    position: [0, 0, 0],
};

const useLightStore = create<LightProps & LightActions>((set) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setColor: (color) => set({ color }),
    setIntensity: (intensity) => set({ intensity }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: [value, (state.position as any)[1], (state.position as any)[2]] }));
        else if (pos === 'y') set((state) => ({ position: [(state.position as any)[0], value, (state.position as any)[2]] }));
        else if (pos === 'z') set((state) => ({ position: [(state.position as any)[0], (state.position as any)[1]], value }));
    },
    resetLight: () => set(InitialState),
}));

const LightStoreState = useLightStore.getState;

export { LightStoreState };

export default useLightStore;
