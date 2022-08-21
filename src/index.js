import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Componentes2 from './pages/Componentes2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Eventos Alinhamento="Center" />*/}
    {/*<Componentes Alinhamento="Componente-start" Alinhamento2="Componente-end" Alinhamento3="Componente-center"/>*/}
    <Componentes2 />
  </React.StrictMode>
);

