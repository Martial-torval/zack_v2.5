import Menu from "../menu/Menu";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/" className="main-title">
          Zack
        </Link>
      </h1>
      <Menu />
    </header>
  );
};

export default Header;
