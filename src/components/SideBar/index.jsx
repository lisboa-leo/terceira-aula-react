import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Info from "./assets/info.svg";
import Account from "./assets/account_circle.svg";
import Logout from "./assets/logout.svg";
import "./styles.css";

export default function SideBar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do CodeConnect" />

      <nav>
        <ul className="list-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">
              Publicar
            </a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativa">
              <img src={Feed} />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Account} />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Info} />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Logout} />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
