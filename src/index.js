import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Eventos from './pages/Eventos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Eventos Alinhamento="Center" />
  </React.StrictMode>
);

