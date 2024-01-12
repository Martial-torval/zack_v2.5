import { useEffect, useRef, useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
import "./menuClip.css";
import { useMediaQuery } from "react-responsive";

const MenuClip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const projectListRef = useRef<any>(null);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  useEffect(() => {
    if (projectListRef.current !== null) {
      if (isOpen) projectListRef.current.classList.add("active");
      else projectListRef.current.classList.remove("active");
    }
  }, [isOpen]);

  return (
    <>
      {isMobileOrTablet ? (
        <li
          key="portfolio"
          className="portfolio nav-item"
          onClick={() => handleClick()}
        >
          <span>Portfolio</span>
          <ul className="project-list" ref={projectListRef}>
            {data.map((clip) =>
              isOpen ? (
                <li key={clip.id}>
                  <Link to={`/portfolio/${clip.slug}`}>
                    {clip.artist
                      ? clip.artist + " - " + clip.libelle
                      : clip.libelle}
                    {}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </li>
      ) : (
        <li
          key="portfolio"
          className="portfolio nav-item"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>Portfolio</span>
          <ul className="project-list">
            {data.map((clip) =>
              isHovered ? (
                <li key={clip.id}>
                  <Link to={`/portfolio/${clip.slug}`}>
                    {clip.artist
                      ? clip.artist + " - " + clip.libelle
                      : clip.libelle}
                    {}
                  </Link>
                </li>
              ) : null
            )}
          </ul>
        </li>
      )}
    </>
  );
};

export default MenuClip;
