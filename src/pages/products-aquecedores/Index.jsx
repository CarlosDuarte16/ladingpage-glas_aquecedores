import './index.scss'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/Head/Index';
import Baseboard from '../../components/Baseboard/Index';
import SearchBar from '../../components/SearchBar/Index';
import CardProducts from '../../components/Card_Procucts/Index';

export default function Products_Heaters() {
  return (
    <div className="page-heaters">
      <Head />
      <div className="banner-products">
        <div
          className="banner1"
          style={{
            backgroundImage: 'url("/assets/image/Banner2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            width: '100%',
          }}>
        </div>
      </div>
        <h1>Nossos Produtos</h1> 
      <div className="SearchBar">
        <SearchBar/>
      </div>
      <div className="products">
        <h2>Aquecedores</h2>
        <div className="Cards">
          <CardProducts
            
          />
        </div>
      </div>

    </div>
  );
}


