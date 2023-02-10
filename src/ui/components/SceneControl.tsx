import { SceneControlTypes } from '../../types/enums';
import Select from './Select/Select';

const SceneControl = () => {
    return (
        <p>
            <Select options={SceneControlTypes} title="Scene Controls" />
        </p>
    );
};

export default SceneControl;
