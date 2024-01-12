import Menu from "../../menu/Menu";
import { Link } from "react-router-dom";
import "./header.css";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      {!isMobileOrTablet ? (
        <header className="desktop_header">
          <h1>
            <Link to="/" className="main-title">
              Zack
            </Link>
          </h1>
          <Menu />
        </header>
      ) : (
        <header>
          <Menu />
        </header>
      )}
    </>
  );
};

export default Header;
