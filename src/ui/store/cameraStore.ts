import { create } from 'zustand';
import { CameraTypes } from '../../types/enums';

type Camera = {
    fov: number;
    near: number;
    far: number;
    position: { x: number; y: number; z: number };
    type: CameraTypes;
    setFov: (fov: number) => void;
    setNear: (near: number) => void;
    setFar: (far: number) => void;
    setPosition: (value: number, pos: string) => void;
    setType: (type: CameraTypes) => void;
};

const useCameraStore = create<Camera>((set) => ({
    fov: 75,
    near: 0.1,
    far: 1000,
    position: { x: 0, y: 0, z: 2 },
    orthographic: false,
    type: CameraTypes.Perspective,
    setFov: (fov) => set({ fov }),
    setNear: (near) => set({ near }),
    setFar: (far) => set({ far }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: { ...state.position, x: value } }));
        else if (pos === 'y') set((state) => ({ position: { ...state.position, y: value } }));
        else if (pos === 'z') set((state) => ({ position: { ...state.position, z: value } }));
    },
    setType: (type) => set({ type }),
}));

const CameraStoreState = useCameraStore.getState;

export { CameraStoreState };

export default useCameraStore;
