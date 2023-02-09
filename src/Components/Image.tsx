import { Html } from '@react-three/drei';
import { ImageProps } from '../types/types';
import { ImageTypes } from '../types/enums';
import { htmlDefaults } from '../constants/defaults';
import { getAssetbyId } from '../utils/download';
import './image.css';

const renderImage = ({ type, ...props }: ImageProps) => {
    switch (type) {
        case ImageTypes.Rounded:
            return <img className="rounded" {...props} alt="load failed" />;
        case ImageTypes.Circle:
            return <img className="circle" {...props} alt="load failed" />;
        case ImageTypes.Square:
            return <img className="square" {...props} alt="load failed" />;
        case ImageTypes.Icon:
            return <img className="icon" {...props} alt="load failed" />;
        default:
            return <img alt="load failed" />;
    }
};

const Image = ({ type, ...props }: ImageProps) => {
    const scale: number = props.scale ? props.scale * htmlDefaults.scale : htmlDefaults.scale;
    const src: string = getAssetbyId(props.assetId);
    return (
        <Html transform {...props} scale={scale}>
            {renderImage({ type, ...props, src })}
        </Html>
    );
};

export default Image;
