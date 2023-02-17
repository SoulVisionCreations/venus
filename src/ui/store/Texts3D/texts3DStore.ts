import { create } from 'zustand';
import { Text3D } from './text3DStore';

interface Texts3D {
    texts3D: Text3D[];
    addTexts3D: (text3D: Text3D) => void;
    removeTexts3D: (id: number) => void;
}

const useTexts3DStore = create<Texts3D>((set, get) => ({
    texts3D: [],
    addTexts3D: (text3D) =>
        set((state) => ({
            texts3D: [...state.texts3D, text3D],
        })),
    removeTexts3D: (id) => {
        const { texts3D } = get();
        texts3D.splice(id, 1);
        set({ texts3D });
    },
}));

const Texts3DStoreState = useTexts3DStore.getState;

export { Texts3DStoreState };

export default useTexts3DStore;
