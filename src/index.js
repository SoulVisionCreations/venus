import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AnimationTypes, ComponentTypes, CameraTypes, Alignment } from './types';
import { stylingDefaults } from './defaults';

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
            style: stylingDefaults.fullWidthLargeHeightCanvas,
            camera: {
                position: [0, 0, 5],
                type: CameraTypes.Perspective,
            },
            meshes: [
                {
                    position: [-10, 0, 0],
                    animations: [
                       {type: AnimationTypes.Float}
                    ],
                    scale: 3
                },
                {
                    position: [0, 0, 0],
                    animations: [{type: AnimationTypes.Float}, {type: AnimationTypes.Rotate, rotationArray: [0.1, 0.1, 0.1]}],
                    scale: 3
                },
                {
                    position: [10, 0, 0],
                    animations: [{type: AnimationTypes.Rotate, rotationArray: [0.1, 0.1, 0.1]}],
                    scale: 3
                },
            ]
        },
        // {
        //     type: ComponentTypes.Canvas,
        //     className: "canvas",
        //     style: stylingDefaults.fullWidthLargeHeightCanvas,
        //     camera: {
        //         position: [0, 0, 5],
        //         type: CameraTypes.Orthographic,
        //     },
        //     meshes: [
        //         {
        //             position: [0, 0, 0],
        //             animations: [{type: AnimationTypes.Float}],
        //             scale: 4
        //         }
        //     ]
        // },
        // {
        //     type: ComponentTypes.Canvas,
        //     className: "canvas",
        //     style: stylingDefaults.fullWidthMediumHeightCanvas,
        //     camera: {
        //         position: [0, 0, 5],
        //         type: CameraTypes.Perspective,
        //     },
        //     meshes: [
        //         {
        //             position: [0, 0, 0],
        //             animations: [{type: AnimationTypes.Rotate, rotationArray: [0.1, 0.1, 0.1]}],
        //             scale: 4,
        //         }
        //     ]
        // },
    ]
}
root.render(<App config={config} />);