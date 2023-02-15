import { AdaptiveDpr, Environment, PerformanceMonitor, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { CanvasNodeProps } from '../types/types';
import { getAssetbyId } from '../utils/download';
import AvataarLoader from './AvataarLoader';
import Scene from './Scene';
import '../static/css/style.css';
import Camera from './Camera';

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

export default function CanvasNode(props: CanvasNodeProps) {
    const GetInfo = () => {
        // const { gl } = useThree();
        // useEffect(() => {
        //     console.log(gl.info);
        // });
        return null;
    };

    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const [isSceneVisible, setIsSceneVisibile] = useState(false);
    const [isSceneCompletelyVisible, setIsSceneCompletelyVisible] = useState(false);
    const visiblityObserver = useRef<IntersectionObserver | null>();
    const [canvasRect, setCanvasRect] = useState<CanvasRect>({
        top: 0,
        bottom: 0,
        left: 0,
    });

    useEffect(() => {
        const intersectionCallback = (entries: Array<any>) => {
            const [entry] = entries;
            setIsSceneCompletelyVisible(entry.intersectionRatio >= 0.95);
            setIsSceneVisibile(entry.intersectionRatio > 0);
        };
        if (canvasContainerRef.current) {
            visiblityObserver.current = new IntersectionObserver(intersectionCallback, {
                threshold: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1],
            });
            visiblityObserver.current.observe(canvasContainerRef.current);

            const coords = getCoords(canvasContainerRef.current);
            setCanvasRect(coords);
        }
        return () => {
            if (canvasContainerRef.current) visiblityObserver.current?.unobserve(canvasContainerRef.current);
        };
    }, [canvasContainerRef.current]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            let allDownloaded = true;
            props.assetIds &&
                props.assetIds.forEach((assetId) => {
                    if (getAssetbyId(assetId) == 'downloading') allDownloaded = false;
                });
            if (allDownloaded) {
                setLoading(false);
                clearInterval(interval);
            }
        }, 100);
    }, []);

    const sceneProps = {
        isSceneVisible: isSceneVisible,
        isSceneCompletelyVisible: isSceneCompletelyVisible,
        canvasRect: canvasRect,
    };

    return (
        <div ref={canvasContainerRef} className={props.className ? props.className : ''} style={props.style} id={props.id}>
            <Canvas frameloop="demand">
                {loading ? (
                    <AvataarLoader center={true} />
                ) : (
                    <>
                        <GetInfo />
                        <AdaptiveDpr pixelated />
                        <Stats />
                        <PerformanceMonitor />
                        {props.camera && <Camera {...props.camera} />}
                        <Scene objects={props.objects} sceneControl={props.sceneControl} texts={props.texts} images={props.images} lights={props.lights} sceneProps={sceneProps} />
                        {props.environment && <Environment {...props.environment} />}
                    </>
                )}
            </Canvas>
        </div>
    );
}
