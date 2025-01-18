import './Index.scss';
import { useNavigate } from 'react-router-dom';

export default function CardServices({image, title, text, button}){

  function whatsapp(){
    window.location.href = 'https://wa.me/5511947398728?text=Ol%C3%A1,%20estou%20precisando%20de%20um%20or%C3%A7amento.%20Pode%20ajudar?';
  }

  return (
    <div className="comp-card_services">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      <button onClick={whatsapp}>{button}</button>
    </div>
  );
}
