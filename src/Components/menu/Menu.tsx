import { Link } from "react-router-dom";
import "./menu.css";
import { useMediaQuery } from "react-responsive";
import MenuClip from "./MenuClip";

const Menu = () => {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      {!isMobileOrTablet ? (
        <nav>
          <ul>
            <MenuClip />
            <li className="nav-item" key="photos">
              <Link to="/photo">Photos</Link>
            </li>
            <li className="nav-item" key="about">
              <Link to="/about">About</Link>
            </li>

            <li className="nav-item" key="instagram">
              <a
                href="https://www.instagram.com/98zacky/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav>
          <Link to="/about">About</Link>
          <MenuClip />
          <h1>Zack</h1>
        </nav>
      )}
    </>
  );
};

export default Menu;
