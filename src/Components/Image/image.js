import PropTypes from 'prop-types';
import { Html } from '@react-three/drei';
import { ImageTypes } from '../../Configs/enums';
import { htmlDefaults } from '../../Constants/defaults';
import { getAssetbyId } from '../../Utils/download';
import './image.css';

const renderImage = (props, imgSrc) => {
  switch (props.type) {
    case ImageTypes.Rounded:
      return <img src={imgSrc} className="rounded" {...props} />;
    case ImageTypes.Circle:
      return <img src={imgSrc} className="circle" {...props} />;
    case ImageTypes.Square:
      return <img src={imgSrc} className="square" {...props} />;
    case ImageTypes.Icon:
      return <img src={imgSrc} className="icon" {...props} />;
    default:
      return <img src={imgSrc} />;
  }
};

const Image = (props) => {
  const scale = props.scale ? props.scale * htmlDefaults.scale : htmlDefaults.scale;
  const imgSrc = getAssetbyId(props.assetId);
  return (
    <Html transform {...props} scale={scale}>
      {renderImage(props, imgSrc)}
    </Html>
  );
};

Image.propTypes = {
  assetId: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
};

export default Image;
