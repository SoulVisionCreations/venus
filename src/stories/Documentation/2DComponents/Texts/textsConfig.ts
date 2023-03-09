import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, CameraTypes, ComponentTypes } from '../../../../types/enums';
import { TextProps } from '../../../../types/types';

export const getTextsConfig = ({
    title,
    data,
    color,
    fontSize,
    maxWidth,
    position,
    rotation,
    type,
    lineHeight,
    letterSpacing,
    textAlign,
    anchorX,
    anchorY,
    overflowWrap,
    whiteSpace,
    outlineWidth,
    outlineOffsetX,
    outlineOffsetY,
    outlineBlur,
    outlineColor,
    outlineOpacity,
    opacity,
    curveRadius,
    numbered,
}: TextProps) => {
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
                texts: [
                    {
                        title,
                        data,
                        color,
                        fontSize,
                        maxWidth,
                        position,
                        rotation,
                        type,
                        lineHeight,
                        letterSpacing,
                        textAlign,
                        anchorX,
                        anchorY,
                        overflowWrap,
                        whiteSpace,
                        outlineWidth,
                        outlineOffsetX,
                        outlineOffsetY,
                        outlineBlur,
                        outlineColor,
                        outlineOpacity,
                        opacity,
                        curveRadius,
                        numbered,
                    },
                ],
            },
        ],
    };
};
