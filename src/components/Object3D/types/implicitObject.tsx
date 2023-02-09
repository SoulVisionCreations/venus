import InstanceMesh from '../../InstanceMesh';
import { Mesh } from '../../mesh';
import { getAssetbyId } from '../../../utils/download';
import { ScenePropsType } from '../../Scene';
import { implicitObjectProps } from '../../../types/object3DTypes';
import { BufferGeometry, Material } from 'three';

export interface ImplicitAssetProps {
    geometry: BufferGeometry;
    gSceneParams?: object;
    material: Material;
}

const ImplicitObject = ({ objectProps, sceneProps }: { objectProps: implicitObjectProps; sceneProps: ScenePropsType }) => {
    const asset: ImplicitAssetProps = getAssetbyId(objectProps.assetId);
    const useInstancing: boolean = !(objectProps.useInstancing == undefined) && objectProps.useInstancing;

    return useInstancing ? (
        <InstanceMesh geometry={asset.geometry} material={asset.material} gSceneParams={asset.gSceneParams} objectProps={objectProps} />
    ) : (
        <Mesh geometry={asset.geometry} material={asset.material} gSceneParams={asset.gSceneParams} objectProps={objectProps} sceneProps={sceneProps} />
    );
};

export default ImplicitObject;
