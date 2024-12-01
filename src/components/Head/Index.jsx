import './Index.scss';
import {Link, useNavigate} from 'react-router-dom';


export default function Head() {
  const navigate = useNavigate()  

  function logo(){
    navigate('/')
  }

  return (
    <div className="comp-head">
      <img onClick={logo} src="/assets/image/Logo.png" alt="logo" />
      <div className="options">
        <Link className='link'>Home</Link>
        <Link className='link'>Serviços</Link>
        <Link className='link'>Produtos</Link>
        <Link className='link'>Contato</Link>
        <Link className='link'>Ajuda</Link>
      </div>
    </div>
  );
}
