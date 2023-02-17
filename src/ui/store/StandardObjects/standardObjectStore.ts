import { create } from 'zustand';
import produce from 'immer';
import { MaterialTypes, ObjectTypes, StandardGeometryTypes } from '../../../types/enums';
import { GeometryProps, MaterialProps } from '../../../types/types';

export type StandardObject = {
    geometry: GeometryProps;
    material: MaterialProps;
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
    type: ObjectTypes.StandardObject;
    // animations: any;
};

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

const InitialState: StandardObject = {
    type: ObjectTypes.StandardObject,
    geometry: {
        type: StandardGeometryTypes.BoxGeometry,
    },
    material: {
        type: MaterialTypes.MeshStandardMaterial,
        color: '#000000',
    },
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    scale: { x: 1, y: 1, z: 1 },
    // animations: null,
};

const useStandardObjectStore = create<StandardObject & StandardObjectActions>((set) => ({
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
    // setAnimations: (animations) => set({animations}),
    resetObject: () => set(InitialState),
}));

const StandardObjectStoreState = useStandardObjectStore.getState;

export { StandardObjectStoreState };

export default useStandardObjectStore;
