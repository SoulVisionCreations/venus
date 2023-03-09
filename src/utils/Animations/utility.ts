import { Vector3 } from 'three';
import { strongObject3DStateOfArrays, strongObject3DStateOfVectors, weakObject3DStateofArrays } from '../../types/object3DTypes';
import { convertVec3ToArray } from '../utility';

export const getManualStateTrajectoryPoints = (
    stateIncrements: Array<weakObject3DStateofArrays>,
    state: { current: strongObject3DStateOfVectors }
): [Array<strongObject3DStateOfVectors>, Array<strongObject3DStateOfArrays>] => {
    const stateTrajectoryVec: Array<strongObject3DStateOfVectors> = [];
    const stateTrajectoryArr: Array<strongObject3DStateOfArrays> = [];
    const initialState = {
        current: {
            position: state.current.position.clone(),
            rotation: state.current.rotation.clone(),
            scale: state.current.scale.clone(),
            opacity: state.current.opacity,
        },
    };
    let currentOpacity = state.current.opacity;
    stateIncrements.forEach((nextState) => {
        const prevState = {
            current: {
                position: state.current.position.clone(),
                rotation: state.current.rotation.clone(),
                scale: state.current.scale.clone(),
            },
        };
        currentOpacity = nextState.opacity == undefined ? currentOpacity : currentOpacity + nextState.opacity;
        stateTrajectoryVec.push({
            position: nextState.position ? state.current.position.add(new Vector3(...nextState.position)) : state.current.position,
            rotation: nextState.rotation ? state.current.rotation.add(new Vector3(...nextState.rotation)) : state.current.rotation,
            scale: nextState.scale ? state.current.scale.add(new Vector3(...nextState.scale)) : state.current.scale,
            opacity: currentOpacity,
        });
        stateTrajectoryArr.push({
            position: nextState.position ? convertVec3ToArray(state.current.position) : convertVec3ToArray(prevState.current.position),
            rotation: nextState.rotation ? convertVec3ToArray(state.current.rotation) : convertVec3ToArray(prevState.current.rotation),
            scale: nextState.scale ? convertVec3ToArray(state.current.scale) : convertVec3ToArray(prevState.current.scale),
            opacity: currentOpacity,
        });
    });
    state = initialState;
    return [stateTrajectoryVec, stateTrajectoryArr];
};
