import { Html } from '@react-three/drei';
import { ObjectHtmlProps } from '../types/object3DTypes';
import { ObjectHtmlTypes } from '../types/enums';
import { htmlDefaults } from '../constants/defaults';
import { arrayToVec3, arrayToEuler } from '../utils/utility';
import './objecthtml.css';

const ObjectHtml = ({ type, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }: ObjectHtmlProps) => {
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: scale * htmlDefaults.scale };
    switch (type) {
        case ObjectHtmlTypes.PriceTag:
            return (
                <Html transform {...props} {...prs}>
                    <div className="annotation">{props.price}</div>
                </Html>
            );
        default:
            return null;
    }
};

export default ObjectHtml;
