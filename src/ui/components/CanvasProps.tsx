import Accordion from './Accordion/Accordion';
import Camera from './Camera';
import Environment from './Environment';
import SceneControl from './SceneControl';

const CanvasProps = () => {
    return (
        <div>
            <Accordion title="Environment" defaultExpanded={true}>
                <Environment />
            </Accordion>
            <Accordion title="Camera" defaultExpanded={true}>
                <Camera />
            </Accordion>
            <Accordion title="SceneControl" defaultExpanded={true}>
                <SceneControl />
            </Accordion>
        </div>
    );
};

export default CanvasProps;
