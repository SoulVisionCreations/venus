import { ObjectControlTypes } from '../types/enums';

export const cameraDefaults = {
    position: [0, 0, 5],
    makeDefault: true,
};

export const animationDefaults = {
    rotationArray: [0, 0, 1],
    scrollByRotationContinouslySpeed: 0.04,
    scrollByRotationOnceSpeed: 0.06,
    increment: {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [0, 0, 0],
    },
};

export const objectDefaults = {
    position: [0, 0, 0],
    scale: [1, 1, 1],
    rotation: [0, 0, 0], //[-Math.PI/4 - Math.PI/8, -Math.PI/16, 0],
    control: ObjectControlTypes.NoControls,
};

export const htmlDefaults = {
    scale: 0.1,
    transform: true,
};

export const stylingDefaults = {
    flexRowContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexColumnContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    fullWidthSmallHeightCanvas: {
        height: '200px',
        width: '100%',
        boxSizing: 'content-box',
    },
    fullWidthMediumHeightCanvas: {
        height: '400px',
        width: '100%',
        boxSizing: 'content-box',
    },
    fullWidthLargeHeightCanvas: {
        height: '600px',
        width: '100%',
        boxSizing: 'content-box',
    },
    fullWidthFullHeightCanvas: {
        height: `${window.innerHeight}px`,
        widht: `${window.innerWidth}px`,
        boxSizing: 'content-box',
    },
};
