import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Render from './Render'
import Map from './Map'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Render/> */}
    <Map/>
  </React.StrictMode>,
  document.getElementById('root')
);
