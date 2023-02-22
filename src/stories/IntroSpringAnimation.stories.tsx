import { Story } from '@storybook/react';
import App from '../App';
import { introSpringAnimationByRotateAndScaleConfig } from '../configs/Animation/SpringBased/introSpringAnimationByRotateAndScale';
import { AssetTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { configAssetModifier, getEnvFileUrl, getImplicitUrl } from './utility';

const skuMap = new Map<string, string>();
skuMap.set('plant','sku_2023-01-14_20-02-25');
skuMap.set('shoe', 'sku_2022-12-07_14-17-28');

const AppObjectSelectorWrapper: Story<{ skuId: string, resolution: implicitResolution, files: string | string[], background: boolean }> = ({ ...args }) => {
    const url = getImplicitUrl(skuMap.get(args.skuId) as string, args.resolution);
    const assetId = Symbol();
    const envFile = args.files ? getEnvFileUrl(args.files): '';
    const config = configAssetModifier(url, introSpringAnimationByRotateAndScaleConfig, AssetTypes.Implicit, ObjectTypes.ImplicitObject, assetId, {files: envFile, background: args.background});
    return <App config={config} />;
};

// eslint-disable-next-line storybook/story-exports
export default {
    title: 'Animations/Spring based',
    component: AppObjectSelectorWrapper,
    argTypes: {
        resolution: {
            control: 'radio',
            options: [implicitResolution.high, implicitResolution.low],
        },
        skuId: {
            control: 'radio',
            options: ['plant', 'shoe'],
        },
        files: {
            control: 'radio',
            options: ['neutral.hdr', 'photo_studio_01_4k_jun.hdr', 'photo_studio_broadway_hall_1k.hdr', "AVTR_HDRI_08.hdr", "AVTR_HDRI_07.hdr", "AVTR_HDRI_06.hdr" ],
        },
        background: {
            control: 'boolean',
        }
    },
};

export const IntroExample1 = AppObjectSelectorWrapper.bind({});

IntroExample1.args = {
    skuId: 'plant',
    resolution: implicitResolution.high,
    files: 'neutral.hdr',
    background: false,
};
