import PropTypes from 'prop-types';
import { Image } from "@react-three/drei";

const ImageLoader = (props) => {
  return <Image {...props} />;
};

ImageLoader.propTypes = {
  url: PropTypes.string.isRequired,
  scale: PropTypes.number,
  zoom: PropTypes.number,
  opacity: PropTypes.number,
}

export default ImageLoader;
