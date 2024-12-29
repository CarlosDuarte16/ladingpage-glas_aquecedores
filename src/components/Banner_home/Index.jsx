import './Index.scss';  

export default function BannerHome() {
  return (
    <div
      className="comp-banner_home"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 0.5)), url('assets/image/banner_home.png')`,
      }}
    >
      <div className="banner__content">
        <h1>Instalação e Manutenção de Aquecedores e Sistemas de Água e Gás</h1>
        <p>
          Oferecemos serviços de instalação e manutenção de aquecedores, boilers, troca de resistência e
          readequação de pontos de água e gás para residências e empresas. Conforto e eficiência em todos os
          ambientes.
        </p>
        <button>Fale Conosco</button>
      </div>
    </div>
  );
}
