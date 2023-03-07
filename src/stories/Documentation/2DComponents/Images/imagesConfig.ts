import { stylingDefaults } from '../../../../constants/defaults';
import { Alignment, AssetTypes, CameraTypes, ComponentTypes } from '../../../../types/enums';
import { ImageProps } from '../../../../types/types';

export const getImagesConfig = ({ position, rotation, scale, zoom, color, grayscale, transparent, opacity }: ImageProps) => {
    return {
        type: ComponentTypes.Container,
        alignment: Alignment.Vertical,
        assets: [{ assetId: '1001', assetPath: './assets/image/storyimage.jpeg', assetType: AssetTypes.Image }],
        children: [
            {
                type: ComponentTypes.Canvas,
                style: stylingDefaults.fullWidthFullHeightCanvas,
                camera: {
                    type: CameraTypes.Perspective,
                    position: [0, 0, 3],
                    far: 30,
                },
                assetIds: ['1001'],
                images: [
                    {
                        assetId: '1001',
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
