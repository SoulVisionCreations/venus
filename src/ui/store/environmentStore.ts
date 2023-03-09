import { create } from 'zustand';
import { EnvironmentProps } from '../../types/types';

// export enum EncodingTypes {
//     LinearEncoding,
//     sRGBEncoding,
//     BasicDepthPacking,
//     RGBADepthPacking,
// }

type EnvironmentActions = {
    setFiles: (files: any) => void;
    setBackground: (background: boolean) => void;
    // setEncoding: (encoding: EncodingTypes) => void;
};

const InitialState: EnvironmentProps = {
    files: '',
    background: false,
    // encoding: EncodingTypes.sRGBEncoding,
};

const useEnvironmentStore = create<EnvironmentProps & EnvironmentActions>((set) => ({
    ...InitialState,
    setFiles: (files) => set({ files }),
    setBackground: (background) => set({ background }),
    // setEncoding: (encoding) => set({ encoding }),
}));

const EnvironmentStoreState = useEnvironmentStore.getState;

export { EnvironmentStoreState };

export default useEnvironmentStore;
