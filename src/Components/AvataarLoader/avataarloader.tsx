import { Html } from '@react-three/drei'
import { AvataarLoaderPropsType } from '../../Configs/propTypes'

const AvataarLoader = (props: AvataarLoaderPropsType) => {
  return (
    <Html {...props}>
      <img src="./loader-avataar.gif" alt="Loading" width="200" />
    </Html>
  )
}

export default AvataarLoader
