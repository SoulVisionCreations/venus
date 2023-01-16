import { renderGeometry } from "../../Geometry/geometry";
import { renderMaterial } from "../../Material/material";

export const StandardObject = ({ ...props }) => {
  const renderGeometries = () => {
    return props.geometry.map((geometryProps, index) => {
      return renderGeometry({ ...geometryProps });
    });
  };
  const renderMaterials = () => {
    return props.material.map((materialProps, index) => {
      return renderMaterial({ ...materialProps });
    });
  };
  return (
    <mesh>
      {renderGeometries()}
      {renderMaterials()}
    </mesh>
  );
};
