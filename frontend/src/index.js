import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <App style={{ padding: '20px', color: '#ecf0f1' }} />

  </React.StrictMode>
);

reportWebVitals();
