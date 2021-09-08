import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import Render from "./Render";
// import Map from "./Map";
import Hooks from "./Hooks";
import Old from './Old'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Render/> */}
    {/* <Map/> */}
    <Old />
    <Hooks />
  </React.StrictMode>,
  document.getElementById("root")
);
