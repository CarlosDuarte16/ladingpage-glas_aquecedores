import './index.scss';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Head from '../../components/Head/Index';
import CardServices from '../../components/Card_services/Index';
import Baseboard from '../../components/Baseboard/Index';
import BannerHome from '../../components/Banner_home/Index';
import BannerProducts from '../../components/Banner_products/Index';
import IconWhatsapp from '../../components/Icon_whatsapp/Index';

export default function Home() {
  const navigate = useNavigate()

  function verProdutos() {
    navigate('/aquecedores')
  }

  return (
    <div className="page-home">
      <IconWhatsapp />
      <div className="head" id='head'>
        <Head />
      </div>
      <div className="banner1">
        <BannerHome />
      </div>
      <div className="faixa-services" id='faixa-services'>
        <h1>Conheça nossos serviços</h1>
        <div className="cards1">
          <CardServices
            image="assets/image/image-card_1.png"
            title="Manutenção Corretiva"
            text="Solicite agora mesmo um orçamento para o serviço de Manutenção Corretiva."
            button="Orçamento"
          />
          <CardServices
            image="assets/image/image-card_2.png"
            title="Instalação de Aquecedores"
            text="Solicite agora mesmo um orçamento para o serviço de Instalação de Aquecedor."
            button="Orçamento"
          />
          <CardServices
            image="assets/image/image-card_3.png"
            title="Manutenção Preventiva"
            text="Solicite agora mesmo um orçamento para o serviço de Manutenção Preventiva."
            button="Orçamento"
          />
        </div>
        <div className="cards2">
          <CardServices
            image="assets/image/image-card_4.png"
            title="Instalação de Fogão"
            text="Solicite agora mesmo um orçamento para o serviço de Instalação de Fogão."
            button="Orçamento"
          />
          <CardServices
            image="assets/image/image-card_5.png"
            title="Conversões de Fogão - GN"
            text="Solicite agora mesmo um orçamento para o serviço de Conversões."
            button="Orçamento"
          />
          <CardServices
            image="assets/image/image-card_6.png"
            title="Manutenção e Instalação de boiler "
            text="Solicite agora mesmo um orçamento para o serviço de Boilers."
            button="Orçamento"
          />
        </div>
        <div className="cards3">
          <CardServices
            image="assets/image/image-card_7.png"
            title="Troca de Resistência"
            text="Solicite agora mesmo um orçamento para o serviço de Troca de Resistência."
            button="Orçamento"
          />
          <CardServices
            image="assets/image/image-card_8.png"
            title="Readequação de pontos de agua Fria e Quente "
            text="Solicite agora mesmo um orçamento para o serviço de Readequação de ponto de água."
            button="Orçamento"
          />
          <CardServices
            image="assets/image/image-card_9.png"
            title="Readequação de ponto de gás"
            text="Solicite agora mesmo um orçamento para o serviço de  Readequação de ponto de Gás. "
            button="Orçamento"
          />
        </div>
        <div className="banner2">
          <BannerProducts showButton={true} />
        </div>
        <div className="faixa-marcas" id='faixa-marcas'>
          <h1>Trabalhamos com diversas marcas!</h1>
          <div className="marcas1">
            <img src="/assets/image/Rinnai.png" alt="" />

            <img src="/assets/image/Komeco.png" alt="" />
            <img src="/assets/image/Bosch.png" alt="" />
            <img src="/assets/image/Lorenzetti.png" alt="" />
          </div>
          <div className="marcas2">
            <img src="/assets/image/Harman.png" alt="" />
            <img src="/assets/image/Heliotek.png" alt="" />
            <img src="/assets/image/Sakura.png" alt="" />
            <img src="/assets/image/Rheem.png" alt="" />

          </div>
        </div>
        <div className='faixa-baseboard' id='faixa-baseboard'>
          <Baseboard />
        </div>
      </div>

    </div>
  );
}


