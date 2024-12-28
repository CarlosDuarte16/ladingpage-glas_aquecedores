import './Index.scss';

export default function CardOtherProducts({image,title1,title2}){
  return (
    <div className="comp-card_OtherProducts">
      <div className="pop-up">
        <div className="image-box">
          <img src={image} alt={title1} />
        </div>
      </div>
      <div className="basic-informations">
        <h4>{title2}</h4>
      </div>
    </div>
  );
}
