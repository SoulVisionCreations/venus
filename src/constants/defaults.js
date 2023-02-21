import { ObjectControlTypes } from '../types/enums';

export const cameraDefaults = {
    position: [0, 0, 5],
    makeDefault: true,
};

export const trajectoryDefaults = {
    closed: false,
    equiSpacedPoints: true,
    steps: 100,
    clockwise: true
}

export const animationDefaults = {
    initialPause: 0,
    interval: 0,
    repeat: false,
    rotationArray: [0, 0, 1],
    visibilityThreshold: { sceneTopToScreenBottomRatio: 0.5, sceneBottomToScreenTopRatio: 0.5 },
    scrollByRotationContinouslySpeed: 0.04,
    scrollByRotationOnceSpeed: 0.06,
    steps: 100,
    increment: {
        position: [0, 0, 0],
        rotation: [0, 0, 0],
        scale: [0, 0, 0],
    },
    scrollAnimation: {
        maxRotation: Math.PI*2,
        minRotation: 0,
        speed: 0.1,
        springConfig: { mass: 4, tension: 280, friction: 90 }
    }
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
        height: '400px',
        width: '100%',
        boxSizing: 'content-box',
    },
    fullWidthMediumHeightCanvas: {
        height: '750px',
        width: '100%',
        boxSizing: 'content-box',
    },
    fullWidthLargeHeightCanvas: {
        height: '900px',
        width: '100%',
        boxSizing: 'content-box',
    },
    fullWidthFullHeightCanvas: {
        height: `${window.innerHeight}px`,
        widht: `${window.innerWidth}px`,
        boxSizing: 'content-box',
    },
    fullHeightCanvas: {
        height: `${window.innerHeight}px`,
        flexGrow: 1,
    },
    mediumHeightCanvas: {
        height: '750px',
        flexGrow: 1,
    },
    flexGrow1: {
        flexGrow: 1
    }
};
