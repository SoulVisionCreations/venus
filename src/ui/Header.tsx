import { ConfigStoreState } from '../configStore';
import ConfigGenerator from './config_generator';
import './Header.css';

export const Header = () => {
    function handleGenerate() {
        ConfigGenerator();
    }
    function handleDownload() {
        const { config } = ConfigStoreState();
        console.log(config);
    }
    return (
        <div className="header">
            <h2 className="title">Experience Generator</h2>
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};
