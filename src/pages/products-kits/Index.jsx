import './index.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/Head/Index';
import Baseboard from '../../components/Baseboard/Index';
import SearchBar from '../../components/SearchBar/Index';
import CardOtherProducts from '../../components/Card_OtherProducts/Index';
import BannerProducts from '../../components/Banner_products/Index';
import IconWhatsapp from '../../components/Icon_whatsapp/Index';


export default function Products_Kits() {
  return (
    <div className="page-kits">
      <IconWhatsapp/>
      <Head />
      <div className="banner2">
        <BannerProducts showButton={false} />
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
              image="assets/image/Kit dourado.png"
              title2="Kit Gás Encanado para Fogão ou Cooktop - Dourado"
            />
          </div>
          <div className="card">
            <CardOtherProducts
              image="assets/image/Kit prata.png"
              title2="Kit Gás Encanado para Fogão ou Cooktop - Prata"
            />
          </div>
          <div className="card">
            <CardOtherProducts
              image="assets/image/Kit instalação.png"
              title2="Kit Instalação Aquecedor - completo"
            />
          </div>
        </div>
      </div>
      <Baseboard />
    </div>
  );
}


