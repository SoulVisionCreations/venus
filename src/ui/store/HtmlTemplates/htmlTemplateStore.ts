import { create } from 'zustand';
import { HtmlTemplateTypes } from '../../../types/enums';
import { HtmlTemplateProps } from '../../../types/types';

export type HtmlTemplateActions = {
    setType: (type: HtmlTemplateTypes) => void;
    setTitle: (title: string) => void;
    setData: (data: string) => void;
    setTitleStyle: (titleStyle: any) => void;
    setDataStyle: (dataStyle: any) => void;
    setBoxStyle: (boxStyle: any) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    resetHtmlTemplate: () => void;
};

const InitialState: HtmlTemplateProps = {
    type: HtmlTemplateTypes.ParagraphBox,
    title: '',
    data: '',
    titleStyle: null,
    dataStyle: null,
    boxStyle: null,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
};

const useHtmlTemplateStore = create<HtmlTemplateProps & HtmlTemplateActions>((set) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setTitle: (title) => set({ title }),
    setData: (data) => set({ data }),
    setTitleStyle: (titleStyle) => set({ titleStyle }),
    setDataStyle: (dataStyle) => set({ dataStyle }),
    setBoxStyle: (boxStyle) => set({ boxStyle }),
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
    resetHtmlTemplate: () => set(InitialState),
}));

const HtmlTemplateStoreState = useHtmlTemplateStore.getState;

export { HtmlTemplateStoreState };

export default useHtmlTemplateStore;
