import PropTypes from "prop-types";
import { Html } from "@react-three/drei";
import { ImageTypes } from "../../Configs/types";
import { htmlDefaults } from "../../Constants/defaults";
import "./image.css";

const renderImage = (props) => {
  switch (props.type) {
    case ImageTypes.Rounded:
      return <img className="rounded" {...props} />;
    case ImageTypes.Circle:
      return <img className="circle" {...props} />;
    case ImageTypes.Square:
      return <img className="square" {...props} />;
    case ImageTypes.Icon:
      return <img className="icon" {...props} />;
    default:
      return <img {...props} />;
  }
};

const Image = (props) => {
  const scale = props.scale
    ? props.scale * htmlDefaults.scale
    : htmlDefaults.scale;
  return (
    <Html transform {...props} scale={scale}>
      {renderImage(props)}
    </Html>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
};

export default Image;
