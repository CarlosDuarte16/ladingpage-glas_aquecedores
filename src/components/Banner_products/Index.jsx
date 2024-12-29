import './Index.scss';  

export default function BannerProducts() {
  return (
    <div
      className="comp-banner_products"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(202, 211, 219, 0.9) 50%, rgba(202, 211, 219, 0.5)), url('assets/image/WorkingGles.jpg')`,
      }}
    >
      <div className="banner__content">
        <h3>Gles Aquecedores</h3>
        <h1>Venda de Aquecedores</h1>
        <p>
          Venda de aquecedores para proporcionar conforto e economia,
          ideais para uso residencial e comercial. Produtos de alta qualidade 
          que garantem água quente e bem-estar todos os dias. 
        </p>
        <button>Ver produtos</button>
      </div>
    </div>
  );
}
