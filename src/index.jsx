import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import 'normalize.css';
import './index.css';
const container = document.querySelector('#app');
const ROOT = ReactDOM.createRoot(container);
ROOT.render(<App />);