import './Index.scss';
import {Link, useNavigate} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Head() {
  const navigate = useNavigate()  

  function scrool(el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  function logo(){
    navigate('/')
  }

  return (
    <div className="comp-head">
      <img onClick={logo} src="/assets/image/logo-sem_fundo.png" alt="logo" />
      <div className="options">
        <HashLink scroll={scrool} to='#head' className='link' >Home</HashLink>
        <HashLink scroll={scrool} to='#faixa-services' className='link'>Serviços</HashLink>
        <HashLink scroll={scrool} to='#faixa-marcas' className='link'>Marcas</HashLink>
        <HashLink scroll={scrool} to='/aquecedores' className='link'>Produtos</HashLink>
        <HashLink scroll={scrool} to='#faixa-baseboard' className='link'>Contato</HashLink>
      </div>
    </div>
  );
}
