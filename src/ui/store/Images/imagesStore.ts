import { create } from 'zustand';
import { Image } from './imageStore';

interface Images {
    images: Image[];
    addImages: (image: Image) => void;
    removeImages: (id: number) => void;
}

const useImagesStore = create<Images>((set, get) => ({
    images: [],
    addImages: (image) =>
        set((state) => ({
            images: [...state.images, image],
        })),
    removeImages: (id) => {
        const { images } = get();
        images.splice(id, 1);
        set({ images });
    },
}));

const ImagesStoreState = useImagesStore.getState;

export { ImagesStoreState };

export default useImagesStore;
