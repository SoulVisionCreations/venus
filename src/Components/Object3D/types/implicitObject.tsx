import InstanceMesh from '../../InstanceMesh';
import { Mesh } from '../../mesh';
import { getAssetbyId } from '../../../Utils/download';
import { ScenePropsType } from '../../Scene/Scene';
import { ImplicitAssetPropsType, ObjectPropsType } from '../../../Configs/propTypes';
import { implicitObjectProps } from '../../../Types/types';

const ImplicitObject = ({ objectProps, sceneProps }: { objectProps: implicitObjectProps; sceneProps: ScenePropsType }) => {
  const asset: ImplicitAssetPropsType = getAssetbyId(objectProps.assetId);
  const useInstancing: boolean = !(objectProps.useInstancing == undefined) && objectProps.useInstancing;

  return useInstancing ? (
    <InstanceMesh geometry={asset.geometry} material={asset.material} gSceneParams={asset.gSceneParams} objectProps={objectProps} />
  ) : (
    <Mesh geometry={asset.geometry} material={asset.material} gSceneParams={asset.gSceneParams} objectProps={objectProps} sceneProps={sceneProps} />
  );
};

export default ImplicitObject;
