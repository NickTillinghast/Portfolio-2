import React from "react";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-main">
      <div className="link-box">
        <ul className="link-items">
          <li className="links">
            <a className="links" href="https://github.com/NickTillinghast">
              <FaGithub size="50px" />
            </a>
          </li>

          <li className="links">
            <a
              className="links"
              href="https://www.linkedin.com/in/nick-tillinghast-065b2951/"
            >
              <FaLinkedin size="50px" />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="titles">
        <div className="header-name">Nick Tillinghast</div>
        <div className="header-name">Web Developer</div>
        <div className="header-name">
          <a
            className="resume"
            href="https://drive.google.com/file/d/1AZkF7bQKR631k_a_D7coXJuCc9pdmAy8/view?usp=sharing"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
