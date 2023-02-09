import { useEffect, useRef, useState } from 'react';
import { invalidate } from '@react-three/fiber';
import { useSpring, config as springConfig } from '@react-spring/three';
import { convertVec3ToArray, getInitialState } from '../utility';
import { getTrajectoryPoints } from './trajectory';
import { AnimationTypes } from '../../enums';
import { Object3DProps } from '../../Types/object3DTypes';
import { ScenePropsType } from '../../Components/Scene/Scene';
import { ChainedAnimation, IntroAnimation } from '../../Types/animationTypes';

export const useSpringAnimation = (instance: Object3DProps, sceneProps: ScenePropsType) => {
    const [initialPosition, initialRotation, initialScale] = getInitialState(instance);
    const state = useRef({
        position: initialPosition,
        rotation: initialRotation,
        scale: initialScale,
    });
    const introAnimation = useRef<IntroAnimation>();
    const chainedAnimations = useRef<Array<ChainedAnimation>>([]);
    const hasSpringAnimation = useRef(false);
    const [introAnimationCompleted, updateIntroAnimationCompleted] = useState(false);
    const timeouts = useRef<Array<NodeJS.Timeout>>([]);

    const [springs, api] = useSpring(
        () => ({
            from: {
                rotation: convertVec3ToArray(state.current.rotation),
                position: convertVec3ToArray(state.current.position),
                scale: convertVec3ToArray(state.current.scale),
            },
            config: springConfig.default,
            onChange: () => invalidate(),
        }),
        []
    );

    // type OneOrMore<T> = T | readonly T[];
    // interface Lookup<T = any> {
    //     [key: string]: T
    // }

    // type ControllerUpdate<
    // State extends Lookup = Lookup,
    // Item = undefined
    // > = unknown & ToProps<State> & ControllerProps<State, Item>

    // api.start: (props?: OneOrMore<ControllerUpdate<State>> | null) => AsyncResult<this>;

    useEffect(() => {
        if (!instance.animations) return;
        instance.animations.forEach((animation) => {
            if (animation.type == AnimationTypes.intro) {
                introAnimation.current = animation as IntroAnimation;
                hasSpringAnimation.current = true;
            } else if (animation.type == AnimationTypes.chained) {
                chainedAnimations.current.push(animation as ChainedAnimation);
                hasSpringAnimation.current = true;
            }
            if ((animation as IntroAnimation | ChainedAnimation).initialPause == undefined) (animation as IntroAnimation | ChainedAnimation).initialPause = 0;
        });
    }, []);

    useEffect(() => {
        if (chainedAnimations.current.length == 0 || !introAnimationCompleted) return;
        chainedAnimations.current.forEach((animation) => {
            function executeAnimation(index: number) {
                const childAnimation = animation.childAnimations[index];
                const delay = childAnimation.initialPause == undefined ? 0 : childAnimation.initialPause;
                const [trajectory, trajectoryVec] = getTrajectoryPoints(childAnimation, state);
                const timeout = setTimeout(() => {
                    api.start({
                        to: async (next) => {
                            let t = 0;
                            while (t < trajectory.length) {
                                if (trajectoryVec[t].position) state.current.position = trajectoryVec[t].position;
                                if (trajectoryVec[t].rotation) state.current.rotation = trajectoryVec[t].rotation;
                                if (trajectoryVec[t].scale) state.current.scale = trajectoryVec[t].scale;
                                await next(trajectory[t]);
                                t++;
                            }
                            if (index + 1 < animation.childAnimations.length) executeAnimation(index + 1);
                            else if (animation.repeat) {
                                const interval = animation.interval ? animation.interval : 0;
                                const timeout = setTimeout(() => {
                                    executeAnimation(0);
                                }, interval);
                                timeouts.current.push(timeout);
                            }
                        },
                        config: childAnimation.config ? childAnimation.config : springConfig.default,
                    });
                    invalidate();
                }, delay);
                timeouts.current.push(timeout);
            }
            const timeout = setTimeout(() => {
                executeAnimation(0);
            }, animation.initialPause);
            timeouts.current.push(timeout);
        });
    }, [sceneProps.isSceneVisible, introAnimationCompleted]);

    useEffect(() => {
        if (sceneProps.isSceneCompletelyVisible && introAnimation.current && !introAnimationCompleted) {
            const animation = introAnimation.current;
            const [trajectory, trajectoryVec] = getTrajectoryPoints(animation, state);
            const timeout = setTimeout(() => {
                api.start({
                    to: async (next) => {
                        let t = 0;
                        while (t < trajectory.length) {
                            if (trajectoryVec[t].position) state.current.position = trajectoryVec[t].position;
                            if (trajectoryVec[t].rotation) state.current.rotation = trajectoryVec[t].rotation;
                            if (trajectoryVec[t].scale) state.current.scale = trajectoryVec[t].scale;
                            await next(trajectory[t]);
                            t++;
                        }
                        updateIntroAnimationCompleted(true);
                    },
                    config: animation.config ? animation.config : springConfig.default,
                });
                invalidate();
            }, animation.initialPause);
            timeouts.current.push(timeout);
        }
        if (sceneProps.isSceneVisible && !introAnimation.current) updateIntroAnimationCompleted(true);
    }, [sceneProps.isSceneCompletelyVisible, sceneProps.isSceneVisible]);

    useEffect(() => {
        if (!sceneProps.isSceneVisible && hasSpringAnimation.current) {
            timeouts.current.forEach((t) => clearTimeout(t));
            updateIntroAnimationCompleted(false);
            state.current = {
                position: initialPosition,
                rotation: initialRotation,
                scale: initialScale,
            };
            api.stop();
            api.set({
                position: convertVec3ToArray(initialPosition),
                rotation: convertVec3ToArray(initialRotation),
                scale: convertVec3ToArray(initialScale),
            });
        }
    }, [sceneProps.isSceneVisible]);

    return [springs, api];
};

// useEffect(() => {
//     if(!animateOnceCompleted) return;
//     animateByInterval.current.forEach(animation => {
//         const timeout = setTimeout(() => {
//             const interval = setInterval(() => {
//                 const stateTimeline = getStateTimeline(animation.stateIncrements);
//                 let config = animation.config ? animation.config : config.default;
//                 api.start({
//                     to: stateTimeline,
//                     config: config,
//                 });
//                 invalidate();
//             }, animation.interval);
//             intervals.current.push(interval);
//         }, animation.initialPause);
//         timeouts.current.push(timeout);
//     });
// }, [animateOnceCompleted, sceneProps.isSceneVisible]);

// useEffect(() => {
//     if(!animateByLoop.current) return;
//     const animation = animateByLoop.current;
//     const timeout = setTimeout(() => {
//         const stateTimeline = getStateTimeline(animation.stateIncrements);
//         let config = animation.config ? animation.config : config.default;
//         api.start({
//             to: stateTimeline,
//             config: config,
//             loop: true
//         });
//         invalidate();
//     }, animation.initialPause);
//     timeouts.current.push(timeout);
// }, [sceneProps.isSceneVisible]);
