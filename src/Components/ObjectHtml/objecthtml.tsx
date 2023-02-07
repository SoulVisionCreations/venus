import { Html } from '@react-three/drei'
import { ObjectHtmlTypes } from '../../Configs/types'
import { htmlDefaults } from '../../Constants/defaults'
import './objecthtml.css'
import { ObjectHtmlPropsType } from '../../Configs/propTypes'

const ObjectHtml = ({
  type,
  ...props
}: ObjectHtmlPropsType): JSX.Element | null => {
  const scale: number = props.scale
    ? htmlDefaults.scale * props.scale
    : htmlDefaults.scale
  switch (type) {
    case ObjectHtmlTypes.PriceTag:
      return (
        <Html transform {...props} scale={scale}>
          <div className="annotation">{props.price}</div>
        </Html>
      )
    default:
      return null
  }
}

export default ObjectHtml
