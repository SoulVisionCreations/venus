import CanvasProps from './components/CanvasProps';
import Lights from './components/Lights';
import './RightPanel.css';
import usePanelStore from './store/panelStore';

export const RightPanel = () => {
    const [panel] = usePanelStore((s) => [s.panel]);
    return (
        <div className="right-panel">
            {panel == 0 && <CanvasProps />}
            {panel == 1 && <Lights />}
        </div>
    );
};
