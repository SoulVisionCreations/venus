import { AdaptiveDpr, Environment, PerformanceMonitor, Stats } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { downloadAssets, getAssetbyId } from "../Utils/download.js";
import AvataarLoader from "./AvataarLoader/avataarloader.js";
import Camera from "./Camera/camera.js";
import Scene from "./Scene/Scene.js";

export default function CanvasContainer(props) {

  const GetInfo = () => {
    const { gl } = useThree();
    useEffect(() => {
      console.log(gl.info);
    });
    return null;
  };
  
  const canvasContainerRef = useRef();
  const [isSceneVisible, setIsSceneVisibile] = useState(false);
  const [isSceneCompletelyVisible, setIsSceneCompletelyVisible] = useState(false);
  const [sceneCompletelyVisibleCount, setSceneCompletelyVisibleCount] = useState(0);
  const [sceneVisibleCount, setSceneVisibleCount] = useState(0);
  const visiblityObserver = useRef();

  useEffect(()=>{
      const intersectionCallback = (entries) => {
          const [ entry ] = entries;
          setIsSceneCompletelyVisible(entry.intersectionRatio >= 0.95);
          setSceneCompletelyVisibleCount(count => entry.intersectionRatio >= 0.95 ? count + 1 : count);
        //   setSceneVisibleCount(count => entry.intersectionRatio > 0 ? count + 1: 0);
          setIsSceneVisibile(entry.intersectionRatio > 0);
      }
      if(canvasContainerRef.current) {
        visiblityObserver.current = new IntersectionObserver(intersectionCallback, {threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.95, 0.96, 0.97, 0.98, 0.99, 1]});
        visiblityObserver.current.observe(canvasContainerRef.current);
      }
      return () => {
        if(canvasContainerRef.current) visiblityObserver.current.unobserve(canvasContainerRef.current);
      }
  }, [canvasContainerRef.current]);

  const [objectLoadTriggered, setObjectLoadTriggered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isSceneVisible && !objectLoadTriggered) {
      setObjectLoadTriggered(true);
      downloadAssets(props.assets)
        .then(() => { setLoading(false) })
        .catch((err) => console.log("error", err));
    }
  }, [isSceneVisible]);

  const sceneProps = {
      isSceneVisible: isSceneVisible,
      isSceneCompletelyVisible: isSceneCompletelyVisible,
      sceneCompletelyVisibleCount: sceneCompletelyVisibleCount,
      setSceneCompletelyVisibleCount: setSceneCompletelyVisibleCount
  };

  return (
    <div 
        ref={canvasContainerRef}
        className={props.className}
        style={props.style}
        id={props.id}
    >
      <Canvas frameloop="demand">
        {loading ? (
          <AvataarLoader center={true} />
        ) : (
          <>
            <GetInfo />
            <AdaptiveDpr pixelated />
            <Stats />
            <PerformanceMonitor />
            <Camera {...props.camera} />
            <Scene
              objects={props.objects}
              sceneControl={props.sceneControl}
              texts={props.texts}
              images={props.images}
              lights={props.lights}
              sceneProps={sceneProps}
            />
            <Environment files={props.environment.path} />
          </>
        )}
      </Canvas>
    </div>
  );
}
