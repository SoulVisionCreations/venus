import {
  LineBasicMaterial,
  LineDashedMaterial,
  Material,
  MeshBasicMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshLambertMaterial,
  MeshMatcapMaterial,
  MeshNormalMaterial,
  MeshPhongMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshToonMaterial,
  PointsMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  ShadowMaterial,
  SpriteMaterial,
} from 'three';
import { MaterialProps } from '../../Types/types';
import { MaterialTypes } from '../../enums';

const MaterialLoader = ({ type, ...props }: MaterialProps): Material | null => {
  switch (type) {
    case MaterialTypes.LineBasicMaterial:
      return new LineBasicMaterial(props);
    case MaterialTypes.LineDashedMaterial:
      return new LineDashedMaterial(props);
    case MaterialTypes.MeshBasicMaterial:
      return new MeshBasicMaterial(props);
    case MaterialTypes.MeshDepthMaterial:
      return new MeshDepthMaterial(props);
    case MaterialTypes.MeshDistanceMaterial:
      return new MeshDistanceMaterial(props);
    case MaterialTypes.MeshLambertMaterial:
      return new MeshLambertMaterial(props);
    case MaterialTypes.MeshMatcapMaterial:
      return new MeshMatcapMaterial(props);
    case MaterialTypes.MeshNormalMaterial:
      return new MeshNormalMaterial(props);
    case MaterialTypes.MeshPhongMaterial:
      return new MeshPhongMaterial(props);
    case MaterialTypes.MeshPhysicalMaterial:
      return new MeshPhysicalMaterial(props);
    case MaterialTypes.MeshStandardMaterial:
      return new MeshStandardMaterial(props);
    case MaterialTypes.MeshToonMaterial:
      return new MeshToonMaterial(props);
    case MaterialTypes.MeshPhongMaterial:
      return new MeshPhongMaterial(props);
    case MaterialTypes.PointsMaterial:
      return new PointsMaterial(props);
    case MaterialTypes.RawShaderMaterial:
      return new RawShaderMaterial(props);
    case MaterialTypes.ShaderMaterial:
      return new ShaderMaterial(props);
    case MaterialTypes.ShadowMaterial:
      return new ShadowMaterial(props);
    case MaterialTypes.SpriteMaterial:
      return new SpriteMaterial(props);
    default:
      return null;
  }
};

export default MaterialLoader;
