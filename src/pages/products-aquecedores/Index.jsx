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
        <SearchBar />
      </div>
      <div className="products">
        <h2>Aquecedores</h2>
        <div className="Cards">
          <div className="card">
            <CardProducts
              image="assets/image/komeco_bk_1.png"
              title1="Aquecedor a Gás KO Decor Preto"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="16BK"
              modelo2="21BK"
              modelo3="26BK"
              title2="Aquecedor a Gás KOMECO Decor"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_wh_1.png"
              title1="Aquecedor a Gás KO Decor Branco"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="16WH"
              modelo2="21WH"
              modelo3="26WH"
              title2="Aquecedor a Gás KOMECO Decor"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_gray_1.png"
              title1="Aquecedor a Gás KO Decor Cinza"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="16SL"
              modelo2="21SL"
              modelo3="26SL"
              title2="Aquecedor a Gás KOMECO Decor"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_gray_2.png"
              title1="Aquecedor a Gás KOMECO Black Home"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="21BK"
              modelo2="26BK"
              modelo3="36BK"
              title2="Aquecedor a Gás KOMECO Home"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_wh_2.png"
              title1="Aquecedor a Gás KOMECO Branco Home"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="21WH"
              modelo2="26WH"
              modelo3="36WH"
              title2="Aquecedor a Gás KOMECO Home"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_prata_2.png"
              title1="Aquecedor a Gás KOMECO Prata Digital"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="21SL"
              modelo2="26SL"
              modelo3="36SL"
              title2="Aquecedor a Gás KOMECO Digital"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_prata_3.png"
              title1="Aquecedor a Gás KOMECO Prata Prime"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="21SL"
              modelo2="26SL"
              modelo3="36SL"
              title2="Aquecedor a Gás KOMECO Prime"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/komeco_wh_3.png"
              title1="Aquecedor a Gás KOMECO Branco Prime"
              icon1="assets/image/ducha.png"
              icon2="assets/image/Torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="21BK"
              modelo2="26BK"
              modelo3="36BK"
              title2="Aquecedor a Gás KOMECO Prime"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_bk_1.png"
              title1="Aquecedor a Gás Preto Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="E17"
              modelo2="-----"
              modelo3="E21"
              title2="Aquecedor a Gás Rinnai Preto"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_sl_1.png"
              title1="Aquecedor a Gás Prata Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="E17"
              modelo2="-----"
              modelo3="E21"
              title2="Aquecedor a Gás Rinnai Prata"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_wh_1.png"
              title1="Aquecedor a Gás Branco Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="E17"
              modelo2="-----"
              modelo3="E21"
              title2="Aquecedor a Gás Rinnai Branco"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_wh_2.png"
              title1="Aquecedor a Gás Branco Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="-----"
              modelo2="E15"
              modelo3="-----"
              title2="Aquecedor a Gás Rinnai Branco"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_sl_2.png"
              title1="Aquecedor a Gás Branco Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="-----"
              modelo2="E15"
              modelo3="-----"
              title2="Aquecedor a Gás Rinnai Preto"
            />
          </div>  
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_bk_3.png"
              title1="Aquecedor a Gás Preto Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="E27"
              modelo2="-----"
              modelo3="E33"
              title2="Aquecedor a Gás Rinnai Preto"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_sl_3.png"
              title1="Aquecedor a Gás Prata Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="E27"
              modelo2="-----"
              modelo3="E33"
              title2="Aquecedor a Gás Rinnai Prata"
            />
          </div>
          <div className="card">
            <CardProducts
              image="assets/image/rinnai_wh_3.png"
              title1="Aquecedor a Gás Branco Bivolt GLP/GN"
              icon1="assets/image/ducha.png"
              icon2="assets/image/torneira.png"
              text1="duchas"
              text2="torneiras"
              modelo1="E27"
              modelo2="-----"
              modelo3="E33"
              title2="Aquecedor a Gás Rinnai Branco"
            />
          </div>
          
        </div>
      </div>
      <Baseboard/>
    </div>
  );
}


