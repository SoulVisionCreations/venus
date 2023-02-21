import { Story } from '@storybook/react';
import App from '../App';
import { introSpringAnimationByRotateAndScaleConfig } from '../configs/Animation/SpringBased/introSpringAnimationByRotateAndScale';
import { AssetTypes, implicitResolution, ObjectTypes } from '../types/enums';
import { configAssetModifier, getImplicitUrl } from './utility';

const AppObjectSelectorWrapper: Story<{ skuId: string; resolution: implicitResolution }> = ({ ...args }) => {
    const url = getImplicitUrl(args.skuId, args.resolution);
    const assetId = Symbol();
    const config = configAssetModifier(url, introSpringAnimationByRotateAndScaleConfig, AssetTypes.Implicit, ObjectTypes.ImplicitObject, assetId);
    console.log(config);
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
            options: ['sku_2023-01-14_20-02-25', 'sku_2022-12-07_14-17-28'],
        },
    },
};

export const IntroExample1 = AppObjectSelectorWrapper.bind({});

IntroExample1.args = {
    skuId: 'sku_2023-01-14_20-02-25',
    resolution: implicitResolution.high,
};
