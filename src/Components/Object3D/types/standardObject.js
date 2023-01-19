import { renderGeometry } from "../../Geometry/geometry";
import { renderMaterial } from "../../Material/material";

export const StandardObject = ({ objectPros, sceneProps }) => {
  const renderGeometries = () => {
    return objectPros.geometry.map((geometryProps, index) => {
      return renderGeometry({ ...geometryProps });
    });
  };
  const renderMaterials = () => {
    return objectPros.material.map((materialProps, index) => {
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
