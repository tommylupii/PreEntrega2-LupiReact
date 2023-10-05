import Cartwidget from "../CartWidget/cartwidget";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          Tienda de Ropa Digital
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to={`/category/bolsos`}
            className="navbar-item"
            activeClassName="is-active"
          >
            Bolsos
          </NavLink>
          <NavLink
            to={`/category/remeras`}
            className="navbar-item"
            activeClassName="is-active"
          >
            Remeras
          </NavLink>
          <NavLink
            to={`/category/camperas`}
            className="navbar-item"
            activeClassName="is-active"
          >
            Camperas
          </NavLink>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <Cartwidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
