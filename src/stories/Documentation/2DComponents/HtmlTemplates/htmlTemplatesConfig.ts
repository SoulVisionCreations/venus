import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, CameraTypes, ComponentTypes, HtmlTemplateTypes } from '../../../../types/enums';
import { HtmlTemplateProps } from '../../../../types/types';

export const getHtmlTemplatesConfig = ({ title, data, position, rotation, scale, divStyle, titleStyle, dataStyle }: HtmlTemplateProps) => {
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
                        type: HtmlTemplateTypes.ParagraphBox,
                        title,
                        data,
                        position,
                        rotation,
                        scale,
                        divStyle,
                        titleStyle,
                        dataStyle,
                    },
                ],
            },
        ],
    };
};
