import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react';
import { SceneEffectsTypes } from '../Configs/types.js';
import { getCamera } from './Camera/camera.js';
import Scene from './Scene/Scene.js';

export default function CanvasContainer(props)
{
    const canvasContainerRef = useRef();
    const [completelyVisible, setCompletelyVisible] = useState(false);
    const [completelyVisibleCount, setCompletelyVisibleCount] = useState(0);
    const visiblityObserver = useRef();
    const createVisibilityObserver = props.effects != undefined && props.effects == SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible;

    useEffect(()=>{
        const intersectionCallback = (entries) => {
            const [ entry ] = entries;
            setCompletelyVisible(entry.intersectionRatio >= 0.95)
        }
        if(createVisibilityObserver) {
            visiblityObserver.current = new IntersectionObserver(intersectionCallback, {threshold: [0.95, 0.96, 0.97, 0.98, 0.99, 1]});
            visiblityObserver.current.observe(canvasContainerRef.current);
        }
        return () => {
            if(createVisibilityObserver) visiblityObserver.current.unobserve(canvasContainerRef.current);
        }
    }, [canvasContainerRef.current])
    
    return (
        <div ref={canvasContainerRef} className={props.className} style={props.style} id={props.id}>
            <Canvas>
                {getCamera({ type: props.camera.type, ...props.camera })}
                <Scene
                    objects={props.objects}
                    sceneControl={props.sceneControl}
                    texts={props.texts}
                    images={props.images}
                    lights={props.lights}
                    completelyVisible={completelyVisible} 
                    completelyVisibleCount={completelyVisibleCount} 
                    setCompletelyVisibleCount={setCompletelyVisibleCount}
                />
            </Canvas>
        </div>
    );
}