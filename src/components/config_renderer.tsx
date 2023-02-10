import { useEffect } from 'react';
import { invalidate } from '@react-three/fiber';
import { Alignment, ComponentTypes } from '../types/enums';
import { downloadAssets } from '../utils/download';
import { ContainerNodeProps } from '../types/types';
import CanvasNode from './CanvasNode';

type ConfigProps = {
    config: ContainerNodeProps;
};

export default function ConfigRenderer({ config }: ConfigProps) {
    const renderConfig = () => {
        return config.children.map((child: any, index: number) => {
            if (child.type == ComponentTypes.Container) {
                return <ConfigRenderer config={child} key={index} />;
            }
            return <CanvasNode {...child} key={index} />;
        });
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            invalidate();
        });
        config.assets &&
            setTimeout(() => {
                downloadAssets(config.assets);
            });
    }, [config]);

    const alignmentClassName: string = config.alignment == Alignment.Vertical ? 'flexColumn' : 'flexRow';

    return (
        <div className={`${config.className} ${alignmentClassName}`} style={config.style}>
            {renderConfig()}
        </div>
    );
}
