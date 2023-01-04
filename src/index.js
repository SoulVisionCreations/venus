import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimationTypes, ComponentTypes, CameraTypes, Alignment } from './types';
import { stylingDefaults } from './defaults';

const root = ReactDOM.createRoot(document.querySelector('#root'));


const config = {
    type: ComponentTypes.Container,
    className: "rootContainer",
    isLeaf: false,
    alignment: Alignment.Vertical,
    style: stylingDefaults.flexColumnContainer,
    children: [
        {
            type: ComponentTypes.Canvas,
            className: "canvas",
            style: stylingDefaults.fullWidthMediumHeightCanvas,
            camera: {
                position: [0, 0, 5],
                type: CameraTypes.Orthographic,
            },
            meshes: [
                {
                    position: [-10, 0, 0],
                    animationType: AnimationTypes.Float,
                    scale: 3
                },
                {
                    position: [0, 0, 0],
                    animationType: AnimationTypes.Float,
                    scale: 3
                },
                {
                    position: [10, 0, 0],
                    animationType: AnimationTypes.BouncyFloat,
                    scale: 3
                },
            ]
        },
        {
            type: ComponentTypes.Canvas,
            className: "canvas",
            style: stylingDefaults.fullWidthLargeHeightCanvas,
            camera: {
                position: [0, 0, 5],
                type: CameraTypes.Orthographic,
            },
            meshes: [
                {
                    position: [0, 0, 0],
                    animationType: AnimationTypes.Bouncy,
                    scale: 4
                }
            ]
        },
        {
            type: ComponentTypes.Canvas,
            className: "canvas",
            style: stylingDefaults.fullWidthLargeHeightCanvas,
            camera: {
                position: [0, 0, 5],
                type: CameraTypes.Orthographic,
            },
            meshes: [
                {
                    position: [0, 0, 0],
                    animationType: AnimationTypes.RotateByScroll,
                    scale: 4
                }
            ]
        },
    ]
}
root.render(<App config={config} />);