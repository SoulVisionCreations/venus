import { Html } from '@react-three/drei';
import { htmlDefaults } from '../../Constants/defaults';
import { TextTypes } from '../../types/enums';
import { TextProps } from '../../types/types';

const renderList = (list: string[]): JSX.Element[] => {
    return list.map((item: string, i: number): JSX.Element => {
        return <li key={i}>{item}</li>;
    });
};

const Text = ({ type, ...props }: TextProps): JSX.Element | null => {
    const scale: number = props.scale ? props.scale * htmlDefaults.scale : htmlDefaults.scale;
    switch (type) {
        case TextTypes.List:
            return (
                <Html transform {...props} scale={scale}>
                    {props.title}
                    {props.list && (props.numbered ? <ol> {renderList(props.list)} </ol> : <ul> {renderList(props.list)} </ul>)}
                </Html>
            );
        case TextTypes.Paragraph:
            return (
                <Html transform {...props} scale={scale}>
                    {props.text}
                </Html>
            );
        default:
            return null;
    }
};

export default Text;
