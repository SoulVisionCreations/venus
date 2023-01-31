import PropTypes from 'prop-types';
import { Image } from "@react-three/drei";

const ImageLoader = (props) => {
  return <Image {...props} />
};

ImageLoader.propTypes = {
  url: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  zoom: PropTypes.number,
  opacity: PropTypes.number,
  transparent: PropTypes.bool,
}

export default ImageLoader;
