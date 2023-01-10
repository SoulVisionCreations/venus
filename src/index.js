import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimationTypes, ComponentTypes, CameraTypes, Alignment, ObjectControlTypes, SceneEffectsTypes, eventDrivenActionTypes } from './Configs/types';
import { stylingDefaults } from './Constants/defaults';
import { SceneControlTypes } from './Configs/types';

const root = ReactDOM.createRoot(document.querySelector('#root'));


const config = {
    type: ComponentTypes.Container,
    className: "rootContainer",
    alignment: Alignment.Vertical,
    style: stylingDefaults.flexColumnContainer,
    children: [
        {
            type: ComponentTypes.Canvas,
            className: "canvas",
            id: "canvas1",
            style: stylingDefaults.fullWidthFullHeightCanvas,
            camera: {
                position: [0, 0, 5],
                type: CameraTypes.Perspective,
            },
            implicitObjects: [
                {
                    position: [0, 0, 0],
                    control: {
                        type: ObjectControlTypes.BouncyPresentation
                    },
                    scale: 5
                }
            ]
        },
        {
            type: ComponentTypes.Canvas,
            className: "canvas",
            id: "canvas2",
            style: stylingDefaults.fullWidthFullHeightCanvas,
            effects: SceneEffectsTypes.DisableScrollOnceOnCompletelyVisible,
            camera: {
                position: [0, 0, 5],
                type: CameraTypes.Perspective,
            },
            implicitObjects: [
                {
                    position: [0, 0, 0],
                    events: [{type: eventDrivenActionTypes.rotateByScrollOnce, rotationArray: [0,0, Math.PI/180]}],
                    scale: 4,
                }
            ],
        },
    ]
}
root.render(<App config={config} />);