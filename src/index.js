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
import Promovacaciones from './components/promovacaciones';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="promovacaciones" element={<Promovacaciones />} />
        <Route path="visas" element={<Visas />} />
        <Route path="nosotros" element={<Nosotros />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
