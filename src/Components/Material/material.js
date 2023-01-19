import { MaterialTypes } from "../../Configs/types";

export const renderMaterial = ({ ...props }) => {
  switch (props.materialType) {
    case MaterialTypes.MeshBasicMaterial:
      return <meshBasicMaterial {...props} />;
    case MaterialTypes.MeshLambertMaterial:
      return <meshLambertMaterial {...props} />;
    case MaterialTypes.MeshStandardMaterial:
      return <meshStandardMaterial {...props} />;
    case MaterialTypes.MeshPhongMaterial:
      return <meshPhongMaterial {...props} />;
    case MaterialTypes.MeshToonMaterial:
      return <meshToonMaterial {...props} />;
    case MaterialTypes.MeshDepthMaterial:
      return <meshDepthMaterial {...props} />;
    case MaterialTypes.MeshDistanceMaterial:
      return <meshDistanceMaterial {...props} />;
    case MaterialTypes.MeshMatcapMaterial:
      return <meshMatcapMaterial {...props} />;
    case MaterialTypes.MeshNormalMaterial:
      return <meshNormalMaterial {...props} />;
    case MaterialTypes.MeshPhongMaterial:
      return <meshPhongMaterial {...props} />;
    case MaterialTypes.MeshPhysicalMaterial:
      return <meshPhysicalMaterial {...props} />;
    case MaterialTypes.RawShaderMaterial:
      return <rawShaderMaterial {...props} />;
  }
};
