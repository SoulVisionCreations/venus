import { Canvas } from '@react-three/fiber'
import { getCamera } from './Components/Camera/camera.js';
import Scene from './Components/Scene/Scene.js'
import { Alignment, ComponentTypes } from './Configs/types.js';

export default function App({config})
{
    const renderConfig = () => {
        return config.children.map((child, index) => {
          if(child.type == ComponentTypes.Container) {
            return (<App config={child} />)
          }
          return (
            <div className={child.className} key={index} style={child.style}>
                 <Canvas>
                    {getCamera(child.camera)}
                    <Scene implicitObjects={child.implicitObjects} htmls={child.htmls} control={child.sceneControl} />
                 </Canvas>
            </div>
          );
        });
    };

    const alignmentClassName = config.alignment == Alignment.Vertical ? "flexColumn" : "flexRow";
    return (
        <div className={`${config.className} ${alignmentClassName}` } style={config.style}>{renderConfig()}</div>
    );
}