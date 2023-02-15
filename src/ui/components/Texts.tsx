import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { TextTypes } from '../../types/enums';
import Select from './Select/Select';
import useTextStore from '../store/Texts/textStore';
import useTextsStore from '../store/Texts/textsStore';
import ObjectArray from './ObjectArray/ObjectArray';

const Texts = () => {
    const [add, setAdd] = useState(false);
    const [texts, addTexts, removeTexts] = useTextsStore((s) => [s.texts, s.addTexts, s.removeTexts]);
    const [type, text, title, numbered, list, color, position, rotation, scale, setType, setText, setTitle, setNumbered, setList, setColor, setPosition, setRotation, setScale, resetText] =
        useTextStore((s) => [
            s.type,
            s.text,
            s.title,
            s.numbered,
            s.list,
            s.color,
            s.position,
            s.rotation,
            s.scale,
            s.setType,
            s.setText,
            s.setTitle,
            s.setNumbered,
            s.setList,
            s.setColor,
            s.setPosition,
            s.setRotation,
            s.setScale,
            s.resetText,
        ]);

    const handleTextTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleTextChange = (event: any) => {
        setText(event.target.value);
    };

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleNumberedChange = (event: any) => {
        setNumbered(event.target.checked);
    };

    const handleListChange = (event: any) => {
        setList(event.target.value);
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

    const addText = () => {
        if (type === TextTypes.Paragraph) addTexts({ type: type, text: text, color: color, position: position, rotation: rotation, scale: scale });
        else if (type === TextTypes.List) addTexts({ type: type, title: title, numbered: numbered, list: list, color: color, position: position, rotation: rotation, scale: scale });
        setAdd(false);
        resetText();
    };

    return (
        <>
            <ObjectArray array={texts} title="Text" removeElement={removeTexts} />
            <button className="add-more-button" onClick={() => setAdd(true)}>
                Add More <IoMdAddCircle size={28} />
            </button>
            {add && (
                <>
                    <p>
                        <Select title="Text Types" options={TextTypes} defaultValue={TextTypes[type]} onChange={handleTextTypeChange} />
                    </p>
                    {type === TextTypes.Paragraph && (
                        <p>
                            <label htmlFor="text">Text: </label>
                            <textarea id="text" name="text" rows={3} onChange={handleTextChange} value={text} />
                        </p>
                    )}
                    {type === TextTypes.List && (
                        <>
                            <p>
                                <label htmlFor="title">Title: </label>
                                <input type="text" id="title" name="title" onChange={handleTitleChange} value={title} />
                            </p>
                            <p>
                                <label htmlFor="numbered">Numbered List: </label>
                                <input name="numbered" id="numbered" onChange={handleNumberedChange} type="checkbox" checked={numbered} />
                            </p>
                            <p>
                                <label htmlFor="list">List: </label>
                                <input type="text" id="list" name="list" onChange={handleListChange} value={list} />
                            </p>
                        </>
                    )}
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
                    <button onClick={() => addText()}>Add</button>
                </>
            )}
        </>
    );
};

export default Texts;
