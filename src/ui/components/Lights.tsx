import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { LightTypes } from '../../types/enums';
import useLightsStore from '../store/Lights/lightsStore';
import Select from './Select/Select';
import ObjectArray from './ObjectArray/ObjectArray';
import useLightStore from '../store/Lights/lightStore';

const Lights = () => {
    const [add, setAdd] = useState(false);
    const [lights, addLights, removeLights] = useLightsStore((s) => [s.lights, s.addLights, s.removeLights]);
    const [type, color, position, setType, setColor, setPosition, resetLight] = useLightStore((s) => [s.type, s.color, s.position, s.setType, s.setColor, s.setPosition, s.resetLight]);

    const handleLightTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleColorChange = (event: any) => {
        setColor(event.target.value);
    };

    const handlePositionChange = (event: any, pos: string) => {
        setPosition(event.target.valueAsNumber, pos);
    };

    const addLight = () => {
        addLights({ type: type, color: color, position: position });
        setAdd(false);
        resetLight();
    };

    return (
        <>
            <ObjectArray array={lights} title="Lights" removeElement={removeLights} />
            <button onClick={() => setAdd(true)}>
                <IoMdAddCircle size={35} />
            </button>
            {add && (
                <>
                    <p>
                        <Select title="Lights" options={LightTypes} defaultValue={LightTypes[type]} onChange={handleLightTypeChange} />
                    </p>
                    <p>
                        <label htmlFor="color">Color: </label>
                        <input type="color" id="color" name="color" onChange={handleColorChange} value={color} />
                    </p>
                    <p>
                        Position:
                        <input type="number" id="posx" value={position.x} onChange={(event) => handlePositionChange(event, 'x')} />
                        <input type="number" id="posy" value={position.y} onChange={(event) => handlePositionChange(event, 'y')} />
                        <input type="number" id="posz" value={position.z} onChange={(event) => handlePositionChange(event, 'z')} />
                    </p>
                    <button onClick={() => addLight()}>Add</button>
                </>
            )}
        </>
    );
};

export default Lights;
