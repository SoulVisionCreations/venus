import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, CameraTypes, ComponentTypes } from '../../../../types/enums';
import { ImageProps } from '../../../../types/types';

export const getImagesConfig = ({ src, position, rotation, scale, zoom, color, grayscale, transparent, opacity }: ImageProps) => {
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
                images: [
                    {
                        assetId: '',
                        src,
                        position,
                        rotation,
                        scale,
                        zoom,
                        color,
                        grayscale,
                        transparent,
                        opacity,
                    },
                ],
            },
        ],
    };
};
