import { Html } from '@react-three/drei';
import { htmlDefaults } from '../constants/defaults';
import { HtmlTemplateTypes } from '../types/enums';
import { HtmlTemplateProps } from '../types/types';
import { arrayToEuler, arrayToVec3 } from '../utils/utility';

const HtmlTemplateLoader = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }: HtmlTemplateProps) => {
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: scale * htmlDefaults.scale };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, titleStyle, dataStyle, divStyle } = props;
    switch (type) {
        case HtmlTemplateTypes.ParagraphBox:
            return (
                <Html {...prs}>
                    <div style={divStyle}>
                        <p style={titleStyle}>{props.title}</p>
                        <p style={dataStyle}>{props.data}</p>
                    </div>
                </Html>
            );
        default:
            return null;
    }
};

export default HtmlTemplateLoader;
