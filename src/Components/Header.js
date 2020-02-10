import React from "react";
import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-main">
      <div className="link-box">
        <ul className="link-items">
          <li className="links">
            <a className="links" href="https://github.com/NickTillinghast" target="blank">
              <FaGithub size="50px" />
            </a>
          </li>

          <li className="links">
            <a
              className="links"
              href="https://www.linkedin.com/in/nick-tillinghast-065b2951/" target="blank"
            >
              <FaLinkedin size="50px" />{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className="titles">
        <div className="header-name-1">Nick Tillinghast</div>
        <div className="header-name-1">Web Developer</div>
        <div className="header-name-2">
          <a
            className="resume"
            href="https://docs.google.com/document/d/17paeshjmnftP1skHQNKtNnlP3Rh_uvTmYAoA7YpJllM/edit?usp=sharing" target="blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
