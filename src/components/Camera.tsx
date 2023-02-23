import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { CameraTypes } from '../types/enums';
import { CameraProps } from '../types/types';
import { arrayToEuler, arrayToVec3 } from '../utils/utility';

const Camera = ({ type, position = [0, 0, 5], rotation = [0, 0, 0], ...props }: CameraProps) => {
    switch (type) {
        case CameraTypes.Perspective:
            return <PerspectiveCamera makeDefault position={arrayToVec3(position)} rotation={arrayToEuler(rotation)} {...props} />;
        case CameraTypes.Orthographic:
            return <OrthographicCamera makeDefault position={arrayToVec3(position)} rotation={arrayToEuler(rotation)} {...props} />;
    }
};

export default Camera;
