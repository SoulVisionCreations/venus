import { create } from 'zustand';
import { StandardObjectProps } from '../../../types/object3DTypes';

interface StandardObjects {
    standardObjects: StandardObjectProps[];
    addStandardObjects: (object: StandardObjectProps) => void;
    removeStandardObjects: (id: number) => void;
}

const useStandardObjectsStore = create<StandardObjects>((set, get) => ({
    standardObjects: [],
    addStandardObjects: (standardObject) =>
        set((state) => ({
            standardObjects: [...state.standardObjects, standardObject],
        })),
    removeStandardObjects: (id) => {
        const { standardObjects } = get();
        standardObjects.splice(id, 1);
        set({ standardObjects });
    },
}));

const StandardObjectsStoreState = useStandardObjectsStore.getState;

export { StandardObjectsStoreState };

export default useStandardObjectsStore;
