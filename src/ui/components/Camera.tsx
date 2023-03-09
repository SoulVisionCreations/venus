import { CameraTypes } from '../../types/enums';
import useCameraStore from '../store/cameraStore';
import Select from './Select/Select';

const Camera = () => {
    const [fov, near, far, position, type, setFov, setNear, setFar, setPosition, setType] = useCameraStore((s) => [
        s.fov,
        s.near,
        s.far,
        s.position,
        s.type,
        s.setFov,
        s.setNear,
        s.setFar,
        s.setPosition,
        s.setType,
    ]);

    const handleFovChange = (event: any) => {
        setFov(event.target.valueAsNumber);
    };

    const handleNearChange = (event: any) => {
        setNear(event.target.valueAsNumber);
    };

    const handleFarChange = (event: any) => {
        setFar(event.target.valueAsNumber);
    };

    const handlePositionChange = (event: any, pos: string) => {
        setPosition(event.target.valueAsNumber, pos);
    };

    const handleTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    return (
        <>
            <p>
                <Select title="Camera" options={CameraTypes} defaultValue={CameraTypes[type]} onChange={handleTypeChange} />
            </p>
            <p>
                <label htmlFor="fov">FOV: </label>
                <input type="number" id="fov" value={fov} onChange={handleFovChange} />
            </p>
            <p>
                <label htmlFor="near">Near: </label>
                <input type="number" id="near" value={near} onChange={handleNearChange} />
            </p>
            <p>
                <label htmlFor="far">Far: </label>
                <input type="number" id="far" value={far} onChange={handleFarChange} />
            </p>
            <p>
                Position:
                <input type="number" id="posx" value={position[0]} onChange={(event) => handlePositionChange(event, 'x')} />
                <input type="number" id="posy" value={position[1]} onChange={(event) => handlePositionChange(event, 'y')} />
                <input type="number" id="posz" value={position[2]} onChange={(event) => handlePositionChange(event, 'z')} />
            </p>
        </>
    );
};

export default Camera;
