import Select from './Select/Select';

export enum EncodingTypes {
    LinearEncoding,
    sRGBEncoding,
    BasicDepthPacking,
    RGBADepthPacking,
}

const Environment = () => {
    return (
        <>
            <p className="row">
                <label htmlFor="files">Upload Files: </label>
                <input type="file" id="files" name="files" />
            </p>
            <p>
                <label htmlFor="background">Apply as Background: </label>
                <input name="background" id="background" type="checkbox" />
            </p>
            <p>
                <Select options={EncodingTypes} title="Encoding" />
            </p>
        </>
    );
};

export default Environment;
