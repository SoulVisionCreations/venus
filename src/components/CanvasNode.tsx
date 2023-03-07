import { AdaptiveDpr, Environment, PerformanceMonitor, Stats } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState, Dispatch, SetStateAction } from 'react';
import { CanvasNodeProps } from '../types/types';
import Scene from './Scene';
import '../static/css/style.css';
import Camera from './Camera';
import Dimensions from './Dimensions';
import { checkIsSceneInMiddleOfScreen } from '../utils/Animations/useAnimation';

export type CanvasRect = {
    top: number;
    left: number;
    bottom: number;
};

function getCoords(elem: HTMLElement): CanvasRect {
    // crossbrowser version
    const box = elem.getBoundingClientRect();

    const body = document.body;
    const docEl = document.documentElement;

    const scrollTop: number = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft: number = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop: number = docEl.clientTop || body.clientTop || 0;
    const clientLeft: number = docEl.clientLeft || body.clientLeft || 0;

    const top: number = box.top + scrollTop - clientTop;
    const left: number = box.left + scrollLeft - clientLeft;
    const bottom: number = top + box.height;

    return { top: top, left: left, bottom: bottom };
}

export type SceneProps = {
    isSceneVisible: boolean;
    canvasRect: CanvasRect;
    updateScrollAnimationCount: Dispatch<SetStateAction<number>>;
    udpateCompletedForwardScrollAnimationCount: Dispatch<SetStateAction<number>>;
    udpateCompletedBackwardScrollAnimationCount: Dispatch<SetStateAction<number>>;
    disablePageScrollForScrollAnimation: boolean;
};

export default function CanvasNode(props: CanvasNodeProps) {
    const GetInfo = () => {
        const { gl, camera } = useThree();
        useEffect(() => {
            console.log(gl.info, camera);
        });
        return null;
    };

    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const [isSceneVisible, setIsSceneVisibile] = useState(false);
    const visiblityObserver = useRef<IntersectionObserver | null>();
    const [canvasRect, setCanvasRect] = useState<CanvasRect>({
        top: 0,
        bottom: 0,
        left: 0,
    });
    const [scrollAnimationCount, updateScrollAnimationCount] = useState(0);
    const [completedForwardScrollAnimationCount, udpateCompletedForwardScrollAnimationCount] = useState(0);
    const [completedBackwardScrollAnimationCount, udpateCompletedBackwardScrollAnimationCount] = useState(0);

    const sceneProps: SceneProps = {
        isSceneVisible: isSceneVisible,
        canvasRect: canvasRect,
        updateScrollAnimationCount: updateScrollAnimationCount,
        udpateCompletedForwardScrollAnimationCount: udpateCompletedForwardScrollAnimationCount,
        udpateCompletedBackwardScrollAnimationCount: udpateCompletedBackwardScrollAnimationCount,
        disablePageScrollForScrollAnimation: props.disablePageScrollForScrollAnimation ?? false,
    };

    const handlePageScrollDisablingForScrollAnimation = (e: any) => {
        if (checkIsSceneInMiddleOfScreen(sceneProps)) {
            const forwardAnimationCompleted = e.deltaY > 0 && completedForwardScrollAnimationCount >= scrollAnimationCount;
            const backwardAnimationCompleted = e.deltaY < 0 && completedBackwardScrollAnimationCount >= scrollAnimationCount;
            const animationCompleted = forwardAnimationCompleted || backwardAnimationCompleted;
            if (animationCompleted) document.body.style.overflow = 'auto';
            else {
                const sceneHeight = canvasRect.bottom - canvasRect.top;
                const scrollDistToPositionSceneInMiddleOfScreen = canvasRect.top - (window.innerHeight / 2 - sceneHeight / 2);
                if (window.pageYOffset != scrollDistToPositionSceneInMiddleOfScreen) window.scrollTo({ top: scrollDistToPositionSceneInMiddleOfScreen });
                document.body.style.overflow = 'hidden';
            }
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        if (isSceneVisible && props.disablePageScrollForScrollAnimation && canvasContainerRef.current) {
            window && window.addEventListener('wheel', handlePageScrollDisablingForScrollAnimation);
        }
        return () => {
            window && window.removeEventListener('wheel', handlePageScrollDisablingForScrollAnimation);
        };
    }, [canvasContainerRef.current, completedForwardScrollAnimationCount, completedBackwardScrollAnimationCount, scrollAnimationCount, isSceneVisible, canvasRect]);

    useEffect(() => {
        const intersectionCallback = (entries: Array<any>) => {
            const [entry] = entries;
            setIsSceneVisibile(entry.intersectionRatio > 0.04);
        };
        if (canvasContainerRef.current) {
            visiblityObserver.current = new IntersectionObserver(intersectionCallback, {
                threshold: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.2],
            });
            visiblityObserver.current.observe(canvasContainerRef.current);

            const coords = getCoords(canvasContainerRef.current);
            setCanvasRect(coords);
        }
        return () => {
            if (canvasContainerRef.current) visiblityObserver.current?.unobserve(canvasContainerRef.current);
        };
    }, [canvasContainerRef.current]);

    return (
        <div ref={canvasContainerRef} className={props.className ? props.className : ''} style={props.style} id={props.id}>
            <Canvas frameloop="demand">
                <GetInfo />
                {props.showDimensions && <Dimensions camera={props.camera ? props.camera : undefined} />}
                <AdaptiveDpr pixelated />
                <Stats />
                <PerformanceMonitor />
                {props.camera && <Camera {...props.camera} />}
                <Scene
                    objects={props.objects}
                    sceneControl={props.sceneControl}
                    texts={props.texts}
                    images={props.images}
                    lights={props.lights}
                    htmlTemplates={props.htmlTemplates}
                    sceneProps={sceneProps}
                />
                {props.environment && props.environment.files.length > 0 && <Environment {...props.environment} />}
            </Canvas>
        </div>
    );
}

// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     const interval = setInterval(() => {
//         let allDownloaded = true;
//         props.assetIds &&
//             props.assetIds.forEach((assetId) => {
//                 if (getAssetbyId(assetId) == 'downloading') allDownloaded = false;
//             });
//         if (allDownloaded) {
//             setLoading(false);
//             clearInterval(interval);
//         }
//     }, 100);
// }, []);
