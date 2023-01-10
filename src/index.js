import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  AnimationTypes,
  ComponentTypes,
  CameraTypes,
  LightTypes,
  Alignment,
  ObjectControlTypes,
  ObjectTypes,
  TextTypes,
} from "./Configs/types";
import { stylingDefaults } from "./Constants/defaults";
import { SceneControlTypes } from "./Configs/types";
import { config1 } from './Configs/example1';

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App config={config1} />);
