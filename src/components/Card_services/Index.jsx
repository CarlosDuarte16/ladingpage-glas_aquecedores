import './Index.scss';
import { useNavigate} from 'react-router-dom';


export default function CardServices({ image, title, text, button }) {

  function whatsapp(){
    window.location.href = 'https://wa.me/5511947398728?text=Ol%C3%A1,%20estou%20precisando%20de%20um%20or%C3%A7amento.%20Pode%20ajudar?';
  }

  return (
    <div className="comp-card_services">
      <div onClick={whatsapp} className="pop-up">
        <div className="image-box">
          <img src={image} alt="" />
        </div>
        <div  className="content">
          <h3>Clique aqui para fazer seu orçamento!</h3>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
