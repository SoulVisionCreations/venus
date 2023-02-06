import { Euler, Matrix4, Quaternion, Vector2, Vector3, Vector4 } from 'three'
import { objectDefaults } from '../Constants/defaults'

export function degToRad(deg) {
  return deg * (Math.PI / 180)
}

export const arrayToVec = (arr) => {
  switch (arr.length) {
    case 2:
      return new Vector2(...arr)
    case 3:
      return new Vector3(...arr)
    case 4:
      return new Vector4(...arr)
    default:
      return 'invalidInput'
  }
}

export const getInitialStateArr = (instance) => {
  const position = instance.position
    ? instance.position
    : objectDefaults.position
  const rotation = instance.rotation
    ? instance.rotation
    : objectDefaults.rotation
  const scale = instance.scale ? instance.scale : objectDefaults.scale
  return [position, rotation, scale]
}

export const getInitialState = (instance) => {
  const position = instance.position
    ? arrayToVec(instance.position)
    : arrayToVec(objectDefaults.position)
  const rotation = instance.rotation
    ? arrayToVec(instance.rotation)
    : arrayToVec(objectDefaults.rotation)
  const scale = instance.scale
    ? arrayToVec(instance.scale)
    : arrayToVec(objectDefaults.scale)
  return [position, rotation, scale]
}

export const createMatrix4 = (position, rotation, scale) => {
  const quaternion = new Quaternion()
  const euler = new Euler()
  euler.setFromVector3(rotation)
  quaternion.setFromEuler(euler)
  const matrix = new Matrix4()
  matrix.compose(position, quaternion, scale)
  return matrix
}

export const getInitialialStateMatrix4 = (instance) => {
  const [position, rotation, scale] = getInitialState(instance)
  const matrix = createMatrix4(position, rotation, scale)
  return matrix
}
