import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { config1 } from "./Configs/example1";
import { config2 } from "./Configs/example2";
import { instanceExample } from "./Configs/instanceExample";
import { animationExample } from "./Configs/animationExample";
import { scrollAnimationExample } from "./Configs/scrollAnimationExample";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App config={scrollAnimationExample} />);
