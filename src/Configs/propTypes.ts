import { Vector3, Euler, BufferGeometry, Shape, Vector2 } from 'three'

export interface AvataarLoaderPropsType {
  center: boolean
  position: Vector3
  rotation: Euler
  scale: number
}

export interface GeometryPropsType {
  arc: number
  capSubdivisions: number
  closed: boolean
  curveSegments: number
  depth: number
  depthSegments: number
  detail: number
  geometry: BufferGeometry
  height: number
  heightSegments: number
  indices: Array<number>
  innerRadius: number
  length: number
  openEnded: boolean
  options: object
  outerRadius: number
  p: number
  path: any
  phiLength: number
  phiSegments: number
  phiStart: number
  points: Array<Vector2>
  q: number
  radialSegments: number
  radius: number
  radiusBottom: number
  radiusLeft: number
  radiusTop: number
  segments: number
  shapes: Shape | Array<Shape>
  thetaLength: number
  thetaSegments: number
  thetaStart: number
  thresholdAngle: number
  tube: number
  tubularSegments: number
  type: any
  vertices: Array<number>
  width: number
  widthSegments: number
}

export interface ImagePropsType {
  assetId: string
  imgSrc: string
  position: Vector3
  rotation: Euler
  scale: number
  type: any
}

export interface LightPropsType {
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
  type: any
  width: number
}

export interface MaterialPropsType {
  type: any
}

export interface ObjectPropsType {
  assetId: string
  color: string
  geometry: GeometryPropsType
  material: MaterialPropsType
  objectHtmls: Array<ObjectHtmlPropsType>
  position: Vector3
  rotation: Euler
  scale: Vector3
  text: string
  type: any
  useInstancing: boolean
}

export interface ObjectHtmlPropsType {
  html: string
  position: Vector3
  price: number
  rotation: Euler
  scale: number
  type: any
}

export interface TextPropsType {
  list: Array<string>
  numbererd: boolean
  position: Vector3
  rotation: Euler
  scale: number
  text: string
  title: string
  type: any
}
