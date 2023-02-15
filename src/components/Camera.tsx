import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { CameraTypes } from '../types/enums';
import { CameraProps } from '../types/types';
import { arrayToVec3 } from '../utils/utility';

const Camera = ({ type, position, ...props }: CameraProps) => {
    switch (type) {
        case CameraTypes.Perspective:
            return <PerspectiveCamera makeDefault position={arrayToVec3(position)} {...props} />;
        case CameraTypes.Orthographic:
            return <OrthographicCamera makeDefault position={arrayToVec3(position)} {...props} />;
    }
};

export default Camera;
