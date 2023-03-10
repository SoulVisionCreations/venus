import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { TextTypes } from '../../types/enums';
import Select from './Select/Select';
import useTextStore from '../store/Texts/textStore';
import useTextsStore from '../store/Texts/textsStore';
import ObjectArray from './ObjectArray/ObjectArray';
import Animations from './Animations/Animations';
import useAnimationStore from '../store/Animations/animationStore';

const Texts = () => {
    const [add, setAdd] = useState(false);
    const [showAnimation, setShowAnimation] = useAnimationStore((s) => [s.showAnimation, s.setShowAnimation]);
    const [texts, addTexts, removeTexts] = useTextsStore((s) => [s.texts, s.addTexts, s.removeTexts]);
    const [type, title, data, color, position, rotation, scale, animations, setType, setTitle, setData, setColor, setPosition, setRotation, setScale, removeAnimations, resetText] = useTextStore(
        (s) => [
            s.type,
            s.title,
            s.data,
            s.color,
            s.position,
            s.rotation,
            s.scale,
            s.animations,
            s.setType,
            s.setTitle,
            s.setData,
            s.setColor,
            s.setPosition,
            s.setRotation,
            s.setScale,
            s.removeAnimations,
            s.resetText,
        ]
    );

    const handleTextTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleDataChange = (event: any) => {
        setData(event.target.value);
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
        addTexts({ type: type, data: data, color: color, position: position, rotation: rotation, scale: scale });
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
                    <p>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" name="title" onChange={handleTitleChange} value={title} />
                    </p>
                    {type === TextTypes.Paragraph && (
                        <p>
                            <label htmlFor="data">Data: </label>
                            <textarea id="data" name="data" rows={3} onChange={handleDataChange} value={data} />
                        </p>
                    )}
                    <p>
                        <label htmlFor="color">Color: </label>
                        <input type="color" id="color" name="color" onChange={handleColorChange} value={color} />
                    </p>
                    <p>
                        Position:
                        <input type="number" id="posx" value={(position as number[])[0]} onChange={(event) => handlePositionChange(event, 'x')} />
                        <input type="number" id="posy" value={(position as number[])[1]} onChange={(event) => handlePositionChange(event, 'y')} />
                        <input type="number" id="posz" value={(position as number[])[2]} onChange={(event) => handlePositionChange(event, 'z')} />
                    </p>
                    <p>
                        Rotation:
                        <input type="number" id="rotx" value={(rotation as number[])[0]} onChange={(event) => handleRotationChange(event, 'x')} />
                        <input type="number" id="roty" value={(rotation as number[])[1]} onChange={(event) => handleRotationChange(event, 'y')} />
                        <input type="number" id="rotz" value={(rotation as number[])[2]} onChange={(event) => handleRotationChange(event, 'z')} />
                    </p>
                    <p>
                        Scale:
                        <input type="number" id="sclx" value={(scale as number[])[0]} onChange={(event) => handleScaleChange(event, 'x')} />
                        <input type="number" id="scly" value={(scale as number[])[1]} onChange={(event) => handleScaleChange(event, 'y')} />
                        <input type="number" id="sclz" value={(scale as number[])[2]} onChange={(event) => handleScaleChange(event, 'z')} />
                    </p>
                    <ObjectArray array={animations} title="Animation" removeElement={removeAnimations} />
                    <button className="add-more-button" onClick={() => setShowAnimation(true)}>
                        Add More Animations
                        <IoMdAddCircle size={20} />
                    </button>
                    {showAnimation && <Animations />}
                    <button onClick={() => addText()}>Add Text</button>
                </>
            )}
        </>
    );
};

export default Texts;
