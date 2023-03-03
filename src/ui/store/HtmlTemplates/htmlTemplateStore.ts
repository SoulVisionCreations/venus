import { create } from 'zustand';
import { HtmlTemplateTypes, TextTypes } from '../../../types/enums';
import { HtmlTemplateProps } from '../../../types/types';

// export type HtmlTemplate = {
//     type: TextTypes;
//     text?: string;
//     title?: string;
//     numbered?: boolean;
//     list?: string[];
//     color?: string;
//     position: { x: number; y: number; z: number };
//     rotation: { x: number; y: number; z: number };
//     scale: { x: number; y: number; z: number };
//     // animations: any;
// };

export type HtmlTemplateActions = {
    setType: (type: HtmlTemplateTypes) => void;
    setTitle: (title: string) => void;
    setData: (data: string) => void;
    setTitleStyle: (titleStyle: any) => void;
    setDataStyle: (dataStyle: any) => void;
    setDivStyle: (divStyle: any) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    // setAnimations: (animations: any) => void;
    resetHtmlTemplate: () => void;
};

const InitialState: HtmlTemplateProps = {
    type: HtmlTemplateTypes.ParagraphBox,
    title: '',
    data: '',
    titleStyle: null,
    dataStyle: null,
    divStyle: null,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: 1,
    // animations: null,
};

const useTextStore = create<HtmlTemplateProps & HtmlTemplateActions>((set) => ({
    ...InitialState,
    setType: (type) => set({ type }),
    setTitle: (title) => set({ title }),
    setData: (data) => set({ data }),
    setTitleStyle: (titleStyle) => set({ titleStyle }),
    setDataStyle: (dataStyle) => set({ dataStyle }),
    setDivStyle: (divStyle) => set({ divStyle }),
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: [value, (state.position as any)[1], (state.position as any)[2]] }));
        else if (pos === 'y') set((state) => ({ position: [(state.position as any)[0], value, (state.position as any)[2]] }));
        else if (pos === 'z') set((state) => ({ position: [(state.position as any)[0], (state.position as any)[1]], value }));
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
    resetHtmlTemplate: () => set(InitialState),
}));

const TextStoreState = useTextStore.getState;

export { TextStoreState };

export default useTextStore;
