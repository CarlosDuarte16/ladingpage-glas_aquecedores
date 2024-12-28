import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/home/Index';
import Products_Heaters from './pages/products-aquecedores/Index';
import Products_Kits from './pages/products-kits/Index';
import Products_Accessories from './pages/products-acessórios/Index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aquecedores' element={<Products_Heaters />} />
        <Route path='/kits' element={<Products_Kits />} />
        <Route path='/acessórios' element={<Products_Accessories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

