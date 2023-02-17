import { create } from 'zustand';
import { StandardObject } from './standardObjectStore';

interface StandardObjects {
    standardObjects: StandardObject[];
    addStandardObjects: (object: StandardObject) => void;
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
