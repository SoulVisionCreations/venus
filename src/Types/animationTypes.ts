import { AnimationTrajectory, AnimationTypes } from '../enums';
import { trajectoryMetaData } from './trajectoryTypes';

export type springConfig = {
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

type animationTrajectoryMetaData = trajectoryMetaData & {
    speed?: number;
    rotationTrajectory?: rotationTrajectory;
    scaleTrajectory?: scaleTrajectory;
};

export type animationManualTrajectoryData = {
    trajectory: AnimationTrajectory;
    config: springConfig;
    stateIncrements: Array<ObjectState>;
};

export type animationGeneratedTrajectoryData = {
    trajectory: AnimationTrajectory;
    config: springConfig;
    trajectoryMetaData: animationTrajectoryMetaData;
};

export type animationTrajectoryData = animationManualTrajectoryData | animationGeneratedTrajectoryData;

export type IntroAnimation = {
    type: AnimationTypes;
    initialPause?: number;
} & animationTrajectoryData;

export type ChainedAnimation = {
    type: AnimationTypes;
    initialPause?: number;
    repeat: boolean;
    interval?: number;
    childAnimations: Array<animationTrajectoryData>;
};

export type scrollAnimation = {
    type: AnimationTypes;
    visibilityThreshold?: { top: number; bottom: number };
} & animationTrajectoryData;

export type Animation = scrollAnimation | IntroAnimation | ChainedAnimation;
