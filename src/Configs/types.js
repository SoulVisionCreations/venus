export const ObjectTypes = {
  ImplicitObject: 0,
  GltfObject: 1,
  StandardObject: 2,
  Text3D: 3,
}

export const StandardGeometryTypes = {
  BoxGeometry: 0,
  CapsuleGeometry: 1,
  CircleGeometry: 2,
  ConeGeometry: 3,
  CylinderGeometry: 4,
  DodecahedronGeometry: 5,
  EdgesGeometry: 6,
  ExtrudeGeometry: 7,
  IcosahedronGeometry: 8,
  LatheGeometry: 9,
  OctahedronGeometry: 10,
  PlaneGeometry: 11,
  PolyhedronGeometry: 12,
  RingGeometry: 13,
  ShapeGeometry: 14,
  SphereGeometry: 15,
  TetrahedronGeometry: 16,
  TorusGeometry: 17,
  TorusKnotGeometry: 18,
  TubeGeometry: 19,
  WireframeGeometry: 20,
}

export const MaterialTypes = {
  LineBasicMaterial: 0,
  LineDashedMaterial: 1,
  MeshBasicMaterial: 2,
  MeshDepthMaterial: 3,
  MeshDistanceMaterial: 4,
  MeshLambertMaterial: 5,
  MeshMatcapMaterial: 6,
  MeshNormalMaterial: 7,
  MeshPhongMaterial: 8,
  MeshPhysicalMaterial: 9,
  MeshStandardMaterial: 10,
  MeshToonMaterial: 11,
  MeshPhongMaterial: 12,
  PointsMaterial: 13,
  RawShaderMaterial: 14,
  ShaderMaterial: 15,
  ShadowMaterial: 16,
  SpriteMaterial: 17,
}

export const ObjectHtmlTypes = {
  PriceTag: 0,
  Custom: 1,
}

export const SceneEffectsTypes = {
  DisableScrollOnceOnCompletelyVisible: 0,
}

export const Animation = {
  type: {
    intro: 0,
    chained: 1,
    scroll: 2,
  },
  trajectory: {
    manual: 0,
    ellipse: 1,
    circle: 2,
    curveDefinedByPoints: 3,
    multipleCurveDefinedByPoints: 4,
  },
}

export const AnimationTypes = {
  Rotate: 0,
  Float: 1,
}

export const eventDrivenActionTypes = {
  rotateByScrollOnce: 0,
  rotateByScrollContinously: 1,
}

export const ObjectControlTypes = {
  NoControls: 0,
  BouncyPresentation: 1,
}

export const SceneControlTypes = {
  Orbit: 0,
}

export const CameraTypes = {
  Perspective: 0,
  Orthographic: 1,
  Cube: 2,
}

export const LightTypes = {
  Ambient: 0,
  Directional: 1,
  Point: 2,
  Spot: 3,
  Hemisphere: 4,
  Rectangular: 5,
}

export const ComponentTypes = {
  Container: 0,
  Canvas: 1,
}

export const TextTypes = {
  Paragraph: 0,
  List: 1,
}

export const ImageTypes = {
  Rounded: 0,
  Circle: 1,
  Square: 2,
  Icon: 3,
}

export const Alignment = {
  Vertical: 0,
  Horizontal: 1,
}
