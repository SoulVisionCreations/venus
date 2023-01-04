import { Canvas } from '@react-three/fiber'
import { getCamera } from './camera.js';
import Experience from './Experience.js'
import { Alignment, ComponentTypes } from './types.js';

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
                    <Experience meshes={child.meshes} htmls={child.htmls}/>
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