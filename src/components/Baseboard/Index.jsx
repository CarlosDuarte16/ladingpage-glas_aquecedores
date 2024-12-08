import './Index.scss';
import { Link, useNavigate } from 'react-router-dom';

export default function Baseboard() {
  const navigate = useNavigate() 
  
  
  return (
    <div className="comp-baseboard">
      <div className="first-baseboard">
        <div className="text">
          <h4>Meios de contato</h4>
          <h1>Entre em contato conosco!</h1>
          <hr />
          <div className="whatsapp">
            <img src="/assets/image/whatsapp.png" alt="" />
            <Link to="" className="p">11 94739-8728</Link>
          </div>
          <div className="email">
            <img src="/assets/image/email.png" alt="" />
            <Link to="" className="p">glesaquecedores@gmail.com</Link>      
          </div>
        </div>
        <img className='logo' src="/assets/image/logo-sem_fundo.png" alt="" />
      </div>
      <div className="finish-baseboard">
        <img src="/assets/image/Copy icon.png" alt="logo" />
        <p>2024 Gles Aquecedores. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}