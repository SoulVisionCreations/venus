import produce from 'immer';
import { create } from 'zustand';
import { Animation, AnimationTrajectory, ChainedAnimation, IntroAnimation, ScrollAnimation, VisibilityThreshold } from '../../../types/animationTypes';
import { AnimationTypes } from '../../../types/enums';
import { TrajectoryMetaData } from '../../../types/trajectoryTypes';
import { unknownObject } from '../../../types/types';
import { initialTrajectoryMetaData } from './animationDefaults';

export type ScrollAnimationActions = {
    setDisablePageScroll: (disablePageScroll: boolean) => void;
    setRotateOnScroll: (value: number, prop: string) => void;
};

export type ChainedAnimationActions = {
    setInitialPause: (initialPause: number) => void;
    setRepeat: (repeat: boolean) => void;
    setInterval: (interval: number) => void;
    setChildAnimations: (animations: Animation) => void;
};

export type IntroAnimationActions = {
    setInitialPause: (initialPause: number) => void;
    setAnimationTrajectories: (animationTrajectory: AnimationTrajectory) => void;
    removeAnimationTrajectory: (prop: string) => void;
    setTrajectorySteps: (trajectorySteps: number) => void;
    setStateIncrements: (stateIncrements: number) => void;
    setTrajectoryMetaData: (trajectoryMetaData: TrajectoryMetaData, prop: string) => void;
    setTrajectorySpeed: (trajectorySpeed: number, prop: string) => void;
};

export type AnimationActions = {
    setShowAnimation: (show: boolean) => void;
    setType: (type: AnimationTypes) => void;
    setSpringConfig: (value: number, prop: string) => void;
    setVisibilityThreshold: (value: number, prop: string) => void;
    resetAnimation: () => void;
} & (ScrollAnimationActions | ChainedAnimationActions | IntroAnimationActions);

const InitialChainedAnimationState: ChainedAnimation = {
    initialPause: 0,
    repeat: false,
    interval: 0,
    childAnimations: [],
};

const InitialIntroAnimationState: IntroAnimation = {
    initialPause: 0,
    animationTrajectories: {},
    trajectorySteps: 100,
    stateIncrements: [],
};

const IntitalScrollAnimationState: ScrollAnimation = {
    disablePageScroll: false,
    rotateOnScroll: {
        axis: [0, 0, 0],
        velocity: 0,
        maxRotation: 0,
        minRotation: 0,
    },
    animationTrajectories: {},
};

const InitialState: Animation & unknownObject = {
    showAnimation: false,
    type: AnimationTypes.intro,
    springConfig: {
        duration: 0,
        mass: 0,
        friction: 0,
        tension: 0,
    },
    visibilityThreshold: {
        sceneTopToScreenBottomRatio: 0,
        sceneBottomToScreenTopRatio: 0,
    },
    ...IntitalScrollAnimationState,
    ...InitialIntroAnimationState,
    ...InitialChainedAnimationState,
};

// stateIncrement: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1], opacity: 1 };

const useAnimationStore = create<Animation & unknownObject & AnimationActions>((set, get) => ({
    ...InitialState,
    setShowAnimation: (showAnimation) => set({ showAnimation }),
    setType: (type) => set({ type }),
    setSpringConfig: (value, prop) => {
        if (prop === 'duration') set((state) => ({ springConfig: { ...state.springConfig, duration: value } }));
        else if (prop === 'mass') set((state) => ({ springConfig: { ...state.springConfig, mass: value } }));
        else if (prop === 'friction') set((state) => ({ springConfig: { ...state.springConfig, friction: value } }));
        else if (prop === 'tension') set((state) => ({ springConfig: { ...state.springConfig, tension: value } }));
    },
    setVisibilityThreshold: (value, prop) => {
        if (prop === 'sceneTopToScreenBottomRatio') set((state) => ({ visibilityThreshold: { ...(state.visibilityThreshold as VisibilityThreshold), sceneTopToScreenBottomRatio: value } }));
        else if (prop === 'sceneBottomToScreenTopRatio') set((state) => ({ visibilityThreshold: { ...(state.visibilityThreshold as VisibilityThreshold), sceneBottomToScreenTopRatio: value } }));
    },
    setDisablePageScroll: (disablePageScroll) => set({ disablePageScroll }),
    setRotateOnScroll: (value, prop) => {
        if (prop === 'axisx') {
            set(
                produce((state) => {
                    state.rotateOnScroll.axis[0] = value;
                })
            );
        } else if (prop === 'axisy') {
            set(
                produce((state) => {
                    state.rotateOnScroll.axis[1] = value;
                })
            );
        } else if (prop === 'axisz') {
            set(
                produce((state) => {
                    state.rotateOnScroll.axis[2] = value;
                })
            );
        } else if (prop === 'velocity') set((state) => ({ rotateOnScroll: { ...(state as any).rotateOnScroll, velocity: value } }));
        else if (prop === 'maxRotation') set((state) => ({ rotateOnScroll: { ...(state as any).rotateOnScroll, maxRotation: value } }));
        else if (prop === 'minRotation') set((state) => ({ rotateOnScroll: { ...(state as any).rotateOnScroll, minRotation: value } }));
    },
    setInitialPause: (initialPause) => set({ initialPause }),
    setRepeat: (repeat) => set({ repeat }),
    setInterval: (interval) => set({ interval }),
    setChildAnimations: (childAnimations) => set({ childAnimations }),
    setAnimationTrajectories: (animationTrajectories) => set({ animationTrajectories }),
    removeAnimationTrajectory: (prop) => {
        const { animationTrajectories } = get();
        delete animationTrajectories[prop];
        set({ animationTrajectories });
    },
    setTrajectorySteps: (trajectorySteps) => set({ trajectorySteps }),
    setStateIncrements: (stateIncrements) => set({ stateIncrements }),
    setTrajectoryMetaData: (trajectoryMetaData, prop) => {
        set(
            produce((state) => {
                state.animationTrajectories[prop] = { trajectoryMetaData };
            })
        );
        set({ trajectoryMetaData: initialTrajectoryMetaData });
    },
    setTrajectorySpeed: (speed, prop) => {
        set(
            produce((state) => {
                state.animationTrajectories[prop].speed = speed;
            })
        );
        set({ speed: 0 });
    },
    resetAnimation: () => set(InitialState),
}));

const AnimationStoreState = useAnimationStore.getState;

export { AnimationStoreState };

export default useAnimationStore;
