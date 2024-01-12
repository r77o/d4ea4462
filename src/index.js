import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/body.css';
import './css/app.css';
import './css/header.css';
import './css/footer.css';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
