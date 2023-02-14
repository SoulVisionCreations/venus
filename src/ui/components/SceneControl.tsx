import { SceneControlTypes } from '../../types/enums';
import useSceneControlStore from '../store/sceneControlStore';
import Select from './Select/Select';

const SceneControl = () => {
    const [type, setType] = useSceneControlStore((s) => [s.type, s.setType]);

    const handleSceneControlChange = (event: any) => {
        setType(Number(event.target.value));
    };

    return (
        <p>
            <Select title="Scene Controls" options={SceneControlTypes} defaultValue={type} onChange={handleSceneControlChange} />
        </p>
    );
};

export default SceneControl;
