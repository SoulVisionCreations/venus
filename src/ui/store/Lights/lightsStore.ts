import { create } from 'zustand';
import { Light } from './lightStore';

interface Lights {
    lights: Light[];
    addLights: (light: Light) => void;
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
