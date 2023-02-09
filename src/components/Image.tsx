import { Html } from '@react-three/drei';
import { ImageProps } from '../types/types';
import { ImageTypes } from '../types/enums';
import { htmlDefaults } from '../constants/defaults';
import { getAssetbyId } from '../utils/download';
import { arrayToVec3, arrayToEuler } from '../utils/utility';
import './Image.css';

const renderImage = ({ type, ...props }: any) => {
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

const Image = ({ type, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }: ImageProps) => {
    const src: string = getAssetbyId(props.assetId);
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: scale * htmlDefaults.scale };
    return (
        <Html transform {...props} {...prs}>
            {renderImage({ type, ...props, src })}
        </Html>
    );
};

export default Image;
