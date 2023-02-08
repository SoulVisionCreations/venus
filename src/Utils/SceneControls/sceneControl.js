import { SceneControlTypes } from '../../enums';
import Orbit from './Orbit';

export const applySceneControl = (sceneControl) => {
  switch (sceneControl.type) {
    case SceneControlTypes.Orbit:
      return <Orbit />;
  }
};
