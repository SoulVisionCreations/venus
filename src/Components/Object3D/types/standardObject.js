import Geometry from '../../Geometry/geometry'
import InstanceMesh from '../../InstanceMesh'
import MaterialLoader from '../../Material/material'
import { Mesh } from '../../mesh'

const StandardObject = ({ objectProps, sceneProps }) => {
  const useInstancing =
    !(objectProps.useInstancing == undefined) && objectProps.useInstancing

  return useInstancing ? (
    <InstanceMesh
      geometry={Geometry(objectProps.geometry)}
      material={MaterialLoader(objectProps.material)}
      objectProps={objectProps}
    />
  ) : (
    <Mesh
      geometry={Geometry(objectProps.geometry)}
      material={MaterialLoader(objectProps.material)}
      objectProps={objectProps}
      sceneProps={sceneProps}
    />
  )
}

export default StandardObject
