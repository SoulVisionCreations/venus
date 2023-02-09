import { invalidate } from '@react-three/fiber';
import { config as springConfig } from '@react-spring/three';
import { useEffect, useRef } from 'react';
import { CurvePath, EllipseCurve, Vector3 } from 'three';
import { convertVec3ToArray, getInitialState } from '../utility';
import { getTrajectory } from './trajectory';
import { AnimationTrajectory, AnimationTypes } from '../../enums';
import { ScenePropsType } from '../../Components/Scene/Scene';
import { AnimationGeneratedTrajectoryData, ScrollAnimation, SpringConfig, VisibilityThreshold } from '../../Types/animationTypes';
import { Object3DProps } from '../../Types/object3DTypes';
import { unknownObject } from '../../Types/types';
import { TrajectoryMetaData } from '../../Types/trajectoryTypes';

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

const shouldAnimate = (sceneProps: ScenePropsType, visibilityThreshold: { current: VisibilityThreshold }, delta: number) => {
    const sceneTop = sceneProps.canvasRect.top;
    const sceneBottom = sceneProps.canvasRect.bottom;
    const sceneHeight = sceneBottom - sceneTop;
    const scrolledHeight = window.pageYOffset;
    const screenHeight = window.innerHeight;
    const sceneTopToScreenBottomDist = scrolledHeight + screenHeight - sceneTop;
    const sceneBottomToScreenBottomDist = sceneBottom - (scrolledHeight + screenHeight);
    const sceneBottomToScreenTopDist = sceneBottom - scrolledHeight;
    if (sceneBottomToScreenTopDist <= 0 || sceneTopToScreenBottomDist <= 0) return false;
    if (delta > 0 && sceneTopToScreenBottomDist / sceneHeight >= visibilityThreshold.current.top) return true;
    if (delta < 0 && sceneBottomToScreenBottomDist / sceneHeight >= visibilityThreshold.current.bottom) return true;
    return false;
};

export const useScrollAnimation = (objectProps: Object3DProps, sceneProps: ScenePropsType, springApi: any) => {
    const [initialPosition, initialRotation, initialScale] = getInitialState(objectProps);
    const state = useRef({
        position: initialPosition,
        rotation: initialRotation,
        scale: initialScale,
    });
    const scrollAnimation = useRef<ScrollAnimation>();
    const scrollTrajectory = useRef<EllipseCurve | CurvePath<Vector3>>();
    const visibilityThreshold = useRef<VisibilityThreshold>({ top: 0, bottom: 0 });
    const trajectoryState = useRef(0);
    const trajectorySpeed = useRef(0.01);
    const springConfigRef = useRef<SpringConfig>(springConfig.default);

    useEffect(() => {
        if (!objectProps.animations) return;
        objectProps.animations.forEach((animation) => {
            if (animation.type == AnimationTypes.scroll) {
                scrollAnimation.current = animation as ScrollAnimation;
                if ((animation as ScrollAnimation).trajectory)
                    scrollTrajectory.current = getTrajectory(animation as unknownObject & { trajectory: AnimationTrajectory; trajectoryMetaData: unknownObject & TrajectoryMetaData });
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                if ((animation as ScrollAnimation).visibilityThreshold != undefined) visibilityThreshold.current = (animation as ScrollAnimation).visibilityThreshold!;
                if (
                    (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData &&
                    (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.speed != undefined
                ) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    trajectorySpeed.current = (animation as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.speed!;
                }
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                if ((animation as ScrollAnimation).config) springConfigRef.current = (animation as ScrollAnimation).config!;
            }
        });
    }, []);

    const updateStateByDelta = (deltaY: number) => {
        if (scrollTrajectory.current) {
            trajectoryState.current += trajectorySpeed.current * deltaY;
            if (trajectoryState.current > 1) trajectoryState.current = 1;
            if (trajectoryState.current < 0) trajectoryState.current = 0;
            state.current.position = scrollTrajectory.current.getPoint(trajectoryState.current) as Vector3;

            if ((scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData)?.trajectoryMetaData?.rotationTrajectory) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const rotationTrajectory = (scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.rotationTrajectory!;
                const maxRotation = Math.PI * 2 * rotationTrajectory.frequency;
                const axis = rotationTrajectory.axis;
                state.current.rotation = new Vector3(
                    initialRotation.x + axis[0] * maxRotation * trajectoryState.current,
                    initialRotation.y + axis[1] * maxRotation * trajectoryState.current,
                    initialRotation.z + axis[2] * maxRotation * trajectoryState.current
                );
            }

            if ((scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.scaleTrajectory) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const scaleTrajectory = (scrollAnimation.current as unknownObject & AnimationGeneratedTrajectoryData).trajectoryMetaData.scaleTrajectory!;
                const scaleRatio = scaleTrajectory.scaleRatio;
                state.current.scale = new Vector3(
                    initialScale.x + trajectoryState.current * scaleRatio[0],
                    initialScale.y + trajectoryState.current * scaleRatio[1],
                    initialScale.z + trajectoryState.current * scaleRatio[2]
                );
            }
        }
        if (scrollAnimation.current?.rotationMetaData) {
            const axis = scrollAnimation.current.rotationMetaData.axis;
            const velocity = scrollAnimation.current.rotationMetaData.velocity;
            state.current.rotation.add(new Vector3(axis[0] * velocity * deltaY, axis[1] * velocity * deltaY, axis[2] * velocity * deltaY));
        }
        if (scrollAnimation.current?.scaleMetaData) {
            const scaleRatio = scrollAnimation.current.scaleMetaData.scaleRatio;
            const velocity = scrollAnimation.current.scaleMetaData.velocity;
            state.current.scale.add(new Vector3(scaleRatio[0] * velocity * deltaY, scaleRatio[1] * velocity * deltaY, scaleRatio[2] * velocity * deltaY));
            if (scrollAnimation.current.scaleMetaData.maxScale) {
                const maxScale = scrollAnimation.current.scaleMetaData.maxScale;
                state.current.scale.x = Math.min(maxScale[0], state.current.scale.x);
                state.current.scale.y = Math.min(maxScale[1], state.current.scale.y);
                state.current.scale.z = Math.min(maxScale[2], state.current.scale.z);
            }
            if (scrollAnimation.current.scaleMetaData.minScale) {
                const minScale = scrollAnimation.current.scaleMetaData.minScale;
                state.current.scale.x = Math.max(minScale[0], state.current.scale.x);
                state.current.scale.y = Math.max(minScale[1], state.current.scale.y);
                state.current.scale.z = Math.max(minScale[2], state.current.scale.z);
            }
        }
    };

    const animate = (e) => {
        if (!shouldAnimate(sceneProps, visibilityThreshold, e.deltaY)) return;
        updateStateByDelta(e.deltaY);
        springApi.start({
            to: async (next) => {
                await next({
                    position: convertVec3ToArray(state.current.position),
                    rotation: convertVec3ToArray(state.current.rotation),
                });
            },
            config: springConfigRef.current, //{ mass: 4, tension: 280, friction: 90 }
        });
        invalidate();
    };

    useEffect(() => {
        if (sceneProps.isSceneVisible && scrollAnimation.current) {
            if (window.pageYOffset > 0) {
                const sceneTop = sceneProps.canvasRect.top;
                const sceneBottom = sceneProps.canvasRect.bottom;
                const sceneHeight = sceneBottom - sceneTop;
                const scrolledHeight = window.pageYOffset;
                const screenHeight = window.innerHeight;
                const sceneTopToScreenBottomDist = scrolledHeight + screenHeight - sceneTop;
                const delta = sceneTopToScreenBottomDist - visibilityThreshold.current.top * sceneHeight;
                if (delta > 0) {
                    updateStateByDelta(delta);
                    springApi.start({
                        to: async (next) => {
                            await next({
                                position: convertVec3ToArray(state.current.position),
                                rotation: convertVec3ToArray(state.current.rotation),
                            });
                        },
                    });
                    invalidate();
                }
            }
            window.addEventListener('wheel', animate, { passive: true });
        }
        return () => {
            window.removeEventListener('wheel', animate);
        };
    }, [sceneProps.isSceneVisible]);
};
