import InstanceMesh from '../../InstanceMesh'
import { Mesh } from '../../mesh'
import { getAssetbyId } from '../../../Utils/download'
import { ScenePropsType } from '../../Scene/Scene'
import { ObjectPropsType } from '../../../Configs/propTypes'
import { BufferGeometry, Material } from 'three'

interface ImplicitAssetPropsType {
  geometry: BufferGeometry
  gSceneParams?: object
  material: Material
}

const ImplicitObject = ({
  objectProps,
  sceneProps,
}: {
  objectProps: ObjectPropsType
  sceneProps: ScenePropsType
}) => {
  const asset: ImplicitAssetPropsType = getAssetbyId(objectProps.assetId)
  const useInstancing: boolean =
    !(objectProps.useInstancing == undefined) && objectProps.useInstancing

  return useInstancing ? (
    <InstanceMesh
      geometry={asset.geometry}
      material={asset.material}
      gSceneParams={asset.gSceneParams}
      objectProps={objectProps}
    />
  ) : (
    <Mesh
      geometry={asset.geometry}
      material={asset.material}
      gSceneParams={asset.gSceneParams}
      objectProps={objectProps}
      sceneProps={sceneProps}
    />
  )
}

export default ImplicitObject
