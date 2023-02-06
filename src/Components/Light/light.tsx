import React from 'react'
import { Euler, Vector3 } from 'three'
import { LightTypes } from '../../Configs/types.js'

type LightProps = {
  angle: number
  color: string
  decay: number
  distance: number
  groundColor: string
  height: number
  intensity: number
  penumbra: number
  position: Vector3
  rotation: Euler
  scale: Vector3 | number
  skyColor: string
  width: number
  type: any
}

const Light = ({ type, ...props }: LightProps): JSX.Element | null => {
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
