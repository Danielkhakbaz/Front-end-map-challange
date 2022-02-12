import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <Link className="header__link" to="/">
          <h2>Map Challenge</h2>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
