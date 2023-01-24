import PropTypes from 'prop-types';
import { MaterialTypes } from "../../Configs/types";

const Material = ({type, ...props}) => {
  switch (type) {
    case MaterialTypes.MeshBasicMaterial:
      return <meshBasicMaterial {...props} />;
    case MaterialTypes.MeshLambertMaterial:
      return <meshLambertMaterial {...props} />;
    case MaterialTypes.MeshStandardMaterial:
      return <meshStandardMaterial {...props} />;
    case MaterialTypes.MeshPhongMaterial:
      return <meshPhongMaterial {...props} />;
    case MaterialTypes.MeshToonMaterial:
      return <meshToonMaterial {...props} />;
    case MaterialTypes.MeshDepthMaterial:
      return <meshDepthMaterial {...props} />;
    case MaterialTypes.MeshDistanceMaterial:
      return <meshDistanceMaterial {...props} />;
    case MaterialTypes.MeshMatcapMaterial:
      return <meshMatcapMaterial {...props} />;
    case MaterialTypes.MeshNormalMaterial:
      return <meshNormalMaterial {...props} />;
    case MaterialTypes.MeshPhongMaterial:
      return <meshPhongMaterial {...props} />;
    case MaterialTypes.MeshPhysicalMaterial:
      return <meshPhysicalMaterial {...props} />;
    case MaterialTypes.RawShaderMaterial:
      return <rawShaderMaterial {...props} />;
  }
};

Material.propTypes = {
  type: PropTypes.oneOf(Object.values(MaterialTypes)).isRequired
}

export default Material;
