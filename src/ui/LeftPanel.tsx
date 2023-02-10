import { FaRegLightbulb, FaCube, FaPaintRoller } from 'react-icons/fa';
import { MdOutlineTextFields } from 'react-icons/md';
import { SiThreedotjs } from 'react-icons/si';
import { TbTextResize } from 'react-icons/tb';
import { SlScreenDesktop } from 'react-icons/sl';
import { BsImage } from 'react-icons/bs';
import './LeftPanel.css';
import usePanelStore from './store/panelStore';

export const LeftPanel = () => {
    const [panel, setPanel] = usePanelStore((s) => [s.panel, s.setPanel]);
    return (
        <div className="left-panel">
            <button className={panel == 0 ? 'selected' : 'icon'} onClick={() => setPanel(0)}>
                <SlScreenDesktop size={30} />
            </button>
            <button className={panel == 1 ? 'selected' : 'icon'} onClick={() => setPanel(1)}>
                <FaRegLightbulb size={30} />
            </button>
            <button className={panel == 2 ? 'selected' : 'icon'} onClick={() => setPanel(2)}>
                <MdOutlineTextFields size={30} />
            </button>
            <button className={panel == 3 ? 'selected' : 'icon'} onClick={() => setPanel(3)}>
                <BsImage size={30} />
            </button>
            <button className={panel == 4 ? 'selected' : 'icon'} onClick={() => setPanel(4)}>
                <FaPaintRoller size={30} />
            </button>
            <button className={panel == 5 ? 'selected' : 'icon'} onClick={() => setPanel(5)}>
                <FaCube size={30} />
            </button>
            <button className={panel == 6 ? 'selected' : 'icon'} onClick={() => setPanel(6)}>
                <SiThreedotjs size={30} />
            </button>
            <button className={panel == 7 ? 'selected' : 'icon'} onClick={() => setPanel(7)}>
                <TbTextResize size={30} />
            </button>
        </div>
    );
};
