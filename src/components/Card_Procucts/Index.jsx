import './Index.scss';

export default function CardProducts({
  image,
  title1,
  title2,
  price,
  modelo1,
  modelo2,
  modelo3,
  modelo4,
  icon1,
  icon2,
  icon3,
  text1,
  text2,
  text3
}) {
  return (
    <div className="comp-card_products">
      <div className="pop-up">
        <div className="image-box">
          <img src={image} alt={title1} />
        </div>
        <div className="content">
          <div className="informations">
            <h3>{title1}</h3>
            <p>Ideal para:</p>
            <div className="icons">
              <div className="icon">
                <img src={icon1} alt="icon1" />
                <span>{text1}</span>
              </div>
              <div className="icon">
                <img src={icon2} alt="icon2" />
                <span>{text2}</span>
              </div>
            </div>
            <p>Modelos:</p>
            <div className="models">
              <span>{modelo1}</span>
              <span>{modelo2}</span>
              <span>{modelo3}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="basic-informations">
        <h4>{title2}</h4>
      </div>
    </div>
  );
}
