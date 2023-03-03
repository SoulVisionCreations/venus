import { animated } from '@react-spring/three';
// import { Flex, Box } from '@react-three/flex';
import { Text } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Vector3 } from 'three';
import { TextTypes } from '../types/enums';
import { TextProps } from '../types/types';
import { useAnimation } from '../utils/Animations/useAnimation';
import { SceneProps } from './Scene';

// const AnimatedFlex = animated(Flex);
// const AnimatedBox = animated(Box);
const AnimatedText = animated(Text);

const renderData = (data: string | string[], type: TextTypes, numbered?: boolean) => {
    switch (type) {
        case TextTypes.Paragraph:
            return data as string;
        case TextTypes.List: {
            if (numbered) {
                return (data as string[]).map((item: string, i: number) => {
                    return i + 1 + '. ' + item + '\n';
                });
            } else {
                return (data as string[]).map((item: string) => {
                    return '- ' + item + '\n';
                });
            }
        }
    }
};

const TextLoader = ({ textProps, sceneProps }: { textProps: TextProps; sceneProps: SceneProps }) => {
    const spring = useRef(useAnimation(textProps, sceneProps));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { type, position, rotation, scale, animations, title, numbered, data, ...props } = textProps;
    const [count, setCount] = useState(0);
    // return (
    //         <AnimatedFlex flexDirection="row" flexWrap={'wrap'} scale={(spring as any).scale} position={(spring as any).position} rotation={(spring as any).rotation}>
    //             {title && <Box alignSelf={'flex-start'}>
    //                 <Text {...props}>
    //                     {title + '\n\n'}
    //                 </Text>
    //             </Box>}
    //             <Box>
    //                 <Text {...props}>
    //                     {renderData(data, type, numbered)}
    //                 </Text>
    //             </Box>
    //         </AnimatedFlex>
    // );
    // console.log('text', (spring as any).position, (spring as any).position[0]);
    // let vec;
    // if(position) vec = new Vector3(position[0], position[1], position[2]);
    useEffect(() => {
        setCount(count => count + 1);
    }, [textProps]);
    return (
        <AnimatedText scale={(spring as any).current.scale} position={(spring as any).current.position} rotation={(spring as any).current.rotation} {...props}>
            {title ? title + '\n\n' : ''}
            {renderData(data, type, numbered)}
        </AnimatedText>
    );
};

export default TextLoader;
