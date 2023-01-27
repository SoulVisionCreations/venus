import { useEffect, useRef, useState } from "react";
import { invalidate } from "@react-three/fiber";
import { useSpring, config } from '@react-spring/three';
import { arrayToVec, getInitialState } from "../utility";
import { Animation } from "../../Configs/types";

const convertStateVecToArr = (stateVec) => {
    return {
        position: [...stateVec.current.position],
        rotation: [...stateVec.current.rotation],
        scale: [...stateVec.current.scale],
    }
}

export const useSpringAnimation = (instance, sceneProps) => {
    const [initialPosition, initialRotation, initialScale] = getInitialState(instance);
    const state = useRef({position: initialPosition, rotation: initialRotation, scale: initialScale});
    const animateOnce = useRef([]);
    const animateByInterval = useRef([]);
    const animateByLoop = useRef([]);
    const [animateOnceCompleted, setAnimateOnceCompleted] = useState(false);
    const timeouts = useRef([]);
    const intervals = useRef([]);

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
            if(animation.repeat == Animation.repeat.once) animateOnce.current.push(animation);
            if(animation.repeat == Animation.repeat.interval) animateByInterval.current.push(animation);
            if(animation.repeat == Animation.repeat.loop) animateByLoop.current.push(animation);
        });
    }, []);

    const getStateTimeline = (animationStates) => {
        const stateTimeline = [];
        animationStates.forEach(increment => {
            state.current.position.add(arrayToVec(increment.position));
            state.current.rotation.add(arrayToVec(increment.rotation));
            state.current.scale.add(arrayToVec(increment.scale));
            stateTimeline.push(convertStateVecToArr(state));
        });
        return stateTimeline;
    }

    useEffect(() => {
        if(!animateOnceCompleted) return;
        animateByInterval.current.forEach(animation => {
            const timeout = setTimeout(() => {
                const interval = setInterval(() => {
                    const stateTimeline = getStateTimeline(animation.stateIncrements);
                    let config = animation.config ? animation.config : config.default;
                    api.start({
                        to: stateTimeline,
                        config: config
                    });
                    invalidate();
                }, animation.interval);
                intervals.current.push(interval);
            }, animation.initialPause);
            timeouts.current.push(timeout);
        });
        animateByLoop.current.forEach((animation, index) => { 
            const timeout = setTimeout(() => {
                const stateTimeline = getStateTimeline(animation.stateIncrements);
                let config = animation.config ? animation.config : config.default;
                api.start({
                    to: stateTimeline,
                    config: config, 
                    loop: true
                });
                invalidate();
            }, animation.initialPause);
            timeouts.current.push(timeout);
        });
    }, [animateOnceCompleted, sceneProps.isSceneVisible])

    useEffect(() => {
        if(!sceneProps.isSceneVisible) {
            timeouts.current.forEach(t => clearTimeout(t));
            intervals.current.forEach(i => clearInterval(i));
            setAnimateOnceCompleted(false);
            state.current = {position: initialPosition, rotation: initialRotation, scale: initialScale};
            api.stop();
            api.set({position: [...initialPosition], rotation: [...initialRotation], scale: [...initialScale]});
        }
    }, [sceneProps.isSceneVisible]);

    useEffect(() => {
        if(sceneProps.isSceneCompletelyVisible && !animateOnceCompleted) {
            animateOnce.current.forEach((animation, index) => {
                const stateTimeline = getStateTimeline(animation.stateIncrements);
                let config = animation.config ? animation.config : config.default;
                const timeout = setTimeout(() => {
                    api.start({
                        to: stateTimeline,
                        config: config, 
                    });
                    invalidate();
                    if(index == animateOnce.current.length - 1) setAnimateOnceCompleted(true);
                }, animation.initialPause);
                timeouts.current.push(timeout);
            });
        }
        if(sceneProps.isSceneVisible && animateOnce.current.length == 0) setAnimateOnceCompleted(true);
    }, [sceneProps.isSceneCompletelyVisible, animateOnceCompleted, sceneProps.isSceneVisible]);

    return springs;
}