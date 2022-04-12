import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from "./components/App";
import "./index.css";
import { BrowserRouter as Router } from 'react-router-dom';

const Root=ReactDOM.createRoot(document.getElementById('root'));

Root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);