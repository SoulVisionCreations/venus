export const enum ObjectTypes {
    ImplicitObject,
    MeshObject,
    StandardObject,
    Text3D,
}

export enum StandardGeometryTypes {
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
    PointGeometry,
}

export enum MaterialTypes {
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
    line1D,
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

export enum SceneControlTypes {
    None,
    Orbit,
}

export enum CameraTypes {
    Perspective,
    Orthographic,
}

export enum LightTypes {
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
    Video,
}

export enum TextTypes {
    Paragraph,
    List,
}

export enum HtmlTemplateTypes {
    ParagraphBox,
    NumberedListBox,
    BulletedListBox,
}

export const enum Alignment {
    Vertical,
    Horizontal,
}

export const enum AssetTypes {
    Implicit,
    Mesh,
    Image,
    Font,
}

export const enum implicitResolution {
    low = 'low',
    high = 'high',
}
