import { Html } from "@react-three/drei";
import { HtmlTypes } from "../../../Configs/types";
import { htmlDefaults } from "../../../Constants/defaults";

export const renderHtml = ({ ...props }) => {
  const scale = props.scale ? props.scale : htmlDefaults.scale;
  console.log(props);
  switch (props.type) {
    case HtmlTypes.priceTag:
      return (
        <Html scale={scale} {...props}>
          <div className="annotation">{props.price}</div>
        </Html>
      );
    default:
      return <Html>{props.text}</Html>;
  }
};
