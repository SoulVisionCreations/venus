import { Html } from '@react-three/drei'
import { Euler, Vector3 } from 'three'

type AvataarLoaderProps = {
  position: Vector3
  rotation: Euler
  scale: number
  center: boolean
}

const AvataarLoader = (props: AvataarLoaderProps) => {
  return (
    <Html {...props}>
      <img src="./loader-avataar.gif" alt="Loading" width="200" />
    </Html>
  )
}

export default AvataarLoader
