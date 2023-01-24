import PropTypes from 'prop-types';
import { StandardGeometryTypes } from "../../Configs/types";

const Geometry = ({type, ...props}) => {
  switch (type) {
    case StandardGeometryTypes.BoxGeometry:
      return <boxGeometry {...props} />;
    case StandardGeometryTypes.CylinderGeometry:
      return <cylinderGeometry {...props} />;
    case StandardGeometryTypes.ConeGeometry:
      return <coneGeometry {...props} />;
    case StandardGeometryTypes.SphereGeometry:
      return <sphereGeometry {...props} />;
    case StandardGeometryTypes.TorusGeometry:
      return <torusGeometry {...props} />;
    case StandardGeometryTypes.TorusKnotGeometry:
      return <torusKnotGeometry {...props} />;
    case StandardGeometryTypes.RingGeometry:
      return <ringGeometry {...props} />;
    case StandardGeometryTypes.CapsuleGeometry:
      return <capsuleGeometry {...props} />;
    case StandardGeometryTypes.DodecahedronGeometry:
      return <dodecahedronGeometry {...props} />;
    case StandardGeometryTypes.IcosahedronGeometry:
      return <icosahedronGeometry {...props} />;
    case StandardGeometryTypes.OctahedronGeometry:
      return <octahedronGeometry {...props} />;
    case StandardGeometryTypes.TetrahedronGeometry:
      return <tetrahedronGeometry {...props} />;
    case StandardGeometryTypes.PolyhedronGeometry:
      return <polyhedronGeometry {...props} />;
    case StandardGeometryTypes.TubeGeometry:
      return <tubeGeometry {...props} />;
    case StandardGeometryTypes.CircleGeometry:
      return <circleGeometry {...props} />;
    case StandardGeometryTypes.EdgesGeometry:
      return <edgesGeometry {...props} />;
    case StandardGeometryTypes.ExtrudeGeometry:
      return <extrudeGeometry {...props} />;
    case StandardGeometryTypes.LatheGeometry:
      return <latheGeometry {...props} />;
    case StandardGeometryTypes.PlaneGeometry:
      return <planeGeometry {...props} />;
    case StandardGeometryTypes.ShapeGeometry:
      return <shapeGeometry {...props} />;
    case StandardGeometryTypes.WireframeGeometry:
      return <wireframeGeometry {...props} />;
  }
};

Geometry.propTypes = {
  type: PropTypes.oneOf(Object.values(StandardGeometryTypes)).isRequired
}

export default Geometry;