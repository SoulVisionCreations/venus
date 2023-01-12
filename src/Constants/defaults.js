export const cameraDefaults = {
  position: [0, 0, 5],
  makeDefault: true,
};

export const animationDefaults = {
  rotationArray: [0.5, 0.5, 0.5],
  scrollByRotationContinouslySpeed: 0.05,
  scrollByRotationOnceSpeed: 0.05,
};

export const objectDefaults = {
  position: [0, 0, 0],
  scale: 1,
  control: 0,
};

export const htmlDefaults = {
  scale: 0.01,
  transform: true,
};

export const stylingDefaults = {
  flexRowContainer: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumnContainer: {
    display: "flex",
    flexDirection: "column",
  },
  fullWidthMediumHeightCanvas: {
    height: "800px",
    width: "100%",
    boxSizing: "content-box",
  },
  fullWidthLargeHeightCanvas: {
    height: "500px",
    width: "100%",
    boxSizing: "content-box",
  },
  fullWidthFullHeightCanvas: {
    height: `${window.innerHeight}px`,
    widht: `${window.innerWidth}px`,
    boxSizing: "content-box",
  },
};
