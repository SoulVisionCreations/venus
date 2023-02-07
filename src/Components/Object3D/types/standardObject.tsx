import Geometry from '../../Geometry/geometry';
import InstanceMesh from '../../InstanceMesh';
import MaterialLoader from '../../Material/material';
import { Mesh } from '../../mesh';
import { ObjectPropsType } from '../../../Configs/propTypes';
import { ScenePropsType } from '../../Scene/Scene';

const StandardObject = ({ objectProps, sceneProps }: { objectProps: ObjectPropsType; sceneProps: ScenePropsType }): JSX.Element => {
  const useInstancing: boolean = !(objectProps.useInstancing == undefined) && objectProps.useInstancing;

  return useInstancing ? (
    <InstanceMesh
      geometry={Geometry(objectProps.geometry)}
      material={MaterialLoader(objectProps.material)}
      objectProps={objectProps}
      gSceneParams={null}
    />
  ) : (
    <Mesh
      geometry={Geometry(objectProps.geometry)}
      material={MaterialLoader(objectProps.material)}
      objectProps={objectProps}
      sceneProps={sceneProps}
      gSceneParams={null}
    />
  );
};

export default StandardObject;
