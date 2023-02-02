import React, { useEffect } from 'react';
import { invalidate } from '@react-three/fiber';
import CanvasContainer from './Components/CanvasContainer.js';
import { Alignment, ComponentTypes } from './Configs/types.js';

export default function App({config})
{
  const renderConfig = () => {
      return config.children.map((child, index) => {
        if(child.type == ComponentTypes.Container) {
          return <App config={child} key={index}/>;
        }
        return <CanvasContainer {...child} key={index} />;
      });
  };

  useEffect(() => {
    window.addEventListener('resize', ()=> {
      invalidate();
    })
  }, [])

  const alignmentClassName = config.alignment == Alignment.Vertical ? "flexColumn" : "flexRow";

  return (
    <div className={`${config.className} ${alignmentClassName}`} style={config.style}>
      {renderConfig()}
    </div>
  );
}
