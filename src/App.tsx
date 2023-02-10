import './App.css';
import { textImageExample } from './configs/textImageExample';
import ConfigRenderer from './components/config_renderer';
import { LeftPanel } from './ui/LeftPanel';
import { RightPanel } from './ui/RightPanel';
import { Header } from './ui/Header';

export default function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <LeftPanel />
                <ConfigRenderer config={textImageExample} />
                <RightPanel />
            </div>
        </div>
    );
}
