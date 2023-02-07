export const enum ObjectTypes {
  ImplicitObject,
  GltfObject,
  StandardObject,
  Text3D,
}

export const enum StandardGeometryTypes {
  BoxGeometry,
  CapsuleGeometry,
  CircleGeometry,
  ConeGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  EdgesGeometry,
  ExtrudeGeometry,
  IcosahedronGeometry,
  LatheGeometry,
  OctahedronGeometry,
  PlaneGeometry,
  PolyhedronGeometry,
  RingGeometry,
  ShapeGeometry,
  SphereGeometry,
  TetrahedronGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  TubeGeometry,
  WireframeGeometry,
}

export const enum MaterialTypes {
  LineBasicMaterial,
  LineDashedMaterial,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  MeshPhongMaterial,
  PointsMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  ShadowMaterial,
  SpriteMaterial,
}

export const enum ObjectHtmlTypes {
  PriceTag,
  Custom,
}

export const enum SceneEffectsTypes {
  DisableScrollOnceOnCompletelyVisible,
}

export const enum AnimationTypes {
  intro,
  chained,
  scroll,
}

export const enum AnimationTrajectory {
  manual,
  ellipse,
  circle,
  curveDefinedByPoints,
  multipleCurveDefinedByPoints,
}

export const enum InstanceMeshAnimationTypes {
  Rotate,
  Float,
}

export const enum eventDrivenActionTypes {
  rotateByScrollOnce,
  rotateByScrollContinously,
}

export const enum ObjectControlTypes {
  NoControls,
  BouncyPresentation,
}

export const enum SceneControlTypes {
  Orbit,
}

export const enum CameraTypes {
  Perspective,
  Orthographic,
  Cube,
}

export const enum LightTypes {
  Ambient,
  Directional,
  Point,
  Spot,
  Hemisphere,
  Rectangular,
}

export const enum ComponentTypes {
  Container,
  Canvas,
}

export const enum TextType {
  Paragraph,
  List,
}

export const enum ImageTypes {
  Rounded,
  Circle,
  Square,
  Icon,
}

export const enum Alignment {
  Vertical,
  Horizontal,
}
