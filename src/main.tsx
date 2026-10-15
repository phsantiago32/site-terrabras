import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Inicio from './Inicio.tsx';
import Dossie from './Dossie.tsx';
import Manifesto from './Manifesto.tsx';
import Lutas from './Lutas.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/dossie" element={<Dossie />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/lutas" element={<Lutas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
