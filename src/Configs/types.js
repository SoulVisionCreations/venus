export const ObjectTypes = {
  ImplicitObject: 0,
  GltfObject: 1,
  StandardObject: 2,
  Text3D: 3,
};

export const StandardGeometryTypes = {
  WireframeGeometry: 0,
  TetrahedronGeometry: 1,
  OctahedronGeometry: 2,
  IcosahedronGeometry: 3,
  DodecahedronGeometry: 4,
  PolyhedronGeometry: 5,
  TubeGeometry: 6,
  TorusKnotGeometry: 7,
  TorusGeometry: 8,
  SphereGeometry: 9,
  RingGeometry: 10,
  PlaneGeometry: 11,
  LatheGeometry: 12,
  ShapeGeometry: 13,
  ExtrudeGeometry: 14,
  EdgesGeometry: 15,
  ConeGeometry: 16,
  CylinderGeometry: 17,
  CircleGeometry: 18,
  BoxGeometry: 19,
  CapsuleGeometry: 20,
};

export const MaterialTypes = {
  MeshPhysicalMaterial: 0,
  MeshStandardMaterial: 1,
  MeshPhongMaterial: 2,
  MeshToonMaterial: 3,
  MeshNormalMaterial: 4,
  MeshLambertMaterial: 5,
  MeshDepthMaterial: 6,
  MeshDistanceMaterial: 7,
  MeshBasicMaterial: 8,
  MeshMatcapMaterial: 9,
  RawShaderMaterial: 10,
};

export const HtmlTypes = {
  PriceTag: 0,
  Custom: 1,
};

export const SceneEffectsTypes = {
  DisableScrollOnceOnCompletelyVisible: 0,
};

export const Animation = {
  type: {
    intro: 0,
    chained: 1
  },
  trajectory: {
    manual: 0,
    ellipse: 1,
    circle: 2,
    curveDefinedByPoints: 3
  }
};

export const AnimationTypes = {
  Rotate: 0,
  Float: 1,
};

export const eventDrivenActionTypes = {
  rotateByScrollOnce: 0,
  rotateByScrollContinously: 1,
};

export const ObjectControlTypes = {
  NoControls: 0,
  BouncyPresentation: 1,
};

export const SceneControlTypes = {
  Orbit: 0,
};

export const CameraTypes = {
  Perspective: 0,
  Orthographic: 1,
  Cube: 2,
};

export const LightTypes = {
  Ambient: 0,
  Directional: 1,
  Point: 2,
  Spot: 3,
  Hemisphere: 4,
  Rectangular: 5,
};

export const ComponentTypes = {
  Container: 0,
  Canvas: 1,
};

export const TextTypes = {
  Paragraph: 0,
  List: 1
}

export const Alignment = {
  Vertical: 0,
  Horizontal: 1,
};
