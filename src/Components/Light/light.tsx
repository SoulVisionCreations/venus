import { LightPropsType } from '../../Configs/propTypes'
import { LightTypes } from '../../Configs/types'

const Light = ({ type, ...props }: LightPropsType): JSX.Element | null => {
  switch (type) {
    case LightTypes.Ambient:
      return <ambientLight {...props} />
    case LightTypes.Directional:
      return <directionalLight {...props} />
    case LightTypes.Hemisphere:
      return <hemisphereLight {...props} />
    case LightTypes.Point:
      return <pointLight {...props} />
    case LightTypes.Rectangular:
      return <rectAreaLight {...props} />
    case LightTypes.Spot:
      return <spotLight {...props} />
    default:
      return null
  }
}

export default Light
