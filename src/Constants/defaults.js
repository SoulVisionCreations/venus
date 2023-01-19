export const cameraDefaults = {
  position: [0, 0, 5],
  makeDefault: true,
};

export const animationDefaults = {
    rotationArray: [0, 0, 0.5],
    scrollByRotationContinouslySpeed: 0.04,
    scrollByRotationOnceSpeed: 0.06
}

export const objectDefaults = {
  position: [0, 0, 0],
  scale: 1,
  control: 0,
};

export const htmlDefaults = {
  scale: 0.01,
  transform: true,
};

export const text3DDefaults = {
  scale: 0.1,
  color: "white",
};

export const stylingDefaults = {
  flexRowContainer: {
      display: 'flex',
      flexDirection: 'row'
  },
  flexColumnContainer: {
      display: 'flex',
      flexDirection: 'column'
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
      boxSizing: 'content-box'
  }
}
