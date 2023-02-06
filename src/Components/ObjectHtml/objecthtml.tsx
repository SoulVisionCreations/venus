import React from 'react'
import { Html } from '@react-three/drei'
import { ObjectHtmlTypes } from '../../Configs/types'
import { htmlDefaults } from '../../Constants/defaults'
import './objecthtml.css'
import { Euler, Vector3 } from 'three'

type ObjectHtmlProps = {
  html: string
  position: Vector3
  price: number
  rotation: Euler
  scale: number
  type: any
}

const ObjectHtml = ({
  type,
  ...props
}: ObjectHtmlProps): JSX.Element | null => {
  const scale: number = props.scale
    ? htmlDefaults.scale * props.scale
    : htmlDefaults.scale
  switch (type) {
    case ObjectHtmlTypes.PriceTag:
      return (
        <Html {...props} scale={scale}>
          <div className="annotation">{props.price}</div>
        </Html>
      )
    default:
      return null
  }
}

export default ObjectHtml
