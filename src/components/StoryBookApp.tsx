import { Canvas, useThree } from '@react-three/fiber';
import TextLoader from './Text';
import { HtmlTemplateProps, ImageProps, TextProps } from '../types/types';
import Orbit from '../utils/SceneControls/Orbit';
import ImageLoader from './Image';
import { useEffect } from 'react';
import HtmlTemplateLoader from './HtmlTemplate';

export default function StoryBookApp({ config, componentType }: { config: TextProps | ImageProps | HtmlTemplateProps; componentType: string }) {
    const sceneProps = {
        isSceneVisible: true,
        isSceneCompletelyVisible: true,
        canvasRect: {
            top: 0,
            bottom: 0,
            left: 0,
        },
    };
    const GetInfo = () => {
        const { scene } = useThree();
        useEffect(() => {
            console.log(scene);
        });
        return null;
    };
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Canvas camera={{ position: [0, 0, 2] }}>
                <GetInfo />
                <Orbit />
                {componentType == 'text' && <TextLoader textProps={config as TextProps} sceneProps={sceneProps} />}
                {componentType == 'image' && <ImageLoader imageProps={config as ImageProps} sceneProps={sceneProps} />}
                {componentType == 'htmltemplate' && <HtmlTemplateLoader {...(config as HtmlTemplateProps)} />}
            </Canvas>
        </div>
    );
}
