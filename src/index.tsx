// import "./style.css";
// import ReactDOM from "react-dom/client";
// import React from 'react';

// const root = ReactDOM.createRoot(document.querySelector("#root")!);

// const App = () => {
//     return (<div>Setting up typescript</div>)
// }

// root.render(<App />);

import ReactDOM from 'react-dom/client';
import App from './App';
import { config2 } from './Configs/example2';
// import { scrollAnimationExample } from './Configs/scrollAnimationExample';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(<App config={config2} />);
