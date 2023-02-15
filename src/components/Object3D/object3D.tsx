import { GltfObjectProps, ImplicitObjectProps, Object3DProps, ObjectHtmlProps, StandardObjectProps, Text3DObjectProps } from '../../types/object3DTypes';
import ImplicitObject from './types/implicitObject';
import GltfObject from './types/gltfObject';
import StandardObject from './types/standardObject';
import Text3DObject from './types/text3DObject';
import ObjectHtml from '../ObjectHtml';
import { SceneProps } from '../Scene';
import { ObjectTypes } from '../../types/enums';
import { objectDefaults } from '../../constants/defaults';

export const renderObjectHtmls = (objectHtmls: Array<ObjectHtmlProps>) => {
    return objectHtmls.map((objectHtmlProps: ObjectHtmlProps, index: number) => {
        return <ObjectHtml {...objectHtmlProps} key={index} />;
    });
};

export const Object3D = ({ objectProps, sceneProps }: { objectProps: Object3DProps; sceneProps: SceneProps }) => {
    if (objectProps.position == undefined) objectProps.position = objectDefaults.position;
    if (objectProps.rotation == undefined) objectProps.rotation = objectDefaults.rotation;
    if (objectProps.scale == undefined) objectProps.scale = objectDefaults.scale;
    switch (objectProps.type) {
        case ObjectTypes.ImplicitObject:
            return <ImplicitObject objectProps={objectProps as ImplicitObjectProps} sceneProps={sceneProps} />;
        case ObjectTypes.GltfObject:
            return <GltfObject objectProps={objectProps as GltfObjectProps} sceneProps={sceneProps} />;
        case ObjectTypes.StandardObject:
            return <StandardObject objectProps={objectProps as StandardObjectProps} sceneProps={sceneProps} />;
        case ObjectTypes.Text3D:
            return <Text3DObject objectProps={objectProps as Text3DObjectProps} sceneProps={sceneProps} />;
        default:
            return null;
    }
};
