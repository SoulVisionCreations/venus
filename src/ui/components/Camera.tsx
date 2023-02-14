import useCameraStore from '../store/cameraStore';

const Camera = () => {
    const [fov, near, far, position, orthographic, setFov, setNear, setFar, setPosition, setOrthographic] = useCameraStore((s) => [
        s.fov,
        s.near,
        s.far,
        s.position,
        s.orthographic,
        s.setFov,
        s.setNear,
        s.setFar,
        s.setPosition,
        s.setOrthographic,
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
        position[pos as keyof typeof position] = event.target.valueAsNumber;
        setPosition(position);
    };

    const handleOrthographicChange = (event: any) => {
        setOrthographic(event.target.checked);
    };

    return (
        <>
            <p>(Persepctive Camera by default)</p>
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
                <input type="number" id="posx" value={position.x} onChange={(event) => handlePositionChange(event, 'x')} />
                <input type="number" id="posy" value={position.y} onChange={(event) => handlePositionChange(event, 'y')} />
                <input type="number" id="posz" value={position.z} onChange={(event) => handlePositionChange(event, 'z')} />
            </p>
            <p>
                <label htmlFor="orthographic">Orthographic: </label>
                <input name="orthographic" id="orthographic" type="checkbox" checked={orthographic} onChange={handleOrthographicChange} />
            </p>
        </>
    );
};

export default Camera;
