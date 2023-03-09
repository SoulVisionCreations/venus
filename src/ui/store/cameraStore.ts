import { create } from 'zustand';
import { CameraTypes } from '../../types/enums';
import { CameraProps } from '../../types/types';

export type CameraActions = {
    setFov: (fov: number) => void;
    setNear: (near: number) => void;
    setFar: (far: number) => void;
    setPosition: (value: number, pos: string) => void;
    setType: (type: CameraTypes) => void;
};

const InitialState: CameraProps = {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: [0, 0, 0],
    type: CameraTypes.Perspective,
};

const useCameraStore = create<CameraProps & CameraActions>((set) => ({
    ...InitialState,
    setFov: (fov) => set({ fov }),
    setNear: (near) => set({ near }),
    setFar: (far) => set({ far }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: [value, (state.position as any)[1], (state.position as any)[2]] }));
        else if (pos === 'y') set((state) => ({ position: [(state.position as any)[0], value, (state.position as any)[2]] }));
        else if (pos === 'z') set((state) => ({ position: [(state.position as any)[0], (state.position as any)[1]], value }));
    },
    setType: (type) => set({ type }),
}));

const CameraStoreState = useCameraStore.getState;

export { CameraStoreState };

export default useCameraStore;
