import { Vector3, Euler, BufferGeometry, Material } from 'three'

export interface AvataarLoaderPropsType {
  position: Vector3
  rotation: Euler
  scale: number
  center: boolean
}

export interface GeometryPropsType {
  type: any
  width: number
  height: number
  length: number
  depth: number
  widthSegments: number
  heightSegments: number
  depthSegments: number
  radius: number
  capSubdivisions: number
  radialSegments: number
  openEnded: boolean
  thetaStart: number
  thetaLength: number
  radiusTop: number
  radiusBottom: number
  radiusLeft: number
  detail: number
  geometry: any
  thresholdAngle: number
  shapes: any
  option: any
  points: any
  segments: number
  vertices: any
  indices: any
  innerRadius: number
  outerRadius: number
  phiStart: number
  phiLength: number
  phiSegments: number
  tube: number
  tubularSegments: number
  arc: any
  p: any
  q: any
  thetaSegments: number
  curveSegments: number
  closed: boolean
  path: string
}

export interface ImagePropsType {
  assetId: string
  position: Vector3
  rotation: Euler
  scale: number
  type: any
  imgSrc: string
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
  width: number
  type: any
}

export interface MaterialPropsType {
  type: any
}

export interface ObjectPropsType {
  position: Vector3
  rotation: Euler
  scale: Vector3
  assetId: string
  objectHtmls: ObjectHtmlPropsType[]
  type: any
  useInstancing: boolean
  geometry: GeometryPropsType
  material: MaterialPropsType
  text: string
  color: string
}

export interface ImplicitAssetPropsType {
  geometry: BufferGeometry
  material: Material
  gSceneParams?: object
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
