import { AnimationTrajectory, AnimationTypes } from './enums';
import { TrajectoryMetaData } from './trajectoryTypes';

export type SpringConfig = {
    mass?: number;
    tension?: number;
    friction?: number;
    clamp?: boolean;
    velocity?: number;
    damping?: number;
    duration?: number;
};

export type ObjectState = {
    position?: number[];
    rotation?: number[];
    scale?: number[];
};

type rotationTrajectory = {
    axis: number[];
    frequency: number;
};

type scaleTrajectory = {
    scaleRatio: number[];
};

type AnimationTrajectoryMetaData = TrajectoryMetaData & {
    speed?: number;
    rotationTrajectory?: rotationTrajectory;
    scaleTrajectory?: scaleTrajectory;
};

export type AnimationManualTrajectoryData = {
    initialPause?: number;
    trajectory: AnimationTrajectory;
    config?: SpringConfig;
    stateIncrements: Array<ObjectState>;
};

export type AnimationGeneratedTrajectoryData = {
    initialPause?: number;
    trajectory: AnimationTrajectory;
    config?: SpringConfig;
    trajectoryMetaData: AnimationTrajectoryMetaData;
};

export type AnimationTrajectoryData = object | AnimationManualTrajectoryData | AnimationGeneratedTrajectoryData;

export type IntroAnimation = {
    type: AnimationTypes;
    initialPause?: number;
} & AnimationTrajectoryData;

export type ChainedAnimation = {
    type: AnimationTypes;
    initialPause?: number;
    repeat: boolean;
    interval?: number;
    childAnimations: Array<AnimationTrajectoryData>;
};

export type VisibilityThreshold = { top: number; bottom: number };

export type ScrollAnimation = {
    type: AnimationTypes;
    visibilityThreshold?: VisibilityThreshold;
    rotationMetaData?: {
        axis: number[];
        velocity: number;
    };
    scaleMetaData?: {
        scaleRatio: number[];
        velocity: number;
        minScale: number[];
        maxScale: number[];
    };
    config?: SpringConfig;
} & AnimationTrajectoryData;

export type Animation = ScrollAnimation | IntroAnimation | ChainedAnimation;
