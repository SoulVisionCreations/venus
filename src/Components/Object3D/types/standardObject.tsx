import Geometry from '../../Geometry';
import InstanceMesh from '../../InstanceMesh';
import MaterialLoader from '../../MaterialLoader';
import { Mesh } from '../../mesh';
import { standardObjectProps } from '../../../types/object3DTypes';
import { ScenePropsType } from '../../Scene';

const StandardObject = ({ objectProps, sceneProps }: { objectProps: standardObjectProps; sceneProps: ScenePropsType }): JSX.Element => {
    const useInstancing: boolean = !(objectProps.useInstancing == undefined) && objectProps.useInstancing;

    return useInstancing ? (
        <InstanceMesh
            geometry={Geometry(objectProps.geometry)}
            material={MaterialLoader(objectProps.material)}
            objectProps={objectProps}
            gSceneParams={null}
        />
    ) : (
        <Mesh
            geometry={Geometry(objectProps.geometry)}
            material={MaterialLoader(objectProps.material)}
            objectProps={objectProps}
            sceneProps={sceneProps}
            gSceneParams={null}
        />
    );
};

export default StandardObject;
