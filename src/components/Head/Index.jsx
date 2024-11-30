import './index.scss';
import {Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Head() {
  return (
    <div className="comp-head">
      <img src="/assets/image/Logo.png" alt="" />
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
