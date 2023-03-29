import { Link, NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/admin"}>Admin</NavLink>
    </nav>
  );
};

export default Nav;
