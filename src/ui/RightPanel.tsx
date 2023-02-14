import CanvasProps from './components/CanvasProps';
import Images from './components/Images';
import Lights from './components/Lights';
import Texts from './components/Texts';
import './RightPanel.css';
import usePanelStore from './store/panelStore';

export const RightPanel = () => {
    const [panel] = usePanelStore((s) => [s.panel]);
    return (
        <div className="right-panel">
            {panel == 0 && <CanvasProps />}
            {panel == 1 && <Lights />}
            {panel == 2 && <Texts />}
            {panel == 3 && <Images />}
        </div>
    );
};
