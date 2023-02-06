import WebGL from 'three/examples/jsm/capabilities/WebGL.js'
import PropTypes from 'prop-types'
import InstanceMesh from '../../InstanceMesh'
import { Mesh } from '../../mesh'
import { getAssetbyId } from '../../../Utils/download'

if (WebGL.isWebGL2Available() === false) {
  viewSpace.appendChild(WebGL.getWebGL2ErrorMessage())
}

const ImplicitObject = ({ objectProps, sceneProps }) => {
  const asset = getAssetbyId(objectProps.assetId)
  const useInstancing =
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

ImplicitObject.propTypes = {
  objectProps: PropTypes.shape({
    assetId: PropTypes.string.isRequired,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.number),
    ]),
    useInstancing: PropTypes.bool,
  }),
}

export default ImplicitObject
