import './index.scss';

export default function SearchBar() {
  return (
    <div className="comp-searchbar">
      <Link className="link">Acessórios</Link>
      <Link className="link">Pressurização</Link>
      <Link className="link">Aquecedores</Link>
      <Link className="link">Kits</Link>
    </div>
  );
}