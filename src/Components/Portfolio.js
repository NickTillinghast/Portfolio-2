import React from "react";
import photography from "../media/photography.png";
import "./Portfolio.css";
import critique from "../media/critique.png";
import profile from "../media/profile.jpg";

import thisisdevmtn from "../media/thisisdevmtn.png";

export default function Portfolio() {
  return (
    <div className="portfolio-main">
      <div className="words">
        <div className="portfolio-content">
          <div className="middle">
            {/* <div>React, Node.js, Javascript, PostgrasSql</div> */}
            <div>
              <div className="about-blurb">
                <div className="portfolio-text">
                  Former professional photographer turned web developer. I’m
                  hard working, humble, and always eager to expand my knowledge
                  to reach my goals. Bringing my knowledge of being owner
                  operator of my own business. Problem solving and visual
                  elements were a big part of wedding photography. Web
                  development is a crucial part of web development.
                </div>

                <div>
                  <div className="image-div">
                    <img className="profile-image" src={profile} alt="none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pics">
            <div className="boxes">
              <div className="elements">
                <img className="projects" src={photography} alt="none" />

                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/personal-project"
                >
                  View Code Here
                </a>
              </div>
              <div className="elements">
                <img className="projects" src={critique} alt="none" />
                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/no-db"
                >
                  View Code Here
                </a>
              </div>
              <div className="elements">
                <img className="projects" src={thisisdevmtn} alt="none" />
                <a
                  className="code-link"
                  href="https://github.com/C-E-Campbell/groupProjectWPX15"
                >
                  View Code Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
