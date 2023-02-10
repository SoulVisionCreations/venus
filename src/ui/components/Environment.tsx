export enum EncodingTypes {
    LinearEncoding,
    sRGBEncoding,
    BasicDepthPacking,
    RGBADepthPacking,
}

const Environment = () => {
    return (
        <>
            <p>Upload Files: </p>
            <p>
                <label htmlFor="background">Apply as Background: </label>
                <input name="background" id="background" type="checkbox" />
            </p>
            <p>
                <label htmlFor="encoding">Choose Encoding: </label>
                <select name="encoding" id="encoding">
                    {Object.keys(EncodingTypes)
                        .filter((v) => isNaN(Number(v)))
                        .map((encoding: string, index: number) => {
                            return (
                                <option value={encoding} key={index}>
                                    {encoding}
                                </option>
                            );
                        })}
                </select>
            </p>
        </>
    );
};

export default Environment;
