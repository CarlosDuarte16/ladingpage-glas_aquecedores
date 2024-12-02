import './Index.scss';

export default function CardServices({image, title, text, button}){
  return (
    <div className="comp-card_services">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{button}</button>
    </div>
  );
}