import { create } from 'zustand';

type PanelState = {
    panel: number;
    setPanel: (panel: number) => void;
};

const usePanelStore = create<PanelState>((set) => ({
    panel: 0,
    setPanel: (panel) => set({ panel }),
}));

const PanelStoreState = usePanelStore.getState;

export { PanelStoreState };

export default usePanelStore;
