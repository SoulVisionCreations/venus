import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { ImageTypes } from '../../types/enums';
import Select from './Select/Select';
import ObjectArray from './ObjectArray/ObjectArray';
import useImagesStore from '../store/Images/imagesStore';
import useImageStore from '../store/Images/imageStore';

const Images = () => {
    const [add, setAdd] = useState(false);
    const [images, addImages, removeImages] = useImagesStore((s) => [s.images, s.addImages, s.removeImages]);
    const [type, file, position, rotation, scale, setType, setFile, setPosition, setRotation, setScale, resetImage] = useImageStore((s) => [
        s.type,
        s.file,
        s.position,
        s.rotation,
        s.scale,
        s.setType,
        s.setFile,
        s.setPosition,
        s.setRotation,
        s.setScale,
        s.resetImage,
    ]);

    const handleTextTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleFileChange = (event: any) => {
        setFile(event.target.files);
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

    const addImage = () => {
        addImages({ type: type, file: file, position: position, rotation: rotation, scale: scale });
        setAdd(false);
        resetImage();
    };

    return (
        <>
            <ObjectArray array={images} title="Images" removeElement={removeImages} />
            <button onClick={() => setAdd(true)}>
                <IoMdAddCircle size={35} />
            </button>
            {add && (
                <>
                    <p>
                        <Select title="Image Shape Types" options={ImageTypes} defaultValue={ImageTypes[type]} onChange={handleTextTypeChange} />
                    </p>
                    <p className="row">
                        <label htmlFor="file">Upload File: </label>
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
                    <button onClick={() => addImage()}>Add</button>
                </>
            )}
        </>
    );
};

export default Images;
