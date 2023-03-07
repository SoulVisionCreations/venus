import ReactDOM from 'react-dom/client';
import App from './App';
import { RotationByMultipleBezierTrajectoryWithScaleConfig } from './configs/Animation/Gltf/ScrollBased/Rotation/rotationByMultipleBezierTrajectoryWithScale';
import { RotateOnScrollAlongFixedAxisConfig } from './configs/Animation/Implicit/ScrollBased/Rotation/rotateOnScrollAlongFixedAxis';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(<App config={RotationByMultipleBezierTrajectoryWithScaleConfig} />);
