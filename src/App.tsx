import './App.css';
import ConfigRenderer from './components/config_renderer';
import { LeftPanel } from './ui/LeftPanel';
import { RightPanel } from './ui/RightPanel';
import { Header } from './ui/Header';
import useConfigStore from './configStore';

export default function App() {
    const [config] = useConfigStore((s) => [s.config]);
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <LeftPanel />
                <ConfigRenderer config={config} />
                <RightPanel />
            </div>
        </div>
    );
}
