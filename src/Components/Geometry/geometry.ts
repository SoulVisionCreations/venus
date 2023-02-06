import {
  BoxGeometry,
  ConeGeometry,
  CylinderGeometry,
  TorusGeometry,
  SphereGeometry,
  TorusKnotGeometry,
  RingGeometry,
  CapsuleGeometry,
  DodecahedronGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  TetrahedronGeometry,
  PolyhedronGeometry,
  TubeGeometry,
  CircleGeometry,
  EdgesGeometry,
  ExtrudeGeometry,
  LatheGeometry,
  PlaneGeometry,
  WireframeGeometry,
  BufferGeometry,
  ShapeGeometry,
} from 'three'
import { StandardGeometryTypes } from '../../Configs/types'

type GeometryProps = {
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

const generateParams = (props: GeometryProps): any => {
  switch (props.type) {
    case StandardGeometryTypes.BoxGeometry:
      return [
        props.width,
        props.height,
        props.depth,
        props.widthSegments,
        props.heightSegments,
        props.depthSegments,
      ]
    case StandardGeometryTypes.CapsuleGeometry:
      return [
        props.radius,
        props.length,
        props.capSubdivisions,
        props.radialSegments,
      ]
    case StandardGeometryTypes.CircleGeometry:
      return [
        props.radius,
        props.length,
        props.capSubdivisions,
        props.radialSegments,
      ]
    case StandardGeometryTypes.ConeGeometry:
      return [
        props.radius,
        props.height,
        props.radialSegments,
        props.heightSegments,
        props.openEnded,
        props.thetaStart,
        props.thetaLength,
      ]
    case StandardGeometryTypes.CylinderGeometry:
      return [
        props.radiusTop,
        props.radiusBottom,
        props.radiusLeft,
        props.height,
        props.radialSegments,
        props.heightSegments,
        props.openEnded,
        props.thetaStart,
        props.thetaLength,
      ]
    case StandardGeometryTypes.DodecahedronGeometry:
      return [props.radius, props.detail]
    case StandardGeometryTypes.EdgesGeometry:
      return [props.geometry, props.thresholdAngle]
    case StandardGeometryTypes.ExtrudeGeometry:
      return [props.shapes, props.option]
    case StandardGeometryTypes.IcosahedronGeometry:
      return [props.radius, props.detail]
    case StandardGeometryTypes.LatheGeometry:
      return [props.points, props.segments, props.phiStart, props.phiLength]
    case StandardGeometryTypes.OctahedronGeometry:
      return [props.radius, props.detail]
    case StandardGeometryTypes.PlaneGeometry:
      return [
        props.width,
        props.height,
        props.widthSegments,
        props.heightSegments,
      ]
    case StandardGeometryTypes.PolyhedronGeometry:
      return [props.vertices, props.indices, props.radius, props.detail]
    case StandardGeometryTypes.RingGeometry:
      return [
        props.innerRadius,
        props.outerRadius,
        props.thetaSegments,
        props.phiSegments,
        props.thetaStart,
        props.thetaLength,
      ]
    case StandardGeometryTypes.ShapeGeometry:
      return [props.shapes, props.curveSegments]
    case StandardGeometryTypes.SphereGeometry:
      return [
        props.radius,
        props.widthSegments,
        props.heightSegments,
        props.phiStart,
        props.phiLength,
        props.thetaStart,
        props.thetaLength,
      ]
    case StandardGeometryTypes.TetrahedronGeometry:
      return [props.radius, props.detail]
    case StandardGeometryTypes.TorusGeometry:
      return [
        props.radius,
        props.tube,
        props.radialSegments,
        props.tubularSegments,
        props.arc,
      ]
    case StandardGeometryTypes.TorusKnotGeometry:
      return [
        props.radius,
        props.tube,
        props.tubularSegments,
        props.radialSegments,
        props.p,
        props.q,
      ]
    case StandardGeometryTypes.TubeGeometry:
      return [
        props.path,
        props.tubularSegments,
        props.radius,
        props.radialSegments,
        props.closed,
      ]
    case StandardGeometryTypes.WireframeGeometry:
      return [props.geometry]
    default:
      return null
  }
}

const Geometry = (props: GeometryProps): BufferGeometry | null => {
  const params = generateParams(props)
  switch (props.type) {
    case StandardGeometryTypes.BoxGeometry:
      return new BoxGeometry(...params)
    case StandardGeometryTypes.CapsuleGeometry:
      return new CapsuleGeometry(...params)
    case StandardGeometryTypes.CircleGeometry:
      return new CircleGeometry(...params)
    case StandardGeometryTypes.ConeGeometry:
      return new ConeGeometry(...params)
    case StandardGeometryTypes.CylinderGeometry:
      return new CylinderGeometry(...params)
    case StandardGeometryTypes.DodecahedronGeometry:
      return new DodecahedronGeometry(...params)
    case StandardGeometryTypes.EdgesGeometry:
      return new EdgesGeometry(...params)
    case StandardGeometryTypes.ExtrudeGeometry:
      return new ExtrudeGeometry(...params)
    case StandardGeometryTypes.IcosahedronGeometry:
      return new IcosahedronGeometry(...params)
    case StandardGeometryTypes.LatheGeometry:
      return new LatheGeometry(...params)
    case StandardGeometryTypes.OctahedronGeometry:
      return new OctahedronGeometry(...params)
    case StandardGeometryTypes.PlaneGeometry:
      return new PlaneGeometry(...params)
    case StandardGeometryTypes.PolyhedronGeometry:
      return new PolyhedronGeometry(...params)
    case StandardGeometryTypes.RingGeometry:
      return new RingGeometry(...params)
    case StandardGeometryTypes.ShapeGeometry:
      return new ShapeGeometry(...params)
    case StandardGeometryTypes.SphereGeometry:
      return new SphereGeometry(...params)
    case StandardGeometryTypes.TetrahedronGeometry:
      return new TetrahedronGeometry(...params)
    case StandardGeometryTypes.TorusGeometry:
      return new TorusGeometry(...params)
    case StandardGeometryTypes.TorusKnotGeometry:
      return new TorusKnotGeometry(...params)
    case StandardGeometryTypes.TubeGeometry:
      return new TubeGeometry(...params)
    case StandardGeometryTypes.WireframeGeometry:
      return new WireframeGeometry(...params)
    default:
      return null
  }
}

export default Geometry
