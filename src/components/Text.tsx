import { animated } from '@react-spring/three';
import { Text } from '@react-three/drei';
import { TextTypes } from '../types/enums';
import { TextProps } from '../types/types';
import { useScrollAnimation } from '../utils/Animations/scrollAnimation';
import { useSpringAnimation } from '../utils/Animations/springAnimations';
import { SceneProps } from './Scene';

const AnimatedText = animated(Text);

const renderList = (list: string[], numbered?: boolean) => {
    if (numbered) {
        return list.map((item: string, i: number) => {
            return '\n' + (i + 1) + '. ' + item;
        });
    } else {
        return list.map((item: string) => {
            return '\n' + '- ' + item;
        });
    }
};

const TextLoader = ({ textProps, sceneProps }: { textProps: TextProps; sceneProps: SceneProps }) => {
    const [spring, api] = useSpringAnimation(textProps, sceneProps);
    useScrollAnimation(textProps, sceneProps, api);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, position, rotation, scale, animations, title, list, numbered, text, ...props } = textProps;
    switch (type) {
        case TextTypes.List:
            return (
                <AnimatedText scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props}>
                    {title + '\n'}
                    {list && renderList(list, numbered)}
                </AnimatedText>
            );
        case TextTypes.Paragraph:
            return (
                <AnimatedText scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation} {...props}>
                    {text}
                </AnimatedText>
            );
        default:
            return null;
    }
};

export default TextLoader;
