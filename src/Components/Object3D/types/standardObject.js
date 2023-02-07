import Geometry from '../../Geometry/geometry';
import InstanceMesh from '../../InstanceMesh';
import Material from '../../Material/material';
import { Mesh } from '../../mesh';
import { renderObjectHtmls } from '../object3D';

const StandardObject = ({ objectProps, sceneProps }) => {
  const useInstancing = !(objectProps.useInstancing == undefined) && objectProps.useInstancing;

  return useInstancing ? (
    <InstanceMesh geometry={Geometry(objectProps.geometry)} material={Material(objectProps.material)} objectProps={objectProps} />
  ) : (
    <Mesh geometry={Geometry(objectProps.geometry)} material={Material(objectProps.material)} objectProps={objectProps} sceneProps={sceneProps} />
  );
};

export default StandardObject;
