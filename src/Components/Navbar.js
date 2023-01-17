import "./Navbar.css";
import Logo from "../assets/CCS Nav-logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-width">
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/create">Change Request Form</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
