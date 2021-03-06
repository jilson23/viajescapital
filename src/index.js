import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inicio from './pages/inicio';
import Nosotros from './pages/nosotros';
import Visas from './pages/visas';
import Promovacaciones from './pages/promovacaciones';
import Usa from './pages/visas/usa';
import Canada from './pages/visas/canada';
import Australia from './pages/visas/australia';
import China from './pages/visas/china';
import NuevaZelanda from './pages/visas/nuevaZelanda';
import ReinoUnido from './pages/visas/reinoUnido';
import ScrollToTop from './components/scrollToTop';
import Normatividad from './pages/nosotros/normatividad'
import Politicas from './pages/nosotros/politicas'
import Sostenibilidad from './pages/nosotros/sostenibilidad'
import Protocolo from './pages/nosotros/protocolo'
import Pasaporte from './pages/visas/pasaporte';

ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="promovacaciones" element={<Promovacaciones />} />
        <Route path="visas" element={<Visas />}>
          <Route index element={<Usa />} />
          <Route path="canada" element={<Canada />} />
          <Route path="reinounido" element={<ReinoUnido />} />
          <Route path="nuevazelanda" element={<NuevaZelanda />} />
          <Route path="china" element={<China />} />
          <Route path="australia" element={<Australia />} />
          <Route path="pasaporte" element={<Pasaporte />} />
        </Route>
        <Route path="nosotros" element={<Nosotros />}> 
          <Route path="normatividad" element={<Normatividad />} />
          <Route path="politicas" element={<Politicas />} />
          <Route path="sostenibilidad" element={<Sostenibilidad />} />
          <Route path="protocolo" element={<Protocolo />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
