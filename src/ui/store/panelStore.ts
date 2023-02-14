import { create } from 'zustand';

type Panel = {
    panel: number;
    setPanel: (panel: number) => void;
};

const usePanelStore = create<Panel>((set) => ({
    panel: 0,
    setPanel: (panel) => set({ panel }),
}));

const PanelStoreState = usePanelStore.getState;

export { PanelStoreState };

export default usePanelStore;
