import React from "react";
import Menu from "../../menu/Menu";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
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
    </footer>
  );
};

export default Footer;
