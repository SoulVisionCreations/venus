import { animated } from '@react-spring/three';
import { Html } from '@react-three/drei';
import { TextTypes } from '../types/enums';
import { TextProps } from '../types/types';
import { useScrollAnimation } from '../utils/Animations/scrollAnimation';
import { useSpringAnimation } from '../utils/Animations/springAnimations';
import { SceneProps } from './Scene';

const AnimatedHtml = animated(Html);

const renderList = (list: string[]) => {
    return list.map((item: string, i: number) => {
        return <li key={i}>{item}</li>;
    });
};

const Text = ({ textProps, sceneProps }: { textProps: TextProps; sceneProps: SceneProps }) => {
    const [spring, api] = useSpringAnimation(textProps, sceneProps);
    useScrollAnimation(textProps, sceneProps, api);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, position, rotation, scale, ...props } = textProps;
    switch (type) {
        case TextTypes.List:
            return (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <AnimatedHtml transform scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props}>
                    <b>{textProps.title}</b>
                    {textProps.list && (textProps.numbered ? <ol> {renderList(textProps.list)} </ol> : <ul> {renderList(textProps.list)} </ul>)}
                </AnimatedHtml>
            );
        case TextTypes.Paragraph:
            return (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <AnimatedHtml transform scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props}>
                    {textProps.text}
                </AnimatedHtml>
            );
        default:
            return null;
    }
};

export default Text;
