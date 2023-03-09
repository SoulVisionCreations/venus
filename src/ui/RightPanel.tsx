import CanvasProps from './components/CanvasProps';
import HtmlTemplates from './components/HtmlTemplates';
import Images from './components/Images';
import Lights from './components/Lights';
import StandardObjects from './components/StandardObjects';
import Texts from './components/Texts';
import Texts3D from './components/Texts3D';
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
            {panel == 6 && <StandardObjects />}
            {panel == 7 && <Texts3D />}
            {panel == 8 && <HtmlTemplates />}
        </div>
    );
};
