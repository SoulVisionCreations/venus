import { LightProps } from '../types/types';
import { LightTypes } from '../types/enums';
import { arrayToEuler, arrayToVec3 } from '../utils/utility';

const Light = ({ type, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], ...props }: LightProps) => {
    const prs = { position: arrayToVec3(position), rotation: arrayToEuler(rotation), scale: arrayToVec3(scale) };
    switch (type) {
        case LightTypes.Ambient:
            return <ambientLight {...props} {...prs} />;
        case LightTypes.Directional:
            return <directionalLight {...props} {...prs} />;
        case LightTypes.Hemisphere:
            return <hemisphereLight {...props} {...prs} />;
        case LightTypes.Point:
            return <pointLight {...props} {...prs} />;
        case LightTypes.Rectangular:
            return <rectAreaLight {...props} {...prs} />;
        case LightTypes.Spot:
            return <spotLight {...props} {...prs} />;
        default:
            return null;
    }
};

export default Light;
