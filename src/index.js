import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
reportWebVitals();
