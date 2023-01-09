import { Canvas } from "@react-three/fiber";
import { getCamera } from "./Components/Camera/camera.js";
import Scene from "./Components/Scene/scene.js";
import { Alignment, ComponentTypes } from "./Configs/types.js";

export default function App({ config }) {
  const renderConfig = () => {
    return config.children.map((child, index) => {
      if (child.type == ComponentTypes.Container) {
        return <App config={child} />;
      }
      return (
        <div className={child.className} key={index} style={child.style}>
          <Canvas>
            {getCamera({ type: child.camera.type, ...child.camera })}
            <Scene
              objects={child.objects}
              sceneControl={child.sceneControl}
              texts={child.texts}
              images={child.images}
              lights={child.lights}
            />
          </Canvas>
        </div>
      );
    });
  };

  const alignmentClassName =
    config.alignment == Alignment.Vertical ? "flexColumn" : "flexRow";
  return (
    <div
      className={`${config.className} ${alignmentClassName}`}
      style={config.style}
    >
      {renderConfig()}
    </div>
  );
}
