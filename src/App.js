import CanvasContainer from './Components/CanvasContainer.js';
import { Alignment, ComponentTypes } from './Configs/types.js';

export default function App({config})
{
    const renderConfig = () => {
        return config.children.map((child, index) => {
          if(child.type == ComponentTypes.Container) return <App config={child} />;
          return <CanvasContainer {...child} key={index} />;
        });
    };

    const alignmentClassName = config.alignment == Alignment.Vertical ? "flexColumn" : "flexRow";
    return (
        <div className={`${config.className} ${alignmentClassName}` } style={config.style}>{renderConfig()}</div>
    );
}