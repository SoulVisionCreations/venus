import { create } from 'zustand';

const usePanelStore = create((set) => ({
    panel: 0,
    setPanel: (panel) => set({ panel }),
}));

const PanelStoreState = usePanelStore.getState;

export { PanelStoreState };

export default usePanelStore;
