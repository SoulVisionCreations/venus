import { Html } from '@react-three/drei';
import { htmlDefaults } from '../constants/defaults';
import { HtmlTemplateTypes } from '../types/enums';
import { HtmlTemplateProps } from '../types/types';
import { arrayToEuler, arrayToVec3 } from '../utils/utility';

const renderData = (data: string | string[], type: HtmlTemplateTypes) => {
    switch (type) {
        case HtmlTemplateTypes.ParagraphBox:
            return data as string;
        case HtmlTemplateTypes.NumberedListBox:
            return (
                <ol>
                    {(data as string[]).map((item: string, i: number) => {
                        return <li key={i}> {item} </li>;
                    })}
                </ol>
            );
        case HtmlTemplateTypes.BulletedListBox:
            return (
                <ul>
                    {(data as string[]).map((item: string, i: number) => {
                        return <li key={i}> {item} </li>;
                    })}
                </ul>
            );
        default:
            return null;
    }
};

const HtmlTemplateLoader = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }: HtmlTemplateProps) => {
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: scale * htmlDefaults.scale };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { titleStyle, dataStyle, boxStyle } = props;
    return (
        <Html center {...prs}>
            <div style={boxStyle}>
                <p style={titleStyle}>{props.title}</p>
                <p style={dataStyle}>{renderData(props.data, props.type)}</p>
            </div>
        </Html>
    );
};

export default HtmlTemplateLoader;
