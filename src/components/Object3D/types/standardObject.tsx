import Geometry from '../../Geometry';
import InstanceMesh from '../../InstanceMesh';
import MaterialLoader from '../../MaterialLoader';
import { Mesh } from '../../Mesh';
import { standardObjectProps } from '../../../types/object3DTypes';
import { SceneProps } from '../../Scene';

const StandardObject = ({ objectProps, sceneProps }: { objectProps: standardObjectProps; sceneProps: SceneProps }) => {
    const useInstancing: boolean = !(objectProps.useInstancing == undefined) && objectProps.useInstancing;
    const geometry = Geometry(objectProps.geometry);
    const material = MaterialLoader(objectProps.material);

    if (geometry && material) {
        return useInstancing ? (
            <InstanceMesh geometry={geometry} material={material} objectProps={objectProps} gSceneParams={null} />
        ) : (
            <Mesh geometry={geometry} material={material} objectProps={objectProps} sceneProps={sceneProps} gSceneParams={null} />
        );
    } else {
        return null;
    }
};

export default StandardObject;
