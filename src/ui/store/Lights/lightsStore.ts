import { create } from 'zustand';
import { LightProps } from '../../../types/types';

interface Lights {
    lights: LightProps[];
    addLights: (light: LightProps) => void;
    removeLights: (id: number) => void;
}

const useLightsStore = create<Lights>((set, get) => ({
    lights: [],
    addLights: (light) =>
        set((state) => ({
            lights: [...state.lights, light],
        })),
    removeLights: (id) => {
        const { lights } = get();
        lights.splice(id, 1);
        set({ lights });
    },
}));

const LightsStoreState = useLightsStore.getState;

export { LightsStoreState };

export default useLightsStore;
