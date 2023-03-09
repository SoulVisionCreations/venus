import { create } from 'zustand';
import { HtmlTemplateProps } from '../../../types/types';

interface HtmlTemplates {
    htmlTemplates: HtmlTemplateProps[];
    addHtmlTemplates: (htmlTemplates: HtmlTemplateProps) => void;
    removeHtmlTemplates: (id: number) => void;
}

const useHtmlTemplatesStore = create<HtmlTemplates>((set, get) => ({
    htmlTemplates: [],
    addHtmlTemplates: (htmlTemplate) =>
        set((state) => ({
            htmlTemplates: [...state.htmlTemplates, htmlTemplate],
        })),
    removeHtmlTemplates: (id) => {
        const { htmlTemplates } = get();
        htmlTemplates.splice(id, 1);
        set({ htmlTemplates });
    },
}));

const HtmlTemplatesStoreState = useHtmlTemplatesStore.getState;

export { HtmlTemplatesStoreState };

export default useHtmlTemplatesStore;
