import PropTypes from "prop-types";
import { Text } from "@react-three/drei";

const TextLoader = (props) => {
  return (
    <Text anchorX="center" anchorY="middle" {...props}>
      {props.text}
    </Text>
  );
};

TextLoader.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextLoader;