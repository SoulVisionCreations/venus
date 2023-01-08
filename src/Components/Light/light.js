import { LightTypes } from "../../Configs/types.js";

export const getLight = ({ type, ...props }) => {
  switch (type) {
    case LightTypes.Ambient:
      return <ambientLight {...props} />;
    case LightTypes.Directional:
      return <directionalLight {...props} />;
    case LightTypes.Point:
      return <pointLight {...props} />;
    case LightTypes.Spot:
      return <spotLight {...props} />;
    case LightTypes.Hemisphere:
      return <hemisphereLight {...props} />;
    case LightTypes.Rectangle:
      return <rectAreaLight {...props} />;
  }
};
