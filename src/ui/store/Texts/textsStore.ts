import { create } from 'zustand';
import { TextProps } from '../../../types/types';

interface Texts {
    texts: TextProps[];
    addTexts: (text: TextProps) => void;
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
        texts.splice(id, 1);
        set({ texts });
    },
}));

const TextsStoreState = useTextsStore.getState;

export { TextsStoreState };

export default useTextsStore;
