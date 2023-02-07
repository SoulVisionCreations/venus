import PropTypes from 'prop-types';
import { Html } from '@react-three/drei';
import { TextTypes } from '../../Configs/enums';
import { htmlDefaults } from '../../Constants/defaults';

const renderList = (list) => {
  return list.map(function (item, i) {
    return <li key={i}>{item}</li>;
  });
};

const Text = (props) => {
  const scale = props.scale ? props.scale * htmlDefaults.scale : htmlDefaults.scale;
  switch (props.type) {
    case TextTypes.Paragraph:
      return (
        <Html transform {...props} scale={scale}>
          {props.text}
        </Html>
      );
    case TextTypes.List:
      return (
        <Html transform {...props} scale={scale}>
          {props.title}
          {props.numbererd ? <ol> {renderList(props.list)} </ol> : <ul> {renderList(props.list)} </ul>}
        </Html>
      );
  }
};

Text.propTypes = {
  type: PropTypes.oneOf(Object.values(TextTypes)),
  text: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.number,
  numbererd: PropTypes.bool,
};

export default Text;
