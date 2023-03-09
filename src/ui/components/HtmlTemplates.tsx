import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { HtmlTemplateTypes } from '../../types/enums';
import Select from './Select/Select';
import ObjectArray from './ObjectArray/ObjectArray';
import useHtmlTemplatesStore from '../store/HtmlTemplates/htmlTemplatesStore';
import useHtmlTemplateStore from '../store/HtmlTemplates/htmlTemplateStore';

const HtmlTemplates = () => {
    const [add, setAdd] = useState(false);
    const [htmlTemplates, addHtmlTemplates, removeHtmlTemplates] = useHtmlTemplatesStore((s) => [s.htmlTemplates, s.addHtmlTemplates, s.removeHtmlTemplates]);
    const [
        type,
        title,
        data,
        titleStyle,
        dataStyle,
        boxStyle,
        position,
        rotation,
        scale,
        setType,
        setTitle,
        setData,
        setTitleStyle,
        setDataStyle,
        setBoxStyle,
        setPosition,
        setRotation,
        // setScale,
        resetHtmlTemplate,
    ] = useHtmlTemplateStore((s) => [
        s.type,
        s.title,
        s.data,
        s.titleStyle,
        s.dataStyle,
        s.boxStyle,
        s.position,
        s.rotation,
        s.scale,
        s.setType,
        s.setTitle,
        s.setData,
        s.setTitleStyle,
        s.setDataStyle,
        s.setBoxStyle,
        s.setPosition,
        s.setRotation,
        // s.setScale,
        s.resetHtmlTemplate,
    ]);

    const handleHtmlTemplateTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleDataChange = (event: any) => {
        setData(event.target.value);
    };

    const handleTitleChange = (event: any) => {
        setTitle(event.target.value);
    };

    const handleTitleStyleChange = (event: any) => {
        setTitleStyle(event.target.value);
    };

    const handleDataStyleChange = (event: any) => {
        setDataStyle(event.target.value);
    };

    const handleBoxStyleChange = (event: any) => {
        setBoxStyle(event.target.value);
    };

    const handlePositionChange = (event: any, pos: string) => {
        setPosition(event.target.valueAsNumber, pos);
    };

    const handleRotationChange = (event: any, pos: string) => {
        setRotation(event.target.valueAsNumber, pos);
    };

    // const handleScaleChange = (event: any, pos: string) => {
    //     setScale(event.target.valueAsNumber, pos);
    // };

    const addHtmlTemplate = () => {
        if (type === HtmlTemplateTypes.ParagraphBox)
            addHtmlTemplates({
                type: type,
                title: title,
                data: data,
                titleStyle: JSON.parse(titleStyle),
                dataStyle: JSON.parse(dataStyle),
                boxStyle: JSON.parse(boxStyle),
                position: position,
                rotation: rotation,
                scale: scale,
            });
        setAdd(false);
        resetHtmlTemplate();
    };

    return (
        <>
            <ObjectArray array={htmlTemplates} title="HtmlTemplates" removeElement={removeHtmlTemplates} />
            <button className="add-more-button" onClick={() => setAdd(true)}>
                Add More <IoMdAddCircle size={28} />
            </button>
            {add && (
                <>
                    <p>
                        <Select title="Html Template Types" options={HtmlTemplateTypes} defaultValue={HtmlTemplateTypes[type]} onChange={handleHtmlTemplateTypeChange} />
                    </p>
                    <p>
                        <label htmlFor="title">Title: </label>
                        <input type="text" id="title" name="title" onChange={handleTitleChange} value={title} />
                    </p>
                    {type === HtmlTemplateTypes.ParagraphBox && (
                        <p>
                            <label htmlFor="data">Data: </label>
                            <input type="text" id="data" name="data" onChange={handleDataChange} value={data} />
                        </p>
                    )}
                    <p>
                        <label htmlFor="titleStyle">Title Style: </label>
                        <textarea id="titleStyle" name="titleStyle" rows={3} onChange={handleTitleStyleChange} value={titleStyle} />
                    </p>
                    <p>
                        <label htmlFor="dataStyle">Data Style: </label>
                        <textarea id="dataStyle" rows={3} name="dataStyle" onChange={handleDataStyleChange} value={dataStyle} />
                    </p>
                    <p>
                        <label htmlFor="boxStyle">Box Style: </label>
                        <textarea id="boxStyle" rows={3} name="boxStyle" onChange={handleBoxStyleChange} value={boxStyle} />
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
                    {/* <p>
                        Scale:
                        <input type="number" id="sclx" value={scale[0]} onChange={(event) => handleScaleChange(event, 'x')} />
                        <input type="number" id="scly" value={scale[1]} onChange={(event) => handleScaleChange(event, 'y')} />
                        <input type="number" id="sclz" value={scale[2]} onChange={(event) => handleScaleChange(event, 'z')} />
                    </p> */}
                    <button onClick={() => addHtmlTemplate()}>Add</button>
                </>
            )}
        </>
    );
};

export default HtmlTemplates;
