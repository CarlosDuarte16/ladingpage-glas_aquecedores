import './Index.scss';
import { Link } from 'react-router-dom';

export default function IconWhatsapp() {
  return (
    <div className="comp-icon_whatsapp">
      <Link to='https://wa.me/5511947398728?text=Ol%C3%A1,%20estou%20precisando%20de%20um%20or%C3%A7amento.%20Pode%20ajudar?' className='icon_whatsapp'>
        <img src="/assets/image/whatsapp_green.png" alt="" />
      </Link>
    </div>
  ); 
} 