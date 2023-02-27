import { Vector3 } from 'three';
import { strongObject3DStateOfVectors, weakObject3DStateofArrays } from '../../types/object3DTypes';

export const getManualStateTrajectoryPoints = (stateIncrements: Array<weakObject3DStateofArrays>, state: { current: strongObject3DStateOfVectors }) => {
    const stateTrajectoryVec: Array<strongObject3DStateOfVectors> = [];
    const initialState = {current: {
        position: state.current.position.clone(),
        rotation: state.current.rotation.clone(),
        scale: state.current.scale.clone(),
    }};
    stateIncrements.forEach((nextState) => {
        stateTrajectoryVec.push({
            position: nextState.position ? state.current.position.add(new Vector3(...nextState.position)) : state.current.position,
            rotation: nextState.rotation ? state.current.rotation.add(new Vector3(...nextState.rotation)) : state.current.rotation,
            scale: nextState.scale ? state.current.scale.add(new Vector3(...nextState.scale)) : state.current.scale,
        });
    });
    state = initialState;
    return stateTrajectoryVec;
};
