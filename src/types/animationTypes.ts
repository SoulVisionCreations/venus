import { SpringConfig } from '@react-spring/three';
import { AnimationTypes } from './enums';
import { TrajectoryMetaData } from './trajectoryTypes';

// type rotationTrajectory = {
//     axis: number[];
//     frequency: number;
// };

// type scaleTrajectory = {
//     scaleRatio: number[];
// };

// type AnimationTrajectoryMetaData = TrajectoryMetaData & {
//     speed?: number;
//     rotationTrajectory?: rotationTrajectory;
//     scaleTrajectory?: scaleTrajectory;
// };

// export type AnimationManualTrajectoryData = {
//     initialPause?: number;
//     trajectory: AnimationTrajector;
//     config?: SpringConfig;
//     stateIncrements: Array<ObjectState>;
// };

// export type AnimationGeneratedTrajectoryData = {
//     initialPause?: number;
//     trajectory: AnimationTrajector;
//     config?: SpringConfig;
//     trajectoryMetaData: AnimationTrajectoryMetaData;
// };

// export type AnimationTrajectoryData = object | AnimationManualTrajectoryData | AnimationGeneratedTrajectoryData;

export type AnimationTrajectory = {
    rotation?: {
        trajectoryMetaData: TrajectoryMetaData,
        speed?: number;
    };
    position?: {
        trajectoryMetaData: TrajectoryMetaData,
        speed?: number;
    }
    scale?: {
        trajectoryMetaData: TrajectoryMetaData,
        speed?: number;
    }
};

export type VisibilityThreshold = { sceneTopToScreenBottomRatio: number; sceneBottomToScreenTopRatio: number };

export type ChainedAnimation = {
    initialPause?: number;
    repeat: boolean;
    interval?: number;
    childAnimations: Array<{animationTrajectories: AnimationTrajectory, initialPause?: number, springConfig?: SpringConfig}>;
    visibilityThreshold?: VisibilityThreshold;
};

export type IntroAnimation = {
    initialPause?: number;
    springConfig?: SpringConfig;
    visibilityThreshold?: VisibilityThreshold;
    animationTrajectories?: AnimationTrajectory
};

export type ScrollAnimation = {
    visibilityThreshold?: VisibilityThreshold;
    rotateOnScroll?: {
        axis: number[];
        velocity: number;
        maxRotation?: number;
        minRotation?: number;
    };
    scaleOnScroll?: {
        scaleRatio: number[];
        velocity: number;
        minScale: number[];
        maxScale: number[];
    };
    springConfig?: SpringConfig;
    animationTrajectories?: AnimationTrajectory
};

export type Animation = { type: AnimationTypes; } & (ScrollAnimation | IntroAnimation | ChainedAnimation);
