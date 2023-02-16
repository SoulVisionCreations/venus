import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import ObjectArray from './ObjectArray/ObjectArray';
import useImagesStore from '../store/Images/imagesStore';
import useImageStore from '../store/Images/imageStore';

const Images = () => {
    const [add, setAdd] = useState(false);
    const [images, addImages, removeImages] = useImagesStore((s) => [s.images, s.addImages, s.removeImages]);
    const [file, position, rotation, scale, setFile, setPosition, setRotation, setScale, resetImage] = useImageStore((s) => [
        s.file,
        s.position,
        s.rotation,
        s.scale,
        s.setFile,
        s.setPosition,
        s.setRotation,
        s.setScale,
        s.resetImage,
    ]);

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
        addImages({ file: file, position: position, rotation: rotation, scale: scale });
        setAdd(false);
        resetImage();
    };

    return (
        <>
            <ObjectArray array={images} title="Image" removeElement={removeImages} />
            <button className="add-more-button" onClick={() => setAdd(true)}>
                Add More <IoMdAddCircle size={28} />
            </button>
            {add && (
                <>
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
