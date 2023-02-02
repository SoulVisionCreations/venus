import { AdaptiveDpr, PerformanceMonitor, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Camera from "./Camera/camera.js";
import Scene from "./Scene/Scene.js";

function getCoords(elem) { // crossbrowser version
  const box = elem.getBoundingClientRect();

  const body = document.body;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top  = box.top +  scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;
  const bottom = top + box.height;

  return { top: top, left: left, bottom: bottom };
}

export default function CanvasContainer(props) {
  const canvasContainerRef = useRef();
  const [isSceneVisible, setIsSceneVisibile] = useState(false);
  const [isSceneCompletelyVisible, setIsSceneCompletelyVisible] = useState(false);
  const visiblityObserver = useRef();
  const [canvasRect, setCanvasRect] = useState();

  useEffect(()=>{
      const intersectionCallback = (entries) => {
          const [ entry ] = entries;
          setIsSceneCompletelyVisible(entry.intersectionRatio >= 0.95);
          setIsSceneVisibile(entry.intersectionRatio > 0);
      }
      if(canvasContainerRef.current) {
        visiblityObserver.current = new IntersectionObserver(intersectionCallback, {threshold: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.93, 0.94, 0.95, 0.96, 0.97, 0.98, 0.99, 1]});
        visiblityObserver.current.observe(canvasContainerRef.current);

        const coords = getCoords(canvasContainerRef.current);
        setCanvasRect(coords);
      }
      return () => {
        if(canvasContainerRef.current) visiblityObserver.current.unobserve(canvasContainerRef.current);
      }
  }, [canvasContainerRef.current]);

  const sceneProps = {
      isSceneVisible: isSceneVisible,
      isSceneCompletelyVisible: isSceneCompletelyVisible,
      canvasRect: canvasRect,
      id: props.sceneId
  };

  return (
    <div 
        ref={canvasContainerRef}
        className={props.className}
        style={props.style}
        id={props.id}
    >
        <Canvas frameloop="demand">
            <AdaptiveDpr pixelated />
            <Stats />
            <PerformanceMonitor/>
            <Camera {...props.camera} />
            <color attach="background" args={[props.background]} />
            <Scene
                objects={props.objects}
                sceneControl={props.sceneControl}
                texts={props.texts}
                images={props.images}
                lights={props.lights}
                sceneProps={sceneProps}
            />
        </Canvas>
    </div>
  );
}
