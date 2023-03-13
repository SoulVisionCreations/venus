import { TrajectoryTypes } from '../../../types/enums';
import Select from '../Select/Select';
import './Animations.css';
import useTrajectoryMetaDataStore from '../../store/Animations/TrajectoryMetaDataStore';
import { IoMdAddCircle } from 'react-icons/io';
import { useState } from 'react';
import ObjectArray from '../ObjectArray/ObjectArray';

const Trajectory = ({ prop }: { prop: string }) => {
    const [add, setAdd] = useState(false);
    const [setTrajectoryMetaData] = useTrajectoryMetaDataStore((s) => [s.setTrajectoryMetaData]);
    const [
        // show,
        type,
        center,
        clockwise,
        closed,
        endPoint,
        equiSpacedPoints,
        height,
        point,
        points,
        radius,
        // rotateCurve,
        rotationZ,
        startPoint,
        steps,
        width,
        // setShow,
        setType,
        setCenter,
        setClockwise,
        setClosed,
        setEndPoint,
        setEquiSpacedPoints,
        setHeight,
        setPoint,
        setRadius,
        // setRotateCurve,
        setRotationZ,
        setStartPoint,
        setSteps,
        setWidth,
        addPoint,
        removePoint,
        resetPoint,
        resetAnimationTrajectory,
    ] = useTrajectoryMetaDataStore((s) => [
        // s.show,
        s.type,
        s.center,
        s.clockwise,
        s.closed,
        s.endPoint,
        s.equiSpacedPoints,
        s.height,
        s.point,
        s.points,
        s.radius,
        // s.rotateCurve,
        s.rotationZ,
        s.startPoint,
        s.steps,
        s.width,
        // s.setShow,
        s.setType,
        s.setCenter,
        s.setClockwise,
        s.setClosed,
        s.setEndPoint,
        s.setEquiSpacedPoints,
        s.setHeight,
        s.setPoint,
        s.setRadius,
        // s.setRotateCurve,
        s.setRotationZ,
        s.setStartPoint,
        s.setSteps,
        s.setWidth,
        s.addPoint,
        s.removePoint,
        s.resetPoint,
        s.resetAnimationTrajectory,
    ]);

    const handleTrajectoryTypeChange = (event: any) => {
        setType(Number(event.target.value));
    };

    const handleRadiusChange = (event: any) => {
        setRadius(event.target.valueAsNumber);
    };

    const handleHeightChange = (event: any) => {
        setHeight(event.target.valueAsNumber);
    };

    const handleWidthChange = (event: any) => {
        setWidth(event.target.valueAsNumber);
    };

    const handleCenterChange = (event: any, pos: string) => {
        setCenter(event.target.valueAsNumber, pos);
    };

    const handleStartPointChange = (event: any, pos: string) => {
        setStartPoint(event.target.valueAsNumber, pos);
    };

    const handleEndPointChange = (event: any, pos: string) => {
        setEndPoint(event.target.valueAsNumber, pos);
    };

    const handleClosedChange = (event: any) => {
        setClosed(event.target.checked);
    };

    const handleEquiSpacedPointsChange = (event: any) => {
        setEquiSpacedPoints(event.target.checked);
    };

    const handleClockwiseChange = (event: any) => {
        setClockwise(event.target.valueAsNumber);
    };

    const handleRotationZChange = (event: any) => {
        setRotationZ(event.target.valueAsNumber);
    };

    const handleStepsChange = (event: any) => {
        setSteps(event.target.valueAsNumber);
    };

    const handlePointChange = (event: any, pos: string) => {
        setPoint(event.target.valueAsNumber, pos);
    };

    const addP = () => {
        addPoint(point);
        setAdd(false);
        resetPoint();
    };

    const addTrajectory = () => {
        switch (type) {
            case TrajectoryTypes.circle:
                setTrajectoryMetaData({ type, radius, center, clockwise, rotationZ, equiSpacedPoints, steps }, prop);
            case TrajectoryTypes.ellipse:
                setTrajectoryMetaData({ type, height, width, center, clockwise, rotationZ, equiSpacedPoints, steps }, prop);
            case TrajectoryTypes.quadracticBezierCurve3:
                setTrajectoryMetaData({ type, points, steps, closed, equiSpacedPoints }, prop);
            case TrajectoryTypes.cubicBezierCurve3:
                setTrajectoryMetaData({ type, points, steps, closed, equiSpacedPoints }, prop);
            case TrajectoryTypes.splineCurve3:
                setTrajectoryMetaData({ type, points, steps, closed, equiSpacedPoints }, prop);
            case TrajectoryTypes.line3D:
                setTrajectoryMetaData({ type, startPoint, endPoint, steps, equiSpacedPoints }, prop);
            case TrajectoryTypes.line1D:
                setTrajectoryMetaData({ type, startPoint: startPoint[0], endPoint: endPoint[0], steps, equiSpacedPoints }, prop);
        }
        resetAnimationTrajectory();
    };

    return (
        <div className="trajectory">
            TrajectoryTypes:
            <p>
                <Select title="Text Types" options={TrajectoryTypes} defaultValue={TrajectoryTypes[type]} onChange={handleTrajectoryTypeChange} />
            </p>
            {type === TrajectoryTypes.circle && (
                <p>
                    <label htmlFor="radius">Radius: </label>
                    <input type="number" id="radius" name="radius" onChange={handleRadiusChange} value={radius} />
                </p>
            )}
            {type === TrajectoryTypes.ellipse && (
                <>
                    <p>
                        <label htmlFor="height">Height: </label>
                        <input type="number" id="height" name="height" onChange={handleHeightChange} value={height} />
                    </p>
                    <p>
                        <label htmlFor="width">Width: </label>
                        <input type="number" id="width" name="width" onChange={handleWidthChange} value={width} />
                    </p>
                </>
            )}
            {(type === TrajectoryTypes.circle || type === TrajectoryTypes.ellipse) && (
                <>
                    <p>
                        <label htmlFor="clockwise"> Clockwise: </label>
                        <input type="checkbox" id="clockwise" name="clockwise" onChange={handleClockwiseChange} checked={clockwise} />
                    </p>
                    <p>
                        <label htmlFor="rotationZ">RotationZ: </label>
                        <input type="number" id="rotationZ" name="rotationZ" onChange={handleRotationZChange} value={rotationZ} />
                    </p>
                    <p>
                        Center:
                        <input type="number" id="centerx" value={(center as number[])[0]} onChange={(event) => handleCenterChange(event, 'x')} />
                        <input type="number" id="centery" value={(center as number[])[1]} onChange={(event) => handleCenterChange(event, 'y')} />
                        <input type="number" id="centerz" value={(center as number[])[2]} onChange={(event) => handleCenterChange(event, 'z')} />
                    </p>
                </>
            )}
            {type === TrajectoryTypes.line3D && (
                <>
                    <p>
                        Start Point:
                        <input type="number" id="start3x" value={(startPoint as number[])[0]} onChange={(event) => handleStartPointChange(event, 'x')} />
                        <input type="number" id="start3y" value={(startPoint as number[])[1]} onChange={(event) => handleStartPointChange(event, 'y')} />
                        <input type="number" id="start3z" value={(startPoint as number[])[2]} onChange={(event) => handleStartPointChange(event, 'z')} />
                    </p>
                    <p>
                        End Point:
                        <input type="number" id="end3x" value={(endPoint as number[])[0]} onChange={(event) => handleEndPointChange(event, 'x')} />
                        <input type="number" id="end3y" value={(endPoint as number[])[1]} onChange={(event) => handleEndPointChange(event, 'y')} />
                        <input type="number" id="end3z" value={(endPoint as number[])[2]} onChange={(event) => handleEndPointChange(event, 'z')} />
                    </p>
                </>
            )}
            {type === TrajectoryTypes.line1D && (
                <>
                    <p>
                        Start Point:
                        <input type="number" id="start1x" value={(startPoint as number[])[0]} onChange={(event) => handleStartPointChange(event, 'x')} />
                    </p>
                    <p>
                        End Point:
                        <input type="number" id="end1x" value={(endPoint as number[])[0]} onChange={(event) => handleEndPointChange(event, 'x')} />
                    </p>
                </>
            )}
            <p>
                <label htmlFor="steps"> Steps: </label>
                <input type="number" id="steps" name="steps" onChange={handleStepsChange} value={steps} />
            </p>
            {(type === TrajectoryTypes.circle ||
                type === TrajectoryTypes.ellipse ||
                type === TrajectoryTypes.cubicBezierCurve3 ||
                type === TrajectoryTypes.quadracticBezierCurve3 ||
                type === TrajectoryTypes.splineCurve3 ||
                type === TrajectoryTypes.line3D ||
                type === TrajectoryTypes.multipleCurvePath) && (
                <p>
                    <label htmlFor="equiSpacedPoints"> EquiSpacedPoints: </label>
                    <input type="checkbox" id="equiSpacedPoints" name="equiSpacedPoints" onChange={handleEquiSpacedPointsChange} checked={equiSpacedPoints} />
                </p>
            )}
            {(type === TrajectoryTypes.cubicBezierCurve3 || type === TrajectoryTypes.quadracticBezierCurve3 || type === TrajectoryTypes.splineCurve3 || type === TrajectoryTypes.multipleCurvePath) && (
                <>
                    <p>
                        <label htmlFor="closed"> Closed: </label>
                        <input type="checkbox" id="closed" name="closed" onChange={handleClosedChange} checked={closed} />
                    </p>
                    Points:
                    <ObjectArray array={points} title="Point" removeElement={removePoint} />
                    <button className="add-more-button" onClick={() => setAdd(true)}>
                        Add More <IoMdAddCircle size={28} />
                    </button>
                    {add && (
                        <>
                            <p>
                                Point:
                                <input type="number" id="pointx" value={(point as number[])[0]} onChange={(event) => handlePointChange(event, 'x')} />
                                <input type="number" id="pointy" value={(point as number[])[1]} onChange={(event) => handlePointChange(event, 'y')} />
                                <input type="number" id="pointz" value={(point as number[])[2]} onChange={(event) => handlePointChange(event, 'z')} />
                            </p>
                            <button onClick={() => addP()}>Add Point</button>
                        </>
                    )}
                </>
            )}
            <button onClick={() => addTrajectory()}>Add</button>
        </div>
    );
};

export default Trajectory;
