import { Html } from '@react-three/drei';
import { htmlDefaults } from '../constants/defaults';
import { TextTypes } from '../types/enums';
import { TextProps } from '../types/types';
import { arrayToVec3, arrayToEuler } from '../utils/utility';

const renderList = (list: string[]) => {
    return list.map((item: string, i: number) => {
        return <li key={i}>{item}</li>;
    });
};

const Text = ({ type, position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, ...props }: TextProps) => {
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: scale * htmlDefaults.scale };
    switch (type) {
        case TextTypes.List:
            return (
                <Html transform {...props} {...prs}>
                    <b>{props.title}</b>
                    {props.list && (props.numbered ? <ol> {renderList(props.list)} </ol> : <ul> {renderList(props.list)} </ul>)}
                </Html>
            );
        case TextTypes.Paragraph:
            return (
                <Html transform {...props} {...prs}>
                    {' '}
                    {props.text}{' '}
                </Html>
            );
        default:
            return null;
    }
};

export default Text;
