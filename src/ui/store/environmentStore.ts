import { create } from 'zustand';

export enum EncodingTypes {
    LinearEncoding,
    sRGBEncoding,
    BasicDepthPacking,
    RGBADepthPacking,
}

type Environment = {
    files: any;
    background: boolean;
    encoding: EncodingTypes;
    setFiles: (files: any) => void;
    setBackground: (background: boolean) => void;
    setEncoding: (encoding: EncodingTypes) => void;
};

const useEnvironmentStore = create<Environment>((set) => ({
    files: null,
    background: false,
    encoding: EncodingTypes.sRGBEncoding,
    setFiles: (files) => set({ files }),
    setBackground: (background) => set({ background }),
    setEncoding: (encoding) => set({ encoding }),
}));

const EnvironmentStoreState = useEnvironmentStore.getState;

export { EnvironmentStoreState };

export default useEnvironmentStore;
