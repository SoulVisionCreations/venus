import { gltfObjectProps, implicitObjectProps, Object3DProps, ObjectHtmlProps, standardObjectProps, text3DObjectProps } from '../../types/object3DTypes';
import ImplicitObject from './types/implicitObject';
import GltfObject from './types/gltfObject';
import StandardObject from './types/standardObject';
import Text3DObject from './types/text3DObject';
import ObjectHtml from '../ObjectHtml';
import { SceneProps } from '../Scene';
import { ObjectTypes } from '../../types/enums';

export const renderObjectHtmls = (objectHtmls: Array<ObjectHtmlProps>) => {
    return objectHtmls.map((objectHtmlProps: ObjectHtmlProps, index: number) => {
        return <ObjectHtml {...objectHtmlProps} key={index} />;
    });
};

export const Object3D = ({ objectProps, sceneProps }: { objectProps: Object3DProps; sceneProps: SceneProps }) => {
    switch (objectProps.type) {
        case ObjectTypes.ImplicitObject:
            return <ImplicitObject objectProps={objectProps as implicitObjectProps} sceneProps={sceneProps} />;
        case ObjectTypes.GltfObject:
            return <GltfObject objectProps={objectProps as gltfObjectProps} sceneProps={sceneProps} />;
        case ObjectTypes.StandardObject:
            return <StandardObject objectProps={objectProps as standardObjectProps} sceneProps={sceneProps} />;
        case ObjectTypes.Text3D:
            return <Text3DObject objectProps={objectProps as text3DObjectProps} sceneProps={sceneProps} />;
        default:
            return null;
    }
};
