import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { LightTypes } from '../../types/enums';
import Select from './Select/Select';

const Lights = () => {
    const [addLight, setAddLight] = useState(false);
    const handleClick = (s: boolean) => {
        setAddLight(s);
    };

    return (
        <div>
            <p>Add Lights to your scene</p>
            <button onClick={() => handleClick(true)}>
                <IoMdAddCircle size={35} />
            </button>
            {addLight && (
                <>
                    <p>
                        <Select options={LightTypes} title="Lights" />
                    </p>
                    <p>
                        Position:
                        <input type="number" id="posx" value={0} />
                        <input type="number" id="posy" value={0} />
                        <input type="number" id="posz" value={0} />
                    </p>
                    <button onClick={() => handleClick(false)}>Save</button>
                </>
            )}
        </div>
    );
};

export default Lights;
