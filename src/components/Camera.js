import PropTypes from 'prop-types';
import { OrthographicCamera, PerspectiveCamera, CubeCamera } from '@react-three/drei';
import { CameraTypes } from '../types/enums.ts';

const Camera = (props) => {
    switch (props.type) {
        case CameraTypes.Perspective:
            return <PerspectiveCamera makeDefault {...props} />;
        case CameraTypes.Orthographic:
            return <OrthographicCamera makeDefault {...props} />;
        case CameraTypes.Cube:
            return <CubeCamera makeDefault {...props} />;
    }
};

Camera.propTypes = {
    type: PropTypes.oneOf(Object.values(CameraTypes)).isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.arrayOf(PropTypes.number),
};

export default Camera;
