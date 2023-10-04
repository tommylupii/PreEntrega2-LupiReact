import Cartwidget from "../CartWidget/cartwidget"
import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
      <h2>Tienda de Ropa Digital</h2>
      </Link>
      <div>
        <NavLink to={`/category/bolsos`} >Bolsos</NavLink>
        <NavLink to={`/category/remeras`}>Remeras</NavLink>
        <NavLink to={`/category/camperas`} >Camperas</NavLink>
      </div>
      <Cartwidget/>
    </nav>
  )
}

export default Navbar