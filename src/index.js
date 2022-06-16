import React from "react";
// import ReactDOM from "react-dom/client";
// import  createRoot  from 'react-dom/client';
import "./index.css";
import App from "./App";
import Store from "./Store";
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';



createRoot.render(
  <Provider Store={Store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
// reportWebVitals();