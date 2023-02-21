import { Vector3 } from "three";
import { strongObject3DStateOfVectors, weakObject3DStateofArrays } from "../../types/object3DTypes";

export const getManualStateTrajectoryPoints = (stateIncrements: Array<weakObject3DStateofArrays>, state: {current: strongObject3DStateOfVectors}) => {
    const stateTrajectoryVec: Array<strongObject3DStateOfVectors> = [];
    stateIncrements.forEach((nextState) => {
        stateTrajectoryVec.push({
            position: nextState.position ? new Vector3(...nextState.position) : state.current.position,
            rotation: nextState.rotation ? new Vector3(...nextState.rotation) : state.current.rotation,
            scale: nextState.scale ? new Vector3(...nextState.scale) : state.current.scale,
        });
    });
    return stateTrajectoryVec;
}