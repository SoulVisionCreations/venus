import { SceneControlTypes } from '../../types/enums';
import { SceneControlProps } from '../../types/types';
import Orbit from './Orbit';

export const applySceneControl = (sceneControl: SceneControlProps) => {
    const { type, ...props } = sceneControl;
    switch (type) {
        case SceneControlTypes.Orbit:
            return <Orbit props={props} />;
    }
};
