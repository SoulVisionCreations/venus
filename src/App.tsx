import { useEffect, useState } from 'react';
import { invalidate } from '@react-three/fiber';
import { Alignment, ComponentTypes } from './types/enums';
import { downloadAssets } from './utils/download';
import { ContainerNodeProps } from './types/types';
import CanvasNode from './components/CanvasNode';
import AvataarLoader from './components/AvataarLoader/AvataarLoader';
import './static/css/style.css';

type AppProps = {
    config: ContainerNodeProps;
};

export default function App({ config }: AppProps) {
    const renderConfig = () => {
        return config.children.map((child: any, index: number) => {
            if (child.type == ComponentTypes.Container) {
                return <App config={child} key={index} />;
            }
            return <CanvasNode {...child} key={index} />;
        });
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener('resize', () => {
            invalidate();
        });
        if (config.assets) downloadAssets(config.assets).then(() => setLoading(false));
        else setLoading(false);
    }, [config]);

    const alignmentClassName: string = config.alignment == Alignment.Vertical ? 'flexColumn' : 'flexRow';

    return (
        <div className={`${config.className ? config.className : ''} ${alignmentClassName}`} style={config.style}>
            {loading ? <AvataarLoader /> : renderConfig()}
        </div>
    );
}
