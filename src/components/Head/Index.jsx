import { useState } from "react";

import "./Index.scss";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

export default function Head() {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);
  const navigate = useNavigate();

  function scrool(el) {
    setIsMenuMobileOpen(false);

    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  }

  function logo() {
    navigate("/");
  }

  function handleOpenMenu() {
    setIsMenuMobileOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuMobileOpen(false);
  }

  return (
    <div className="comp-head">
      <img onClick={logo} src="/assets/image/logo-sem_fundo.png" alt="logo" />
      <div className="options">
        <HashLink scroll={scrool} to="/" className="link">
          Home
        </HashLink>
        <HashLink scroll={scrool} to="#faixa-services" className="link">
          Serviços
        </HashLink>
        <HashLink scroll={scrool} to="#faixa-marcas" className="link">
          Marcas
        </HashLink>
        <HashLink scroll={scrool} to="/aquecedores" className="link">
          Produtos
        </HashLink>
        <HashLink scroll={scrool} to="#faixa-baseboard" className="link">
          Contato
        </HashLink>
      </div>

      <Menu width={70} className="icon-menu-mobile" onClick={handleOpenMenu} />

      <div className={`menu-mobile ${isMenuMobileOpen && "active"}`}>
        <X onClick={handleCloseMenu} className="icon-close-menu" />

        <ul className="list-items">
          <li>
            <HashLink scroll={scrool} to="/" className="link">
              Home
            </HashLink>
          </li>

          <li>
            <HashLink scroll={scrool} to="#faixa-services" className="link">
              Serviços
            </HashLink>
          </li>

          <li>
            <HashLink scroll={scrool} to="#faixa-marcas" className="link">
              Marcas
            </HashLink>
          </li>

          <li>
            <HashLink scroll={scrool} to="/aquecedores" className="link">
              Produtos
            </HashLink>
          </li>

          <li>
            <HashLink scroll={scrool} to="#faixa-baseboard" className="link">
              Contato
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
