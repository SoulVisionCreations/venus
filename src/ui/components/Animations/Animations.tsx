import { AnimationTypes } from '../../../types/enums';
import Select from '../Select/Select';
import useAnimationStore from '../../store/Animations/animationStore';
import './Animations.css';
import { GrClose } from 'react-icons/gr';
import useTextStore from '../../store/Texts/textStore';
import { useState } from 'react';
import Trajectory from './Trajectory';

export enum animatabaleProps {
    position,
    rotation,
    scale,
    opacity,
}

const Animations = () => {
    const [animatabaleProp, setAnimatabaleProp] = useState(0);
    const [addAnimations] = useTextStore((s) => [s.addAnimations]);
    const [
        type,
        springConfig,
        visibilityThreshold,
        disablePageScroll,
        rotateOnScroll,
        initialPause,
        repeat,
        trajectorySteps,
        trajectorySpeed,
        interval,
        animationTrajectories,
        setShowAnimation,
        setType,
        setSpringConfig,
        setVisibilityThreshold,
        setDisablePageScroll,
        setRotateOnScroll,
        setInitialPause,
        setRepeat,
        setTrajectorySteps,
        setTrajectorySpeed,
        setInterval,
        // removeAnimationTrajectory,
        resetAnimation,
    ] = useAnimationStore((s) => [
        s.type,
        s.springConfig,
        s.visibilityThreshold,
        s.disablePageScroll,
        s.rotateOnScroll,
        s.initialPause,
        s.repeat,
        s.trajectorySteps,
        s.trajectorySpeed,
        s.interval,
        s.animationTrajectories,
        s.setShowAnimation,
        s.setType,
        s.setSpringConfig,
        s.setVisibilityThreshold,
        s.setDisablePageScroll,
        s.setRotateOnScroll,
        s.setInitialPause,
        s.setRepeat,
        s.setTrajectorySteps,
        s.setTrajectorySpeed,
        s.setInterval,
        // s.removeAnimationTrajectory,
        s.resetAnimation,
    ]);

    const handleAnimationTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleSpringConfigChange = (event: any, pos: string) => {
        setSpringConfig(event.target.valueAsNumber, pos);
    };

    const handleVisibilityThresholdChange = (event: any, pos: string) => {
        setVisibilityThreshold(event.target.valueAsNumber, pos);
    };

    const handleDisablePageScrollChange = (event: any) => {
        setDisablePageScroll(event.target.checked);
    };

    const handleRotateOnScrollChange = (event: any, pos: string) => {
        setRotateOnScroll(event.target.valueAsNumber, pos);
    };

    const handleAnimatablePropChange = (event: any) => {
        setAnimatabaleProp(event.target.value);
    };

    const addAnimation = () => {
        addAnimations({ type, springConfig, visibilityThreshold, disablePageScroll, rotateOnScroll });
        setShowAnimation(false);
        resetAnimation();
    };

    return (
        <div className="animation">
            <button className="close-icon" onClick={() => setShowAnimation(false)}>
                <GrClose size={20} />
            </button>
            <h1>Animations:</h1>
            <p>
                <Select title="Animation Types" options={AnimationTypes} defaultValue={AnimationTypes[type]} onChange={handleAnimationTypeChange} />
            </p>
            <div className="spring-config">
                Spring Config:
                <p>
                    <label htmlFor="duration">Duration: </label>
                    <input type="number" id="duration" name="duration" onChange={(event) => handleSpringConfigChange(event, 'duration')} value={springConfig?.duration} />
                </p>
                <p>
                    <label htmlFor="mass">Mass: </label>
                    <input type="number" id="mass" name="mass" onChange={(event) => handleSpringConfigChange(event, 'mass')} value={springConfig?.mass} />
                </p>
                <p>
                    <label htmlFor="friction">Friction: </label>
                    <input type="number" id="friction" name="friction" onChange={(event) => handleSpringConfigChange(event, 'friction')} value={springConfig?.friction} />
                </p>
                <p>
                    <label htmlFor="tension">Tension: </label>
                    <input type="number" id="tension" name="tension" onChange={(event) => handleSpringConfigChange(event, 'tension')} value={springConfig?.tension} />
                </p>
            </div>
            <div className="visibility-threshold">
                Visibility Threshold:
                <p>
                    <label htmlFor="sceneTopToScreenBottomRatio">SceneTopToScreenBottomRatio: </label>
                    <input
                        type="number"
                        id="sceneTopToScreenBottomRatio"
                        name="sceneTopToScreenBottomRatio"
                        onChange={(event) => handleVisibilityThresholdChange(event, 'sceneTopToScreenBottomRatio')}
                        value={visibilityThreshold?.sceneTopToScreenBottomRatio}
                    />
                </p>
                <p>
                    <label htmlFor="sceneBottomToScreenTopRatio">SceneBottomToScreenTopRatio: </label>
                    <input
                        type="number"
                        id="sceneBottomToScreenTopRatio"
                        name="sceneBottomToScreenTopRatio"
                        onChange={(event) => handleVisibilityThresholdChange(event, 'sceneBottomToScreenTopRatio')}
                        value={visibilityThreshold?.sceneBottomToScreenTopRatio}
                    />
                </p>
            </div>
            {type === AnimationTypes.scroll && (
                <>
                    <p>
                        <label htmlFor="disablePageScroll">DisablePageScroll: </label>
                        <input name="disablePageScroll" id="disablePageScroll" onChange={handleDisablePageScrollChange} type="checkbox" checked={disablePageScroll} />
                    </p>
                    <div className="row">
                        Rotate On Scroll:
                        <p>
                            Axis:
                            <input type="number" id="axisx" value={(rotateOnScroll.axis as number[])[0]} onChange={(event) => handleRotateOnScrollChange(event, 'x')} />
                            <input type="number" id="axisy" value={(rotateOnScroll.axis as number[])[1]} onChange={(event) => handleRotateOnScrollChange(event, 'y')} />
                            <input type="number" id="axisy" value={(rotateOnScroll.axis as number[])[2]} onChange={(event) => handleRotateOnScrollChange(event, 'z')} />
                        </p>
                        <p>
                            <label htmlFor="velocity">Velocity: </label>
                            <input type="number" id="velocity" name="velocity" onChange={(event) => handleRotateOnScrollChange(event, 'velocity')} value={rotateOnScroll?.velocity} />
                        </p>
                        <p>
                            <label htmlFor="maxRotation">MaX Rotation: </label>
                            <input type="number" id="maxRotation" name="maxRotation" onChange={(event) => handleRotateOnScrollChange(event, 'maxRotation')} value={rotateOnScroll?.maxRotation} />
                        </p>
                        <p>
                            <label htmlFor="minRotation">Min Rotation: </label>
                            <input type="number" id="minRotation" name="minRotation" onChange={(event) => handleRotateOnScrollChange(event, 'minRotation')} value={rotateOnScroll?.minRotation} />
                        </p>
                    </div>
                </>
            )}
            {type === AnimationTypes.intro && (
                <>
                    <p>
                        <label htmlFor="initialPause">Initial Pause: </label>
                        <input type="number" name="initialPause" id="initialPause" onChange={(event) => setInitialPause(event.target.valueAsNumber)} value={initialPause} />
                    </p>
                    <p>
                        <label htmlFor="trajectorySteps">Trajectory Steps: </label>
                        <input type="number" name="trajectorySteps" id="trajectorySteps" onChange={(event) => setTrajectorySteps(event.target.valueAsNumber)} value={trajectorySteps} />
                    </p>
                    <h2>Animation Trajectories:</h2>
                    {animationTrajectories?.position && <p>position: {JSON.stringify(animationTrajectories.position.trajectoryMetaData)} </p>}
                    {animationTrajectories?.rotation && <p>rotation: {JSON.stringify(animationTrajectories.rotation.trajectoryMetaData)} </p>}
                    {animationTrajectories?.scale && <p>scale: {JSON.stringify(animationTrajectories.scale.trajectoryMetaData)} </p>}
                    {animationTrajectories?.opacity && <p>opacity: {JSON.stringify(animationTrajectories.opacity.trajectoryMetaData)} </p>}
                    <Select title="Animatabale Prop" options={animatabaleProps} defaultValue={animatabaleProps[animatabaleProp]} onChange={handleAnimatablePropChange} />
                    <Trajectory prop={animatabaleProps[animatabaleProp]} />
                    <p>
                        <label htmlFor="trajectorySpeed">Trajectory Speed: </label>
                        <input type="number" name="trajectorySpeed" id="trajectorySpeed" onChange={(event) => setTrajectorySpeed(event.target.valueAsNumber)} value={trajectorySpeed} />
                    </p>
                </>
            )}
            {type === AnimationTypes.chained && (
                <>
                    <p>
                        <label htmlFor="initialPause">Initial Pause: </label>
                        <input type="number" name="initialPause" id="initialPause" onChange={(event) => setInitialPause(event.target.valueAsNumber)} value={initialPause} />
                    </p>
                    <p>
                        <label htmlFor="repeat">Repeat: </label>
                        <input type="checkbox" name="repeat" id="repeat" onChange={(event) => setRepeat(event.target.checked)} checked={repeat} />
                    </p>
                    <p>
                        <label htmlFor="interval">Interval: </label>
                        <input type="number" name="interval" id="interval" onChange={(event) => setInterval(event.target.valueAsNumber)} value={interval} />
                    </p>
                </>
            )}
            <button onClick={() => addAnimation()}>Add Animation</button>
        </div>
    );
};

export default Animations;