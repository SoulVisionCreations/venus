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

export const enum Trajectory {
    manual,
    ellipse,
    circle,
    line3,
    quadracticBezierCurve3,
    cubicBezierCurve3,
    splineCurve3,
    multipleCurvePath,
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

export const enum TextTypes {
    Paragraph,
    List,
}

export const enum Alignment {
    Vertical,
    Horizontal,
}

export const enum AssetTypes {
    Implicit,
    Gltf,
    Image,
    Font,
}

export const enum implicitResolution {
    low = 'low',
    high = 'high',
}
