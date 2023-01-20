import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top bg-light custom-nav">
      <NavLink to="/" className={"header-link"}>
        Hotel para Gatinhos em Brasília
      </NavLink>
      <ul className="nav custom-nav-list">
        <li className="mx-3">
          <Link to="#">
            <i className="bi bi-whatsapp nav-icons" />
          </Link>
        </li>
        <li className="mx-3">
          <Link to="#">
            <i className="bi bi-facebook nav-icons" />
          </Link>
        </li>
        <li className="mx-3">
          <Link to="#">
            <i className="bi bi-instagram nav-icons" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
