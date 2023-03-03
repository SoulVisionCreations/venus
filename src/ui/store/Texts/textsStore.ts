import { create } from 'zustand';
import { Text } from './textStore';

interface Texts {
    texts: Text[];
    addTexts: (text: Text) => void;
    removeTexts: (id: number) => void;
}

const useTextsStore = create<Texts>((set, get) => ({
    texts: [],
    addTexts: (text) =>
        set((state) => ({
            texts: [...state.texts, text],
        })),
    removeTexts: (id) => {
        const { texts } = get();
        // const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

        texts.splice(id, 1);
        const newTexts = [...texts];
        set({ texts: newTexts });
    },
}));

const TextsStoreState = useTextsStore.getState;

export { TextsStoreState };

export default useTextsStore;
