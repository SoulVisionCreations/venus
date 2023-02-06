import React from 'react'
import { Html } from '@react-three/drei'
import { ImageTypes } from '../../Configs/types'
import { htmlDefaults } from '../../Constants/defaults'
import { getAssetbyId } from '../../Utils/download'
import './image.css'
import { Euler, Vector3 } from 'three'

type ImageProps = {
  assetId: string
  position: Vector3
  rotation: Euler
  scale: number
  type: any
  imgSrc: string
}

const renderImage = ({ type, ...props }: ImageProps): JSX.Element => {
  switch (type) {
    case ImageTypes.Rounded:
      return (
        <img
          src={props.imgSrc}
          className="rounded"
          {...props}
          alt="load failed"
        />
      )
    case ImageTypes.Circle:
      return (
        <img
          src={props.imgSrc}
          className="circle"
          {...props}
          alt="load failed"
        />
      )
    case ImageTypes.Square:
      return (
        <img
          src={props.imgSrc}
          className="square"
          {...props}
          alt="load failed"
        />
      )
    case ImageTypes.Icon:
      return (
        <img src={props.imgSrc} className="icon" {...props} alt="load failed" />
      )
    default:
      return <img src={props.imgSrc} alt="load failed" />
  }
}

const Image = ({ type, ...props }: ImageProps): JSX.Element => {
  const scale: number = props.scale
    ? props.scale * htmlDefaults.scale
    : htmlDefaults.scale
  const imgSrc: string = getAssetbyId(props.assetId)
  return (
    <Html transform {...props} scale={scale}>
      {renderImage({ type, ...props, imgSrc })}
    </Html>
  )
}

export default Image
