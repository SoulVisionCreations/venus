import Geometry from "../../Geometry/geometry";
import Material from "../../Material/material";
import { renderObjectHtmls } from "../object3D";

const StandardObject = ({ objectProps, sceneProps }) => {
  const renderGeometries = () => {
    return objectProps.geometry.map((geometryProps, index) => {
      return <Geometry { ...geometryProps} />;
    });
  };
  const renderMaterials = () => {
    return objectProps.material.map((materialProps, index) => {
      return <Material { ...materialProps } />;
    });
  };
  return (
    <mesh>
      {renderGeometries()}
      {renderMaterials()}
      {objectProps.objectHtmls && renderObjectHtmls(objectProps.objectHtmls)}
    </mesh>
  );
};

export default StandardObject;
