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

export type IntroAnimation = {
  type: AnimationTypes;
  initialPause?: number;
  trajectory: AnimationTrajectory;
  stateIncrements?: Array<ObjectState>;
  trajectoryMetaData?: animationTrajectoryMetaData;
  config?: springConfig;
};

export type ChainedAnimation = {
  type: AnimationTypes;
  initialPause?: number;
  trajectory: AnimationTrajectory;
  stateIncrements: Array<ObjectState>;
  config?: springConfig;
  repeat: boolean;
  interval?: number;
  childAnimations: Array<
    | { stateIncrements: Array<ObjectState>; config: springConfig }
    | {
        trajectory: AnimationTrajectory;
        trajectoryMetaData: animationTrajectoryMetaData;
        config: springConfig;
      }
  >;
};

export type scrollAnimation = {
  type: AnimationTypes;
  visibilityThreshold?: { top: number; bottom: number };
  trajectory?: AnimationTrajectory;
  trajectoryMetaData?: animationTrajectoryMetaData;
  speed?: number;
  config?: springConfig;
};

export type Animation = scrollAnimation | IntroAnimation | ChainedAnimation;
