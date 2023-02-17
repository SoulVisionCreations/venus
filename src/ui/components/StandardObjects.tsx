import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ObjectArray from './ObjectArray/ObjectArray';
import { MaterialTypes, ObjectTypes, StandardGeometryTypes } from '../../types/enums';
import useStandardObjectsStore from '../store/StandardObjects/standardObjectsStore';
import useStandardObjectStore from '../store/StandardObjects/standardObjectStore';
import Select from './Select/Select';

const StandardObjects = () => {
    const [add, setAdd] = useState(false);
    const [standardObjects, addStandardObjects, removeStandardObjects] = useStandardObjectsStore((s) => [s.standardObjects, s.addStandardObjects, s.removeStandardObjects]);
    const [geometry, material, position, rotation, scale, setGeometryType, setMaterialType, setColor, setPosition, setRotation, setScale, resetObject] = useStandardObjectStore((s) => [
        s.geometry,
        s.material,
        s.position,
        s.rotation,
        s.scale,
        s.setGeometryType,
        s.setMaterialType,
        s.setColor,
        s.setPosition,
        s.setRotation,
        s.setScale,
        s.resetObject,
    ]);

    const handleColorChange = (event: any) => {
        setColor(event.target.value);
    };

    const handlePositionChange = (event: any, pos: string) => {
        setPosition(event.target.valueAsNumber, pos);
    };

    const handleRotationChange = (event: any, pos: string) => {
        setRotation(event.target.valueAsNumber, pos);
    };

    const handleScaleChange = (event: any, pos: string) => {
        setScale(event.target.valueAsNumber, pos);
    };

    const handleGeometryTypeChange = (event: any) => {
        setGeometryType(Number(event.target.value));
    };

    const handleMaterialTypeChange = (event: any) => {
        setMaterialType(Number(event.target.value));
    };

    const addStandardObject = () => {
        addStandardObjects({ geometry, material, position, rotation, scale, type: ObjectTypes.StandardObject });
        setAdd(false);
        resetObject();
    };

    return (
        <>
            <ObjectArray array={standardObjects} title="Standard Objects" removeElement={removeStandardObjects} />
            <button className="add-more-button" onClick={() => setAdd(true)}>
                Add More <IoMdAddCircle size={28} />
            </button>
            {add && (
                <>
                    <p>
                        <Select title="Geometry Type" options={StandardGeometryTypes} defaultValue={StandardGeometryTypes[geometry.type]} onChange={handleGeometryTypeChange} />
                    </p>
                    <p>
                        <Select title="Material Type" options={MaterialTypes} defaultValue={MaterialTypes[material.type]} onChange={handleMaterialTypeChange} />
                    </p>
                    <p>
                        <label htmlFor="color">Color: </label>
                        <input type="color" id="color" name="color" onChange={handleColorChange} value={material.color} />
                    </p>
                    <p>
                        Position:
                        <input type="number" id="posx" value={position.x} onChange={(event) => handlePositionChange(event, 'x')} />
                        <input type="number" id="posy" value={position.y} onChange={(event) => handlePositionChange(event, 'y')} />
                        <input type="number" id="posz" value={position.z} onChange={(event) => handlePositionChange(event, 'z')} />
                    </p>
                    <p>
                        Rotation:
                        <input type="number" id="roty" value={rotation.y} onChange={(event) => handleRotationChange(event, 'y')} />
                        <input type="number" id="rotx" value={rotation.x} onChange={(event) => handleRotationChange(event, 'x')} />
                        <input type="number" id="rotz" value={rotation.z} onChange={(event) => handleRotationChange(event, 'z')} />
                    </p>
                    <p>
                        Scale:
                        <input type="number" id="scax" value={scale.x} onChange={(event) => handleScaleChange(event, 'x')} />
                        <input type="number" id="scay" value={scale.y} onChange={(event) => handleScaleChange(event, 'y')} />
                        <input type="number" id="scaz" value={scale.z} onChange={(event) => handleScaleChange(event, 'z')} />
                    </p>
                    <button onClick={() => addStandardObject()}>Add</button>
                </>
            )}
        </>
    );
};

export default StandardObjects;
