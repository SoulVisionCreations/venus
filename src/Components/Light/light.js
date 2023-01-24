import PropTypes from 'prop-types';
import { LightTypes } from "../../Configs/types.js";

const Light = ({type, ...props}) => {
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

Light.propTypes = {
  type: PropTypes.oneOf(Object.values(LightTypes)).isRequired,
}

export default Light;
