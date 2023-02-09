import { gltfObjectProps, implicitObjectProps, Object3DProps, ObjectHtmlProps, standardObjectProps, text3DObjectProps } from '../../Types/object3DTypes';
import ImplicitObject from './types/implicitObject';
import GltfObject from './types/gltfObject';
import StandardObject from './types/standardObject';
import Text3DObject from './types/text3DObject';
import ObjectHtml from '../ObjectHtml/objecthtml';
import { ScenePropsType } from '../Scene/Scene';
import { ObjectTypes } from '../../enums';
import React from 'react';

export const renderObjectHtmls = (objectHtmls: Array<ObjectHtmlProps>): JSX.Element[] => {
    return objectHtmls.map((objectHtmlProps: ObjectHtmlProps, index: number): JSX.Element => {
        return <ObjectHtml {...objectHtmlProps} key={index} />;
    });
};

export const Object3D = ({ objectProps, sceneProps }: { objectProps: Object3DProps; sceneProps: ScenePropsType }): JSX.Element | null => {
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
