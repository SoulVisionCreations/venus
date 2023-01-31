import PropTypes from "prop-types";
import { Html, Text } from "@react-three/drei";
import { TextTypes } from "../../Configs/types";

const renderList = (list) => {
  return list.map(function (item, i) {
    return <li key={i}>{item}</li>;
  });
};

const TextLoader = (props) => {
  switch (props.type) {
    case TextTypes.Paragraph:
      return <Text {...props}> {props.text} </Text>;
    case TextTypes.List:
      return (
        <Html transform="true" {...props}>
          {props.title}
          {props.numbererd ? (
            <ol> {renderList(props.list)} </ol>
          ) : (
            <ul> {renderList(props.list)} </ul>
          )}
        </Html>
      );
  }
};

TextLoader.propTypes = {
  type: PropTypes.oneOf(Object.values(TextTypes)),
  text: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.number,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  maxWidth: PropTypes.number,
  numbererd: PropTypes.bool
};

export default TextLoader;
