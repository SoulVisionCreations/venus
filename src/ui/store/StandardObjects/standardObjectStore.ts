import { create } from 'zustand';
import produce from 'immer';
import { MaterialTypes, ObjectTypes, StandardGeometryTypes } from '../../../types/enums';
import { StandardObjectProps } from '../../../types/object3DTypes';

export type StandardObjectActions = {
    setGeometryType: (type: StandardGeometryTypes) => void;
    setMaterialType: (type: MaterialTypes) => void;
    setColor: (color: string) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    // setAnimations: (animations: any) => void;
    resetObject: () => void;
};

const InitialState: StandardObjectProps = {
    type: ObjectTypes.StandardObject,
    geometry: {
        type: StandardGeometryTypes.BoxGeometry,
    },
    material: {
        type: MaterialTypes.MeshStandardMaterial,
        color: '#000000',
    },
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    // animations: null,
};

const useStandardObjectStore = create<StandardObjectProps & StandardObjectActions>((set) => ({
    ...InitialState,
    setGeometryType: (geometryType) =>
        set(
            produce((state) => {
                state.geometry.type = geometryType;
            })
        ),
    setMaterialType: (materialType) =>
        set(
            produce((state) => {
                state.material.type = materialType;
            })
        ),
    setColor: (color) =>
        set(
            produce((state) => {
                state.material.color = color;
            })
        ),
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
    resetObject: () => set(InitialState),
}));

const StandardObjectStoreState = useStandardObjectStore.getState;

export { StandardObjectStoreState };

export default useStandardObjectStore;
