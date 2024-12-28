import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/Head/Index';
import Baseboard from '../../components/Baseboard/Index';
import SearchBar from '../../components/SearchBar/Index';
import CardOtherProducts from '../../components/Card_OtherProducts/Index';

export default function Products_Accessories() {
  return (
    <div className="page-accessories">
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
        <SearchBar />
      </div>
      <div className="products">
        <h2>Kits</h2>
        <div className="Cards">
          <div className="card">
            <CardOtherProducts
              image="assets/image/Duto.png"
              title2="Duto de Aluminio Semi-Flexivel"
            />
          </div>
          <div className="card">
            <CardOtherProducts
              image="assets/image/Aro.png"
              title2="Aro de Arremate para Aquecedor a Gás"
            />
          </div>
          <div className="card">
            <CardOtherProducts
              image="assets/image/Abraçadeira.png"
              title2="Abraçadeira Metalica p/Duto Aço Inox"
            />
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
}


