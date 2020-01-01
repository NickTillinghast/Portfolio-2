import React from "react";
import photography from "../media/photography.png";
import "./Portfolio.css";
import critique from "../media/critique.png";
import profile from "../media/profile.jpg";
import group from "../media/group.png";
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
                  Web development has merged many things I really enjoy in this
                  world. I was a professional photographer for many years so I
                  am a very visual person. Problem solving is a crucial part of
                  web development and problem solving was one of my favorite
                  parts of wedding photography.
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
