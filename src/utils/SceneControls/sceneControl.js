import { SceneControlTypes } from '../../types/enums';
import Orbit from './orbit';

export const applySceneControl = (sceneControl) => {
    switch (sceneControl.type) {
        case SceneControlTypes.Orbit:
            return <Orbit />;
    }
};
