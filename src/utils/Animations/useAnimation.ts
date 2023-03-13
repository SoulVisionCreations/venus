import { invalidate } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { areEqualVectors, convertVec3ToArray, getInitialState } from '../utility';
import { Object3DProps, strongObject3DStateOfArrays, strongObject3DStateOfVectors, weakObject3DStateofVectors } from '../../types/object3DTypes';
import { ChainedAnimation, IntroAnimation, ScrollAnimation, VisibilityThreshold } from '../../types/animationTypes';
import { AnimationTypes, TrajectoryTypes } from '../../types/enums';
import { ImageProps, TextProps, unknownObject } from '../../types/types';
import { animationDefaults, trajectoryDefaults } from '../../constants/defaults';
import { Line1DMetaData, TrajectoryMetaData } from '../../types/trajectoryTypes';
import { config, useSpring } from '@react-spring/three';
import { getStateTrajectoryPoints, getTrajectory } from '../Trajectories/utility';
import { getManualStateTrajectoryPoints } from './utility';
import { SceneProps } from '../../components/CanvasNode';
import { Vector3 } from 'three';
import { getPointAtLine1D } from '../Trajectories/line1D';

export const checkIsSceneInMiddleOfScreen = (sceneProps: SceneProps) => {
    const sceneTop = sceneProps.canvasRect.top;
    const sceneBottom = sceneProps.canvasRect.bottom;
    const scrolledHeight = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const percision = 75;
    const sceneTopToScreenTopDist = sceneTop - scrolledHeight;
    const sceneBottomToScreenBottomDist = sceneBottom - (scrolledHeight + screenHeight);
    const delta = Math.abs(sceneBottomToScreenBottomDist + sceneTopToScreenTopDist);
    const areOppositeSignedNumbers = (sceneBottomToScreenBottomDist <= 0 && sceneTopToScreenTopDist >= 0) || (sceneBottomToScreenBottomDist >= 0 && sceneTopToScreenTopDist <= 0);
    const bothSceneEdgesAreCloseToScreenEdges = Math.abs(sceneBottomToScreenBottomDist) <= percision && Math.abs(sceneTopToScreenTopDist) <= percision;
    const isSceneInMiddleOfScreen = bothSceneEdgesAreCloseToScreenEdges || (areOppositeSignedNumbers && delta <= percision);
    return isSceneInMiddleOfScreen;
};

const shouldAnimate = (sceneProps: SceneProps, visibilityThreshold: VisibilityThreshold, delta?: number) => {
    const sceneTop = sceneProps.canvasRect.top;
    const sceneBottom = sceneProps.canvasRect.bottom;
    const sceneHeight = sceneBottom - sceneTop;
    const scrolledHeight = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const sceneTopToScreenBottomDist = sceneTop - (scrolledHeight + screenHeight);
    const sceneBottomToScreenTopDist = sceneBottom - scrolledHeight;
    const sceneTopToScreenTopDist = sceneTop - scrolledHeight;
    const sceneBottomToScreenBottomDist = sceneBottom - (scrolledHeight + screenHeight);
    const sceneTopAboveVisibilityThreshold = (-1 * sceneTopToScreenBottomDist) / sceneHeight >= visibilityThreshold.sceneTopToScreenBottomRatio;
    const sceneBottomAboveVisibilityThreshold = sceneBottomToScreenTopDist / sceneHeight >= visibilityThreshold.sceneBottomToScreenTopRatio;
    if (sceneTopToScreenBottomDist > 0 || sceneBottomToScreenTopDist < 0) return false;
    if (delta == undefined) {
        if (sceneTopToScreenTopDist >= 0 && sceneTopToScreenBottomDist <= 0 && sceneTopAboveVisibilityThreshold) return true;
        if (sceneBottomToScreenBottomDist <= 0 && sceneBottomToScreenTopDist >= 0 && sceneBottomAboveVisibilityThreshold) return true;
        if (sceneTopToScreenTopDist < 0 && sceneBottomToScreenBottomDist > 0 && (sceneTopAboveVisibilityThreshold || sceneBottomAboveVisibilityThreshold)) return true;
        return false;
    }
    if (delta > 0) {
        if (sceneTopToScreenTopDist >= 0 && sceneTopToScreenBottomDist <= 0 && sceneTopAboveVisibilityThreshold) return true;
        if (sceneTopToScreenTopDist <= 0 && sceneBottomToScreenBottomDist <= 0) return true;
        if (sceneTopToScreenTopDist <= 0 && sceneBottomToScreenBottomDist >= 0 && sceneTopAboveVisibilityThreshold) return true;
        return false;
    }
    if (delta < 0) {
        if (sceneBottomToScreenBottomDist <= 0 && sceneBottomToScreenTopDist >= 0 && sceneBottomAboveVisibilityThreshold) return true;
        if (sceneBottomToScreenBottomDist >= 0 && sceneTopToScreenTopDist >= 0) return true;
        if (sceneTopToScreenTopDist <= 0 && sceneBottomToScreenBottomDist >= 0 && sceneBottomAboveVisibilityThreshold) return true;
        return false;
    }
    return false;
};

enum AnimationState {
    NOT_STARTED,
    COMPLETED,
    IN_PROGRESS,
}

enum ScrollAnimationStates {
    AT_START,
    IN_MIDDLE,
    AT_END,
}

export const useAnimation = (objectProps: Object3DProps | ImageProps | TextProps, sceneProps: SceneProps) => {
    const [initialPosition, initialRotation, initialScale, opacity] = getInitialState(objectProps);
    const initialStateRef = useRef<strongObject3DStateOfVectors>({
        position: initialPosition as Vector3,
        rotation: initialRotation as Vector3,
        scale: initialScale as Vector3,
        opacity: opacity as number,
    });
    const state = useRef<strongObject3DStateOfVectors>({
        position: initialStateRef.current.position.clone(),
        rotation: initialStateRef.current.rotation.clone(),
        scale: initialStateRef.current.scale.clone(),
        opacity: initialStateRef.current.opacity,
    });

    const scrollAnimation = useRef<{ type: AnimationTypes } & ScrollAnimation>();
    const scrollTrajectory = useRef<{
        [key: string | number | symbol]: {
            trajectory: any;
            speed: number;
            state: number;
            trajectoryMetaData: TrajectoryMetaData;
        };
    }>({});
    const [scrollAnimationState, updateScrollAnimationState] = useState(ScrollAnimationStates.AT_START);

    const introAnimation = useRef<{ type: AnimationTypes } & IntroAnimation & unknownObject>();
    const [introAnimationState, updateIntroAnimationState] = useState<AnimationState>(AnimationState.NOT_STARTED);
    const chainedAnimation = useRef<{ type: AnimationTypes } & ChainedAnimation>();
    const chainedAnimationState = useRef<AnimationState>(AnimationState.NOT_STARTED);
    const hasSpringAnimation = useRef(false);
    const timeouts = useRef<Array<NodeJS.Timeout>>([]);
    const [spring, springApi] = useSpring(
        () => ({
            from: {
                rotation: convertVec3ToArray(state.current.rotation),
                position: convertVec3ToArray(state.current.position),
                scale: convertVec3ToArray(state.current.scale),
                opacity: state.current.opacity,
            },
            config: config.default,
            onChange: () => invalidate(),
        }),
        []
    );

    useEffect(() => {
        if (!objectProps.animations) return;
        objectProps.animations.forEach((animation) => {
            if (animation.type == AnimationTypes.scroll) {
                scrollAnimation.current = animation;
                if ((animation as { type: AnimationTypes } & ScrollAnimation).animationTrajectories !== undefined) {
                    const trajectories = (animation as { type: AnimationTypes } & ScrollAnimation).animationTrajectories;
                    if (trajectories != undefined) {
                        for (const [key, value] of Object.entries(trajectories)) {
                            if (value == undefined) continue;
                            const trajectory = getTrajectory(value.trajectoryMetaData);
                            const speed = value.speed == undefined ? animationDefaults.scrollAnimation.speed : value.speed;
                            scrollTrajectory.current[key] = { trajectory: trajectory, speed: speed, state: 0, trajectoryMetaData: value.trajectoryMetaData };
                        }
                    }
                }
                scrollAnimation.current.visibilityThreshold = animation.visibilityThreshold ?? animationDefaults.visibilityThreshold;
                scrollAnimation.current.springConfig = (animation as ScrollAnimation).springConfig ?? animationDefaults.scrollAnimation.springConfig;
                if (sceneProps.disablePageScrollForScrollAnimation) {
                    scrollAnimation.current.disablePageScroll = scrollAnimation.current.disablePageScroll ?? animationDefaults.scrollAnimation.disablePageScroll;
                    if (scrollAnimation.current.disablePageScroll) {
                        sceneProps.updateScrollAnimationCount((count: number) => count + 1);
                        sceneProps.udpateCompletedBackwardScrollAnimationCount((count: number) => count + 1);
                    }
                }
            }

            if (animation.type == AnimationTypes.intro) {
                (animation as { type: AnimationTypes } & IntroAnimation).initialPause = (animation as { type: AnimationTypes } & IntroAnimation).initialPause ?? animationDefaults.initialPause;
                introAnimation.current = animation as { type: AnimationTypes } & IntroAnimation;
                introAnimation.current.visibilityThreshold = animation.visibilityThreshold ?? animationDefaults.visibilityThreshold;
                if ('animationTrajectories' in animation) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    const [stateVec, stateArr] = getStateTrajectoryPoints(animation.animationTrajectories!, state, (animation as any).trajectorySteps);
                    introAnimation.current.trajectory = stateArr;
                    introAnimation.current.trajectoryVec = stateVec;
                    if (!introAnimation.current.springConfig) introAnimation.current.springConfig = animationDefaults.introAnimation.byTrajectory.springConfig;
                } else if ('stateIncrements' in animation) {
                    const [stateVec, stateArr] = getManualStateTrajectoryPoints(animation.stateIncrements, state);
                    console.log(stateArr, stateVec);
                    introAnimation.current.trajectory = stateArr;
                    introAnimation.current.trajectoryVec = stateVec;
                    if (!introAnimation.current.springConfig) introAnimation.current.springConfig = animationDefaults.introAnimation.byStateIncrements.springConfig;
                }
                hasSpringAnimation.current = true;
            }

            if (animation.type == AnimationTypes.chained) {
                (animation as { type: AnimationTypes } & ChainedAnimation).initialPause = (animation as { type: AnimationTypes } & ChainedAnimation).initialPause ?? animationDefaults.initialPause;
                chainedAnimation.current = animation as { type: AnimationTypes } & ChainedAnimation;
                chainedAnimation.current.visibilityThreshold = animation.visibilityThreshold ?? animationDefaults.visibilityThreshold;
                hasSpringAnimation.current = true;
            }
        });
    }, []);

    const executeChainedAnimation = (e?: any) => {
        if (!shouldAnimate(sceneProps, chainedAnimation.current?.visibilityThreshold ?? animationDefaults.visibilityThreshold, e?.deltaY)) return;
        if (chainedAnimation.current == undefined) return;
        chainedAnimationState.current = AnimationState.IN_PROGRESS;
        const animation = chainedAnimation.current;
        function executeAnimation(index: number) {
            const childAnimation = animation.childAnimations[index];
            const delay = childAnimation.initialPause ?? 0;
            let trajectory: Array<strongObject3DStateOfArrays>, trajectoryVec: Array<weakObject3DStateofVectors>;
            if ('animationTrajectories' in childAnimation) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const [stateVec, stateArr] = getStateTrajectoryPoints((childAnimation as any).animationTrajectories, state, (childAnimation as any).trajectorySteps);
                trajectory = stateArr;
                trajectoryVec = stateVec;
            } else if ('stateIncrements' in childAnimation) {
                const [stateVec, stateArr] = getManualStateTrajectoryPoints((childAnimation as any).stateIncrements, state);
                trajectory = stateArr;
                trajectoryVec = stateVec;
            }
            const timeout = setTimeout(() => {
                springApi.start({
                    to: async (next) => {
                        let t = 0;
                        while (t < trajectory.length) {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            if (trajectoryVec[t].position) state.current.position = trajectoryVec[t].position!;
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            if (trajectoryVec[t].rotation) state.current.rotation = trajectoryVec[t].rotation!;
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                            if (trajectoryVec[t].scale) state.current.scale = trajectoryVec[t].scale!;
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
                        } else {
                            chainedAnimationState.current = AnimationState.COMPLETED;
                        }
                    },
                    config: childAnimation.springConfig ?? animation.springConfig ?? config.default,
                });
                invalidate();
            }, delay);
            timeouts.current.push(timeout);
        }
        const timeout = setTimeout(() => {
            executeAnimation(0);
        }, animation.initialPause ?? 0);
        timeouts.current.push(timeout);
    };

    // activating chained animation
    useEffect(() => {
        if (
            !chainedAnimation.current ||
            introAnimationState != AnimationState.COMPLETED ||
            !sceneProps.isSceneVisible ||
            chainedAnimationState.current == AnimationState.IN_PROGRESS ||
            chainedAnimationState.current == AnimationState.COMPLETED
        )
            return;
        if (shouldAnimate(sceneProps, chainedAnimation.current?.visibilityThreshold ?? animationDefaults.visibilityThreshold)) {
            executeChainedAnimation();
        } else {
            window && window.addEventListener('scroll', executeChainedAnimation, { passive: true });
        }
        return () => {
            window && window.removeEventListener('scroll', executeChainedAnimation);
        };
    }, [sceneProps.isSceneVisible, introAnimationState, chainedAnimationState.current]);

    const executeIntroAnimation = (e?: any) => {
        if (!shouldAnimate(sceneProps, introAnimation.current?.visibilityThreshold ?? animationDefaults.visibilityThreshold, e?.deltaY)) return;
        updateIntroAnimationState(AnimationState.IN_PROGRESS);
        const [trajectory, trajectoryVec] = [introAnimation.current?.trajectory, introAnimation.current?.trajectoryVec];
        const timeout = setTimeout(() => {
            springApi.start({
                to: async (next) => {
                    let t = 0;
                    while (t < trajectory.length) {
                        if (trajectoryVec[t].position) state.current.position = trajectoryVec[t].position;
                        if (trajectoryVec[t].rotation) state.current.rotation = trajectoryVec[t].rotation;
                        if (trajectoryVec[t].scale) state.current.scale = trajectoryVec[t].scale;
                        if (trajectoryVec[t].opacity) state.current.opacity = trajectoryVec[t].opacity;
                        await next(trajectory[t]);
                        t++;
                    }
                    updateIntroAnimationState(AnimationState.COMPLETED);
                },
                config: introAnimation.current?.springConfig ?? config.default,
            });
            invalidate();
        }, introAnimation.current?.initialPause ?? 0);
        timeouts.current.push(timeout);
    };

    // activating intro animation
    useEffect(() => {
        if (sceneProps.isSceneVisible && introAnimationState == AnimationState.NOT_STARTED && !introAnimation.current) {
            updateIntroAnimationState(AnimationState.COMPLETED);
            return;
        }
        if (introAnimationState == AnimationState.COMPLETED || introAnimationState == AnimationState.IN_PROGRESS || !sceneProps.isSceneVisible) return;
        if (shouldAnimate(sceneProps, introAnimation.current?.visibilityThreshold ?? animationDefaults.visibilityThreshold)) {
            executeIntroAnimation();
        } else {
            window && window.addEventListener('wheel', executeIntroAnimation, { passive: true });
        }
        return () => {
            window && window.removeEventListener('wheel', executeIntroAnimation);
        };
    }, [sceneProps.isSceneVisible, introAnimationState]);

    // updating state as per scroll delta for scroll animation
    const updateStateByDelta = (deltaY: number, forceState?: ScrollAnimationStates) => {
        let animationState = deltaY > 0 ? ScrollAnimationStates.AT_END : ScrollAnimationStates.AT_START;
        Object.entries(scrollTrajectory.current).forEach(([key, value]) => {
            value.state += value.speed * deltaY;
            if (value.state < 0) value.state = 0;
            if (value.state > 1) value.state = 1;
            if (deltaY > 0 && value.state < 0.975) animationState = ScrollAnimationStates.IN_MIDDLE;
            if (deltaY < 0 && value.state > 0.025) animationState = ScrollAnimationStates.IN_MIDDLE;
            if (forceState == ScrollAnimationStates.AT_END) {
                value.state = 1;
                animationState = forceState;
            } else if (forceState == ScrollAnimationStates.AT_START) {
                value.state = 0;
                animationState = forceState;
            }
            const equiSpacedPoints = (value.trajectoryMetaData as any).equiSpacedPoints ?? trajectoryDefaults.equiSpacedPoints;
            if (key == 'opacity') {
                state.current[key as keyof strongObject3DStateOfVectors] = getPointAtLine1D(value.trajectoryMetaData as Line1DMetaData & { type: TrajectoryTypes }, value.state);
            } else {
                state.current[key as keyof strongObject3DStateOfVectors] = equiSpacedPoints ? value.trajectory.getPointAt(value.state) : value.trajectory.getPoint(value.state);
            }
        });
        if (scrollAnimation.current?.rotateOnScroll) {
            const axis = scrollAnimation.current.rotateOnScroll.axis;
            const velocity = scrollAnimation.current.rotateOnScroll.velocity;
            state.current.rotation.add(new Vector3(axis[0] * velocity * deltaY, axis[1] * velocity * deltaY, axis[2] * velocity * deltaY));
            const maxRotation = scrollAnimation.current.rotateOnScroll.maxRotation ?? animationDefaults.scrollAnimation.maxRotation;
            const minRotation = scrollAnimation.current.rotateOnScroll.minRotation ?? animationDefaults.scrollAnimation.minRotation;
            if ((deltaY > 0 && velocity > 0) || (deltaY < 0 && velocity < 0)) {
                const initialRotation = initialStateRef.current.rotation.clone();
                initialRotation.add(new Vector3(maxRotation, maxRotation, maxRotation));
                state.current.rotation.x = Math.min(initialStateRef.current.rotation.x + maxRotation, state.current.rotation.x);
                state.current.rotation.y = Math.min(initialStateRef.current.rotation.y + maxRotation, state.current.rotation.y);
                state.current.rotation.z = Math.min(initialStateRef.current.rotation.z + maxRotation, state.current.rotation.z);
                if (!areEqualVectors(initialRotation, state.current.rotation, 0.01)) {
                    animationState = ScrollAnimationStates.IN_MIDDLE;
                }
            } else {
                const initialRotation = initialStateRef.current.rotation.clone();
                initialRotation.add(new Vector3(minRotation, minRotation, minRotation));
                state.current.rotation.x = Math.max(initialStateRef.current.rotation.x + minRotation, state.current.rotation.x);
                state.current.rotation.y = Math.max(initialStateRef.current.rotation.y + minRotation, state.current.rotation.y);
                state.current.rotation.z = Math.max(initialStateRef.current.rotation.z + minRotation, state.current.rotation.z);
                if (!areEqualVectors(initialRotation, state.current.rotation, 0.01)) {
                    animationState = ScrollAnimationStates.IN_MIDDLE;
                }
            }
        }
        return animationState;
    };

    const executeScrollAnimation = (e: any) => {
        const hasDisablePageScrollBasedScrollAnimation = sceneProps.disablePageScrollForScrollAnimation && scrollAnimation.current?.disablePageScroll;
        if (!hasDisablePageScrollBasedScrollAnimation && !shouldAnimate(sceneProps, scrollAnimation.current?.visibilityThreshold ?? animationDefaults.visibilityThreshold, e.deltaY)) return;
        let animationState = ScrollAnimationStates.IN_MIDDLE;
        let isSceneInMiddleOfScreen = false;
        if (hasDisablePageScrollBasedScrollAnimation) {
            isSceneInMiddleOfScreen = checkIsSceneInMiddleOfScreen(sceneProps);
            if (isSceneInMiddleOfScreen) {
                animationState = updateStateByDelta(e.deltaY);
                if (animationState == ScrollAnimationStates.IN_MIDDLE) {
                    if (scrollAnimationState != ScrollAnimationStates.IN_MIDDLE) {
                        updateScrollAnimationState(ScrollAnimationStates.IN_MIDDLE);
                        sceneProps.udpateCompletedForwardScrollAnimationCount(0);
                        sceneProps.udpateCompletedBackwardScrollAnimationCount(0);
                    }
                }
            } else return;
        } else {
            updateStateByDelta(e.deltaY);
        }
        springApi.start({
            to: async (next: any) => {
                await next({
                    position: convertVec3ToArray(state.current.position),
                    rotation: convertVec3ToArray(state.current.rotation),
                    scale: convertVec3ToArray(state.current.scale),
                    opacity: state.current.opacity,
                });
            },
            config: scrollAnimation.current?.springConfig ?? animationDefaults.scrollAnimation.springConfig,
        });
        invalidate();
        if (hasDisablePageScrollBasedScrollAnimation) {
            if (e.deltaY > 0 && animationState == ScrollAnimationStates.AT_END && scrollAnimationState != ScrollAnimationStates.AT_END) {
                sceneProps.udpateCompletedForwardScrollAnimationCount((count: number) => count + 1);
                updateScrollAnimationState(animationState);
            }
            if (e.deltaY < 0 && animationState == ScrollAnimationStates.AT_START && scrollAnimationState != ScrollAnimationStates.AT_START) {
                sceneProps.udpateCompletedBackwardScrollAnimationCount((count: number) => count + 1);
                updateScrollAnimationState(animationState);
            }
        }
    };

    //managing scroll Animation activation and state

    useEffect(() => {
        if (sceneProps.isSceneVisible && scrollAnimation.current) {
            window && window.addEventListener('wheel', executeScrollAnimation, { passive: true });
        }
        return () => {
            window && window.removeEventListener('wheel', executeScrollAnimation);
        };
    }, [sceneProps.isSceneVisible, scrollAnimationState]);

    useEffect(() => {
        const hasDisablePageScrollBasedScrollAnimation = sceneProps.disablePageScrollForScrollAnimation && scrollAnimation.current?.disablePageScroll;
        if (sceneProps.isSceneVisible && scrollAnimation.current) {
            if (window.pageYOffset > 0 && !hasDisablePageScrollBasedScrollAnimation) {
                const sceneTop = sceneProps.canvasRect.top;
                const sceneBottom = sceneProps.canvasRect.bottom;
                const sceneHeight = sceneBottom - sceneTop;
                const scrolledHeight = window.pageYOffset;
                const screenHeight = window.innerHeight;
                const sceneTopToScreenBottomDist = scrolledHeight + screenHeight - sceneTop;
                const visibilityThreshold = scrollAnimation.current?.visibilityThreshold ?? animationDefaults.visibilityThreshold;
                const delta = sceneTopToScreenBottomDist - visibilityThreshold.sceneTopToScreenBottomRatio * sceneHeight;
                if (delta > 0) {
                    updateStateByDelta(delta);
                    springApi.start({
                        to: async (next: any) => {
                            await next({
                                position: convertVec3ToArray(state.current.position),
                                rotation: convertVec3ToArray(state.current.rotation),
                                scale: convertVec3ToArray(state.current.scale),
                                opacity: state.current.opacity,
                            });
                        },
                        config: scrollAnimation.current?.springConfig ?? animationDefaults.scrollAnimation.springConfig,
                    });
                    invalidate();
                }
            }
        }
        if (scrollAnimation.current && hasDisablePageScrollBasedScrollAnimation) {
            const sceneTop = sceneProps.canvasRect.top;
            const sceneBottom = sceneProps.canvasRect.bottom;
            const scrolledHeight = window.pageYOffset;
            const screenHeight = window.innerHeight;
            const sceneTopToScreenBottomDist = sceneTop - (scrolledHeight + screenHeight);
            const sceneBottomToScreenTopDist = sceneBottom - scrolledHeight;
            const sceneTopToScreenTopDist = sceneTop - scrolledHeight;
            const sceneBottomToScreenBottomDist = sceneBottom - (scrolledHeight + screenHeight);
            if (sceneBottomToScreenTopDist >= 0 && sceneTopToScreenTopDist < 0 && scrollAnimationState != ScrollAnimationStates.AT_END) {
                updateStateByDelta(0, ScrollAnimationStates.AT_END);
                springApi.start({
                    to: async (next: any) => {
                        await next({
                            position: convertVec3ToArray(state.current.position),
                            rotation: convertVec3ToArray(state.current.rotation),
                            scale: convertVec3ToArray(state.current.scale),
                            opacity: state.current.opacity,
                        });
                    },
                    config: { duration: 0 },
                });
                invalidate();
                sceneProps.udpateCompletedForwardScrollAnimationCount((count: number) => count + 1);
                sceneProps.udpateCompletedBackwardScrollAnimationCount(0);
                updateScrollAnimationState(ScrollAnimationStates.AT_END);
            } else if (sceneTopToScreenBottomDist <= 0 && sceneBottomToScreenBottomDist > 0 && scrollAnimationState != ScrollAnimationStates.AT_START) {
                updateStateByDelta(0, ScrollAnimationStates.AT_START);
                springApi.start({
                    to: async (next: any) => {
                        await next({
                            position: convertVec3ToArray(state.current.position),
                            rotation: convertVec3ToArray(state.current.rotation),
                            scale: convertVec3ToArray(state.current.scale),
                            opacity: state.current.opacity,
                        });
                    },
                    config: { duration: 0 },
                });
                invalidate();
                sceneProps.udpateCompletedBackwardScrollAnimationCount((count: number) => count + 1);
                sceneProps.udpateCompletedForwardScrollAnimationCount(0);
                updateScrollAnimationState(ScrollAnimationStates.AT_START);
            }
        }
    }, [sceneProps.isSceneVisible]);

    //managing intro and chained animation state
    useEffect(() => {
        if (!sceneProps.isSceneVisible && hasSpringAnimation.current) {
            updateIntroAnimationState(AnimationState.NOT_STARTED);
            chainedAnimationState.current = AnimationState.NOT_STARTED;
            state.current = {
                position: initialStateRef.current.position.clone(),
                rotation: initialStateRef.current.rotation.clone(),
                scale: initialStateRef.current.scale.clone(),
                opacity: initialStateRef.current.opacity,
            };
            springApi.stop();
            springApi.set({
                position: convertVec3ToArray(initialStateRef.current.position),
                rotation: convertVec3ToArray(initialStateRef.current.rotation),
                scale: convertVec3ToArray(initialStateRef.current.scale),
                opacity: initialStateRef.current.opacity,
            });
            timeouts.current.forEach((t) => clearTimeout(t));
        }
    }, [sceneProps.isSceneVisible]);

    return spring;
};

// if (scrollTrajectory.current) {
//     trajectoryState.current += trajectorySpeed.current * deltaY;
//     if (trajectoryState.current > 1) trajectoryState.current = 1;
//     if (trajectoryState.current < 0) trajectoryState.current = 0;
//     state.current.position = scrollTrajectory.current.getPoint(trajectoryState.current) as Vector3;

//     if ((scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData)?.trajectoryMetaData?.rotationTrajectory) {
//         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//         const rotationTrajectory = (scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.rotationTrajectory!;
//         const maxRotation = Math.PI * 2 * rotationTrajectory.frequency;
//         const axis = rotationTrajectory.axis;
//         state.current.rotation = new Vector3(
//             initialRotation.x + axis[0] * maxRotation * trajectoryState.current,
//             initialRotation.y + axis[1] * maxRotation * trajectoryState.current,
//             initialRotation.z + axis[2] * maxRotation * trajectoryState.current
//         );
//     }

//     if ((scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.scaleTrajectory) {
//         // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//         const scaleTrajectory = (scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.scaleTrajectory!;
//         const scaleRatio = scaleTrajectory.scaleRatio;
//         state.current.scale = new Vector3(
//             initialScale.x + trajectoryState.current * scaleRatio[0],
//             initialScale.y + trajectoryState.current * scaleRatio[1],
//             initialScale.z + trajectoryState.current * scaleRatio[2]
//         );
//     }
// }

// const getVisibleSceneHeight = (sceneProps) => {
//   const sceneTop = sceneProps.canvasRect.top
//   const sceneBottom = sceneProps.canvasRect.bottom
//   const sceneHeight = sceneBottom - sceneTop
//   const scrolledHeight = window.pageYOffset // pageYOffset is a readonly property that return the number of pixels the document has been scrolled.
//   const screenHeight = window.innerHeight

//   let visibleSceneHeight = 0

//   if (sceneTop >= scrolledHeight + screenHeight) visibleSceneHeight = 0
//   else if (sceneTop >= scrolledHeight) {
//     visibleSceneHeight = screenHeight + scrolledHeight - sceneTop
//     if (visibleSceneHeight > sceneHeight) visibleSceneHeight = sceneHeight
//   } else {
//     const unvisibleSceneHeight = scrolledHeight - sceneTop
//     if (unvisibleSceneHeight >= sceneHeight) visibleSceneHeight = 0
//     else visibleSceneHeight = sceneHeight - unvisibleSceneHeight
//   }

//   return visibleSceneHeight
// }

// const getVisibleScenePercentage = (sceneProps) => {
//   const visibleSceneHeight = getVisibleSceneHeight(sceneProps)
//   const sceneTop = sceneProps.canvasRect.top
//   const sceneBottom = sceneProps.canvasRect.bottom
//   const sceneHeight = sceneBottom - sceneTop
//   const visibleScenePer =
//     Math.round((visibleSceneHeight / sceneHeight) * 10000) / 100
//   return visibleScenePer
// }

// if (scrollAnimation.current?.scaleOnScroll) {
//     const scaleRatio = scrollAnimation.current.scaleOnScroll.scaleRatio;
//     const velocity = scrollAnimation.current.scaleOnScroll.velocity;
//     state.current.scale.add(new Vector3(scaleRatio[0] * velocity * deltaY, scaleRatio[1] * velocity * deltaY, scaleRatio[2] * velocity * deltaY));
//     if ((deltaY > 0 && velocity > 0) || (deltaY < 0 && velocity < 0)) {
//         const maxScale = scrollAnimation.current.scaleOnScroll.maxScale;
//         const maxScaleVec = new Vector3(...maxScale);
//         state.current.scale.x = Math.min(maxScale[0], state.current.scale.x);
//         state.current.scale.y = Math.min(maxScale[1], state.current.scale.y);
//         state.current.scale.z = Math.min(maxScale[2], state.current.scale.z);
//         if(!areEqualVectors(maxScaleVec, state.current.scale, 0.1)) {
//             if(deltaY > 0) animationState = ScrollAnimationStates.IN_MIDDLE;
//             if(deltaY < 0) animationState = ScrollAnimationStates.IN_MIDDLE;
//         }
//     } else {
//         const minScale = scrollAnimation.current.scaleOnScroll.minScale;
//         const minScaleVec = new Vector3(...minScale);
//         state.current.scale.x = Math.max(minScale[0], state.current.scale.x);
//         state.current.scale.y = Math.max(minScale[1], state.current.scale.y);
//         state.current.scale.z = Math.max(minScale[2], state.current.scale.z);
//         if(!areEqualVectors(minScaleVec, state.current.scale, 0.1)) {
//             if(deltaY > 0) animationState = ScrollAnimationStates.IN_MIDDLE;
//             if(deltaY < 0) animationState = ScrollAnimationStates.IN_MIDDLE;
//         }
//     }
// }
