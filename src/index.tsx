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
import { textImageExample } from './configs/textImageExample';
// import { config2 } from './configs/example2';
// import { scrollAnimationExample } from './configs/scrollAnimationExample';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(<App config={textImageExample} />);
