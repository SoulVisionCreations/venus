import useEnvironmentStore from '../store/environmentStore';

const Environment = () => {
    const [files, background, setFiles, setBackground] = useEnvironmentStore((s) => [s.files, s.background, s.setFiles, s.setBackground]);

    const handleFileChange = (event: any) => {
        setFiles(event.target.files);
    };

    const handleBackgroundChange = (event: any) => {
        setBackground(event.target.checked);
    };

    // const handleEncodingChange = (event: any) => {
    //     setEncoding(Number(event.target.value));
    // };

    return (
        <>
            <p className="row">
                <label htmlFor="files">Upload Files: </label>
                <input type="file" id="files" name="files" onChange={handleFileChange} value={(files as any)?.name} multiple />
            </p>
            <p>
                <label htmlFor="background">Apply as Background: </label>
                <input name="background" id="background" onChange={handleBackgroundChange} type="checkbox" checked={background} />
            </p>
            {/* <p>
                <Select title="Encoding" options={EncodingTypes} defaultValue={EncodingTypes[encoding]} onChange={handleEncodingChange} />
            </p> */}
        </>
    );
};

export default Environment;
