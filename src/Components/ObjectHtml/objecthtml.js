import { Html } from "@react-three/drei";
import PropTypes from "prop-types";
import { ObjectHtmlTypes } from "../../Configs/types";
import { htmlDefaults } from "../../Constants/defaults";
import './objecthtml.css';

const ObjectHtml = (props) => {
  const scale = props.scale
    ? htmlDefaults.scale * props.scale
    : htmlDefaults.scale;
  switch (props.type) {
    case ObjectHtmlTypes.PriceTag:
      return (
        <Html {...props} scale={scale}>
          <div className="annotation">{props.price}</div>
        </Html>
      );
    default:
      return <Html>{props.html}</Html>;
  }
};

ObjectHtml.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  transform: PropTypes.bool,
};

export default ObjectHtml;
