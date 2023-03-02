import { stylingDefaults } from "../../constants/defaults";
import { Alignment, ComponentTypes } from "../../types/enums";
import { ContainerNodeProps } from "../../types/types";

export const videoConfig3: ContainerNodeProps = {
    type: ComponentTypes.Container,
    alignment: Alignment.Vertical,
    children: [
        {
            type: ComponentTypes.Video,
            style: stylingDefaults.fullWidthFullHeightCanvas,
            src: 'unmasked_novelviews_low_sine.mov',
        },
    ],
};
