import ConfigGenerator from './config_generator';
import './Header.css';

export const Header = () => {
    function handleGenerate() {
        const config = ConfigGenerator();
        console.log(config);
    }
    return (
        <div className="header">
            <h2 className="title">Experience Generator</h2>
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
};
