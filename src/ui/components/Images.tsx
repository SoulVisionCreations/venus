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

    const addImage = async () => {
        const image = new Image();
        image.src = file[0].name;
        image.onload = function () {
            const scaleRatio = [((scale as number[])[0] * image.width) / image.height, (scale as number[])[1] * 1, (scale as number[])[2] * 1];
            addImages({ assetId: '', file: file, position: position, rotation: rotation, scale: scaleRatio, src: file[0].name });
            setAdd(false);
            resetImage();
        };
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
                    <button onClick={() => addImage()}>Add</button>
                </>
            )}
        </>
    );
};

export default Images;
