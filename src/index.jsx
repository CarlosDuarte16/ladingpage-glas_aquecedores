import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/home/Index';
import Products_Heaters from '.pages/products-aquecedores/Index';
import Products_Kits from './pages/products-kits/Index';
import Products_Accessories from './pages/products-acessórios/Index';
import Products_Pressurizers from './pages/products-pressurizadores/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aquecedores' element={<Products_Heaters/>}/>
        <Route path='/kits' element={<Products_Kits/>}/>
        <Route path='/acessórios' element={<Products_Accessories/>}/>
        <Route path='/pressurizadores' element={<Products_Pressurizers/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

