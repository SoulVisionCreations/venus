import { Html } from "@react-three/drei";
import PropTypes from 'prop-types';

const AvataarLoader = (props) => {
  return (
    <Html {...props}>
      <img src="./loader-avataar.gif" alt="Loading" width="200" />
    </Html>
  );
};

AvataarLoader.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  center: PropTypes.bool
}

export default AvataarLoader;