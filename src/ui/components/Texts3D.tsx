import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ObjectArray from './ObjectArray/ObjectArray';
import useTexts3DStore from '../store/Texts3D/texts3DStore';
import useText3DStore from '../store/Texts3D/text3DStore';
import { ObjectTypes } from '../../types/enums';

const Texts3D = () => {
    const [add, setAdd] = useState(false);
    const [texts3D, addTexts3D, removeTexts3D] = useTexts3DStore((s) => [s.texts3D, s.addTexts3D, s.removeTexts3D]);
    const [file, text, color, position, rotation, scale, setFile, setText, setColor, setPosition, setRotation, setScale, resetText] = useText3DStore((s) => [
        s.file,
        s.text,
        s.color,
        s.position,
        s.rotation,
        s.scale,
        s.setFile,
        s.setText,
        s.setColor,
        s.setPosition,
        s.setRotation,
        s.setScale,
        s.resetText,
    ]);

    const handleFileChange = (event: any) => {
        setFile(event.target.files);
    };

    const handleTextChange = (event: any) => {
        setText(event.target.value);
    };

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

    const addText3D = () => {
        addTexts3D({ type: ObjectTypes.Text3D, text: text, color: color, position: position, rotation: rotation, scale: scale, file: file, font: file[0].name });
        setAdd(false);
        resetText();
    };

    return (
        <>
            <ObjectArray array={texts3D} title="Text" removeElement={removeTexts3D} />
            <button className="add-more-button" onClick={() => setAdd(true)}>
                Add More <IoMdAddCircle size={28} />
            </button>
            {add && (
                <>
                    <p>
                        <label htmlFor="text">Text: </label>
                        <textarea id="text" name="text" rows={2} onChange={handleTextChange} value={text} />
                    </p>
                    <p>
                        <label htmlFor="color">Color: </label>
                        <input type="color" id="color" name="color" onChange={handleColorChange} value={color} />
                    </p>
                    <p className="row">
                        <label htmlFor="file">Upload Font File: </label>
                        <input type="file" id="file" name="file" onChange={handleFileChange} value={file?.name} />
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
                    <button onClick={() => addText3D()}>Add</button>
                </>
            )}
        </>
    );
};

export default Texts3D;
