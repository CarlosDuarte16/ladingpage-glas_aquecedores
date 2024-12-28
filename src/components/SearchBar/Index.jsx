import './Index.scss';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  return (
    <div className="comp-searchbar">
      <Link to="/acessórios" className="link">Acessórios</Link>
      <Link to="/aquecedores" className="link">Aquecedores</Link>
      <Link to="/kits" className="link">Kits</Link>
    </div> 
  );
}