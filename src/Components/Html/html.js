import { Html } from "@react-three/drei";
import PropTypes from 'prop-types';
import { HtmlTypes } from "../../Configs/types";
import { htmlDefaults } from "../../Constants/defaults";

const HtmlLoader = (props) => {
  const scale = props.scale ? props.scale : htmlDefaults.scale;
  switch (props.type) {
    case HtmlTypes.PriceTag:
      return (
        <Html scale={scale} {...props}>
          <div className="annotation">{props.price}</div>
        </Html>
      );
    default:
      return <Html>{props.html}</Html>;
  }
};

HtmlLoader.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  transform: PropTypes.bool
}

export default HtmlLoader;