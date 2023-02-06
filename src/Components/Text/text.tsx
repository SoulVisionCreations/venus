import React from 'react'
import { Html } from '@react-three/drei'
import { htmlDefaults } from '../../Constants/defaults'
import { TextTypes } from '../../Configs/types'
import { Euler, Vector3 } from 'three'

type TextProps = {
  list: string[]
  numbererd: boolean
  position: Vector3
  rotation: Euler
  scale: number
  text: string
  title: string
  type: any
}

const renderList = (list: string[]): JSX.Element[] => {
  return list.map(function (item, i) {
    return <li key={i}>{item}</li>
  })
}

const Text = ({ type, ...props }: TextProps): JSX.Element | null => {
  const scale: number = props.scale
    ? props.scale * htmlDefaults.scale
    : htmlDefaults.scale
  switch (type) {
    case TextTypes.List:
      return (
        <Html transform {...props} scale={scale}>
          {props.title}
          {props.numbererd ? (
            <ol> {renderList(props.list)} </ol>
          ) : (
            <ul> {renderList(props.list)} </ul>
          )}
        </Html>
      )
    case TextTypes.Paragraph:
      return (
        <Html transform {...props} scale={scale}>
          {props.text}
        </Html>
      )
    default:
      return null
  }
}

export default Text
