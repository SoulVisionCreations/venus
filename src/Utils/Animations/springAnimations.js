import { useEffect, useRef, useState } from "react";
import { invalidate } from "@react-three/fiber";
import { useSpring, config } from '@react-spring/three';
import { arrayToVec, getInitialState } from "../utility";
import { Animation } from "../../Configs/types";
import { createEllipse } from "./curves";

const convertStateVecToArr = (stateVec) => {
    return {
        position: [...stateVec.position],
        rotation: [...stateVec.rotation],
        scale: [...stateVec.scale],
    }
}

export const useSpringAnimation = (instance, sceneProps) => {
    const [initialPosition, initialRotation, initialScale] = getInitialState(instance);
    const state = useRef({position: initialPosition, rotation: initialRotation, scale: initialScale});
    const introAnimation = useRef();
    // const animateByInterval = useRef([]);
    // const animateByLoop = useRef();
    const chainedAnimations = useRef([]);
    const [introAnimationCompleted, updateIntroAnimationCompleted] = useState(false);
    const timeouts = useRef([]);
    //const intervals = useRef([]);

    const [springs, api] = useSpring(
        () => ({
        from: {
            rotation: [...state.current.rotation],
            position: [...state.current.position],
            scale: [...state.current.scale],
        },
        config: config.default,
        onChange: () => invalidate(),
        }),
        []
    )

    useEffect(() => {
        if(!instance.animations) return;
        instance.animations.forEach(animation => {
            if(animation.type == Animation.type.intro) introAnimation.current = animation;
            else if(animation.type == Animation.type.chained) chainedAnimations.current.push(animation); 
            if(animation.initialPause == undefined) animation.initialPause = 0;
        });
    }, []);

    const getTrajectory = (animation) => {
        const trajectory = [];
        const trajectoryVec = [];
        trajectoryVec.push(state.current);
        trajectory.push(convertStateVecToArr(state.current));
        if(animation.trajectory == undefined) animation.trajectory = Animation.trajectory.manual;
        switch(animation.trajectory) {
            case(Animation.trajectory.manual) :
                animation.stateIncrements.forEach(increment => {
                    const currentState = trajectoryVec.slice(-1)[0];
                    increment.position && currentState.position.add(arrayToVec(increment.position));
                    increment.rotation && currentState.rotation.add(arrayToVec(increment.rotation));
                    increment.scale && currentState.scale.add(arrayToVec(increment.scale));
                    trajectoryVec.push(currentState);
                    trajectory.push(convertStateVecToArr(currentState));
                });
                break;
            case(Animation.trajectory.ellipse) :
                const points = createEllipse(animation.trajectoryMetaData);
                points.forEach(point => {
                    trajectory.push({position: [...point]});
                    trajectoryVec.push({position: point});
                });
                break;
        }
        return [trajectory, trajectoryVec];
    }

    useEffect(() => {
        if(chainedAnimations.current.length == 0 || !introAnimationCompleted) return;
        chainedAnimations.current.forEach((animation) => {
            function executeAnimation(index) {
                const childAnimation = animation.childAnimations[index];
                const delay = childAnimation.initialPause ? childAnimation.initialPause : 0;
                const [trajectory, trajectoryVec] = getTrajectory(childAnimation);
                api.start({
                    to: async (next) => {
                        let t = 0;
                        while(t < trajectory.length) {
                            if(trajectoryVec[t].position) state.current.position = trajectoryVec[t].position;
                            if(trajectoryVec[t].rotation) state.current.rotation = trajectoryVec[t].rotation;
                            if(trajectoryVec[t].scale) state.current.scale = trajectoryVec[t].scale;
                            await next(trajectory[t]);
                            t++;
                        }
                        if(index + 1 < animation.childAnimations.length) executeAnimation(index + 1);
                        else if(animation.repeat) {
                            const interval = animation.interval ? animation.interval : 0;
                            const timeout = setTimeout(() => {
                                executeAnimation(0);
                            }, interval);
                            timeouts.current.push(timeout);
                        }
                    },
                    delay: delay,
                    config: childAnimation.config ? childAnimation.config : config.default
                });
                invalidate();
            }
            const timeout = setTimeout(() => {
                executeAnimation(0);
            }, animation.initialPause);
            timeouts.current.push(timeout);
        });
    }, [sceneProps.isSceneVisible, introAnimationCompleted]);

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

    useEffect(() => {
        if(sceneProps.isSceneCompletelyVisible && introAnimation.current && !introAnimationCompleted) {
            const animation = introAnimation.current;
            const [trajectory, trajectoryVec] = getTrajectory(animation);
            const timeout = setTimeout(() => {
                api.start({
                    to: async (next) => {
                        let t = 0;
                        while(t < trajectory.length) {
                            if(trajectoryVec[t].position) state.current.position = trajectoryVec[t].position;
                            if(trajectoryVec[t].rotation) state.current.rotation = trajectoryVec[t].rotation;
                            if(trajectoryVec[t].scale) state.current.scale = trajectoryVec[t].scale;
                            await next(trajectory[t]);
                            t++;
                        }
                        updateIntroAnimationCompleted(true);
                    },
                    config: animation.config ? animation.config : config.default, 
                });
                invalidate();
            }, animation.initialPause);
            timeouts.current.push(timeout);
        }
        if(sceneProps.isSceneVisible && !introAnimation.current) updateIntroAnimationCompleted(true);
    }, [sceneProps.isSceneCompletelyVisible, sceneProps.isSceneVisible]);

    useEffect(() => {
        if(!sceneProps.isSceneVisible) {
            timeouts.current.forEach(t => clearTimeout(t));
            //intervals.current.forEach(i => clearInterval(i));
            updateIntroAnimationCompleted(false);
            state.current = {position: initialPosition, rotation: initialRotation, scale: initialScale};
            api.stop();
            api.set({position: [...initialPosition], rotation: [...initialRotation], scale: [...initialScale]});
        }
    }, [sceneProps.isSceneVisible]);

    return springs;
}