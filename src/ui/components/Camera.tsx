const Camera = () => {
    return (
        <>
            <p>(Persepctive Camera by default)</p>
            <p>
                <label htmlFor="fov">FOV: </label>
                <input type="number" id="fov" value={75} />
            </p>
            <p>
                <label htmlFor="near">Near: </label>
                <input type="number" id="near" value={0.1} />
            </p>
            <p>
                <label htmlFor="far">Far: </label>
                <input type="number" id="far" value={1000} />
            </p>
            <p>
                Position:
                <input type="number" id="farx" value={0} />
                <input type="number" id="fary" value={0} />
                <input type="number" id="farz" value={0} />
            </p>
            <p>
                <label htmlFor="orthographic">Orthographic: </label>
                <input name="orthographic" id="orthographic" type="checkbox" />
            </p>
        </>
    );
};

export default Camera;
