import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, CameraTypes, ComponentTypes } from '../../../../types/enums';
import { HtmlTemplateProps } from '../../../../types/types';

export const getHtmlTemplatesConfig = ({ type, title, data, position, rotation, scale, boxStyle, titleStyle, dataStyle }: HtmlTemplateProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 0, 3],
                    far: 30,
                },
                htmlTemplates: [
                    {
                        type,
                        title,
                        data,
                        position,
                        rotation,
                        scale,
                        boxStyle,
                        titleStyle,
                        dataStyle,
                    },
                ],
            },
        ],
    };
};
