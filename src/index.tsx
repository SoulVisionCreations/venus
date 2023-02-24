import ReactDOM from 'react-dom/client';
import App from './App';
import { PositionByBezierTrajectoryWithScaleAndRotateConfig } from './configs/Animation/Gltf/ScrollBased/Position/positionByBezierTrajectory';
// import { RotateOnScrollAlongFixedAxisConfig } from './configs/Animation/Gltf/ScrollBased/Rotation/rotateOnScrollAlongFixedAxis';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(<App config={PositionByBezierTrajectoryWithScaleAndRotateConfig} />);
