import produce from 'immer';
import { create } from 'zustand';
import { AnimationTrajectory, IntroAnimation } from '../../../types/animationTypes';
import { weakObject3DStateofArrays } from '../../../types/object3DTypes';
import { TrajectoryMetaData } from '../../../types/trajectoryTypes';
import { unknownObject } from '../../../types/types';

export type IntroAnimationActions = {
    setShow: (show: boolean) => void;
    setInitialPause: (initialPause: number) => void;
    setAnimationTrajectoryMetaData: (trajectoryMetaData: TrajectoryMetaData, pos: string) => void;
    setAnimationTrajectoryVelocity: (velocity: number, pos: string) => void;
    setTrajectorySteps: (trajectorySteps: AnimationTrajectory) => void;
    addStateIncrement: (stateIncrement: weakObject3DStateofArrays) => void;
    removeStateIncrement: (id: number) => void;
    setPosition: (value: number, pos: string) => void;
    setRotation: (value: number, pos: string) => void;
    setScale: (value: number, pos: string) => void;
    setOpacity: (opacity: number) => void;
    resetStateIncrement: () => void;
    resetIntroAnimation: () => void;
};

const InitialIntroAnimationState: IntroAnimation = {
    initialPause: 0,
    animationTrajectories: {},
    trajectorySteps: 100,
    stateIncrements: [],
};

const InitialStateIncrementState: weakObject3DStateofArrays = {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    opacity: 1,
};

const InitialState: IntroAnimation & unknownObject & weakObject3DStateofArrays = {
    show: false,
    ...InitialIntroAnimationState,
    ...InitialStateIncrementState,
};

const useIntroAnimationStore = create<IntroAnimation & unknownObject & IntroAnimationActions>((set, get) => ({
    ...InitialState,
    setShow: (showAnimation) => set({ showAnimation }),
    setInitialPause: (initialPause) => set({ initialPause }),
    setAnimationTrajectoryMetaData: (trajectoryMetaData, prop) => {
        set(
            produce((state) => {
                state.animationTrajectories[prop].trajectoryMetaData = trajectoryMetaData;
            })
        );
    },
    setAnimationTrajectoryVelocity: (velocity, prop) => {
        set(
            produce((state) => {
                state.animationTrajectories[prop].velocity = velocity;
            })
        );
    },
    setTrajectorySteps: (trajectorySteps) => set({ trajectorySteps }),
    addStateIncrement: (stateIncrement) =>
        set((state) => ({
            stateIncrements: [...state.stateIncrements, stateIncrement],
        })),
    removeStateIncrement: (id) => {
        const { stateIncrements } = get();
        stateIncrements.splice(id, 1);
        set({ stateIncrements });
    },
    setPosition: (value, pos) => {
        if (pos === 'x') set((state) => ({ position: [value, (state.position as any)[1], (state.position as any)[2]] }));
        else if (pos === 'y') set((state) => ({ position: [(state.position as any)[0], value, (state.position as any)[2]] }));
        else if (pos === 'z') set((state) => ({ position: [(state.position as any)[0], (state.position as any)[1]], value }));
    },
    setRotation: (value, rot) => {
        if (rot === 'x') set((state) => ({ rotation: [value, (state.rotation as any)[1], (state.rotation as any)[2]] }));
        else if (rot === 'y') set((state) => ({ rotation: [(state.rotation as any)[0], value, (state.rotation as any)[2]] }));
        else if (rot === 'z') set((state) => ({ rotation: [(state.rotation as any)[0], (state.rotation as any)[1]], value }));
    },
    setScale: (value, scl) => {
        if (scl === 'x') set((state) => ({ scale: [value, (state.scale as any)[1], (state.scale as any)[2]] }));
        else if (scl === 'y') set((state) => ({ scale: [(state.scale as any)[0], value, (state.scale as any)[2]] }));
        else if (scl === 'z') set((state) => ({ scale: [(state.scale as any)[0], (state.scale as any)[1]], value }));
    },
    setOpacity: (opacity) => set({ opacity }),
    resetStateIncrement: () => {
        set({ position: InitialStateIncrementState.position });
        set({ rotation: InitialStateIncrementState.rotation });
        set({ scale: InitialStateIncrementState.scale });
        set({ opacity: InitialStateIncrementState.opacity });
    },
    resetIntroAnimation: () => set(InitialState),
}));

const IntroAnimationStoreState = useIntroAnimationStore.getState;

export { IntroAnimationStoreState };

export default useIntroAnimationStore;
