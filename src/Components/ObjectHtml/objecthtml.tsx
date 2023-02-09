import { Html } from '@react-three/drei';
import { ObjectHtmlProps } from '../../Types/object3DTypes';
import { ObjectHtmlTypes } from '../../Types/enums';
import { htmlDefaults } from '../../Constants/defaults';
import './objecthtml.css';

const ObjectHtml = ({ type, ...props }: ObjectHtmlProps): JSX.Element | null => {
    const scale: number = props.scale ? htmlDefaults.scale * props.scale : htmlDefaults.scale;
    switch (type) {
        case ObjectHtmlTypes.PriceTag:
            return (
                <Html transform {...props} scale={scale}>
                    <div className="annotation">{props.price}</div>
                </Html>
            );
        default:
            return null;
    }
};

export default ObjectHtml;
