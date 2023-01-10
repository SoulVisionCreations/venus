import { PresentationControls } from "@react-three/drei";
import { objectDefaults } from "../../Constants/defaults";
import { renderHtml } from "../../Components/Html/html";

export default function Bouncy({ ObjRef, ...props }) {
  const position =
    props.position != undefined
      ? props.position
      : objectDefaults.position;
  const scale =
    props.scale != undefined ? props.scale : objectDefaults.scale;

  const renderHtmls = () => {
    return props.htmls.map((htmlProps, index) => {
      return renderHtml(htmlProps);
    });
  };

  return (
    <PresentationControls
      global
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 4, tension: 1500 }}
      rotation={[0, 0.3, 0]}
      polar={[-Math.PI / 3, Math.PI / 3]}
      azimuth={[-Math.PI / 1.4, Math.PI / 2]}
    >
      <primitive object={ObjRef} position={position} scale={scale}>
        {props.htmls && renderHtmls()}
      </primitive>
    </PresentationControls>
  );
}
