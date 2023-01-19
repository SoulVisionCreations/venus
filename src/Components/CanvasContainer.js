import { Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { SceneEffectsTypes } from "../Configs/types.js";
import { getCamera } from "./Camera/camera.js";
import Scene from "./Scene/Scene.js";

export default function CanvasContainer(props) {
  const canvasContainerRef = useRef();
  const [isSceneVisible, setIsSceneVisibile] = useState(false);
  const [isSceneCompletelyVisible, setIsSceneCompletelyVisible] = useState(false);
  const [sceneCompletelyVisibleCount, setSceneCompletelyVisibleCount] = useState(0);
  const visiblityObserver = useRef();

  useEffect(()=>{
      const intersectionCallback = (entries) => {
          const [ entry ] = entries;
          setIsSceneCompletelyVisible(entry.intersectionRatio >= 0.95);
          setIsSceneVisibile(entry.intersectionRatio > 0);
      }
      visiblityObserver.current = new IntersectionObserver(intersectionCallback, {threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.95, 0.96, 0.97, 0.98, 0.99, 1]});
      visiblityObserver.current.observe(canvasContainerRef.current);
      return () => {
        visiblityObserver.current.unobserve(canvasContainerRef.current);
      }
  }, [canvasContainerRef.current]);

  const sceneProps = {
      isSceneVisible: isSceneVisible,
      isSceneCompletelyVisible: isSceneCompletelyVisible,
      sceneCompletelyVisibleCount: sceneCompletelyVisibleCount,
      setSceneCompletelyVisibleCount: setSceneCompletelyVisibleCount
  };

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
                  sceneProps={sceneProps}
              />
          </Canvas>
      </div>
  );
}
