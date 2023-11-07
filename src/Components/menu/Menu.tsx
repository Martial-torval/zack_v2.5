import { Link } from "react-router-dom";
import "./menu.css";
import { useState } from "react";
import data from "../../data.json";

const Menu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <li
            key="portfolio"
            className="portfolio nav-item"
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Portfolio</span>
            {/* <img src={arrow} alt="arrow-icon" /> */}
            <ul className="project-list">
              {data.map((clip) =>
                isHovered ? (
                  <li key={clip.id}>
                    <Link to={`/portfolio/${clip.slug}`}>
                      {clip.artist + " - " + clip.libelle}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </li>
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
    </>
  );
};

export default Menu;
