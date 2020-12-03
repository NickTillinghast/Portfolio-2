import React from "react";
import photography from "../media/photography.png";
import "./Portfolio.css";
import critique from "../media/critique.png";
import profile from "../media/profile.png";
import juniors from "../media/juniors.png";
import thisisdevmtn from "../media/thisisdevmtn.png";
import crownClothing from "../media/crownClothing.png";
import infiniteScroll from "../media/infiniteScroll.png";
import jokeTeller from "../media/jokeTeller.png"

export default function Portfolio() {
  return (
    <div className="portfolio-main">
      <div className="words">
        <div className="portfolio-content">
          <div className="middle">
            <div>
              <div className="about-blurb">
                <div className="portfolio-text">
                  Former professional photographer turned web developer. I’m
                  hard working, humble, and always eager to expand my knowledge
                  to reach my goals. Problem solving and visual elements were a
                  big part of my photography business and now I bring those
                  passions into my web development.
                </div>
                <div className="profile-image-div">
                  <div className="image-div">
                    <img className="profile-image" src={profile} alt="none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pics">
            <div className="boxes-1">
              <div className="elements">
                <img className="projects" src={photography} alt="none" />
                <h1>
                  Photographer Website showcasing visual talents with many
                  galleries and contact form to hire photogapher.
                </h1>

                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/personal-project" target="blank"
                >
                  View Code Here
                </a>
                <a
                  className="code-link"
                  href="https://nicktillinghastphotography.com/#/" target="blank"
                >
                  Live Hosted Site Here
                </a>
              </div>
              <div className="elements">
                <img className="projects" src={critique} alt="none" />
                <h1>
                  Photography critique application that promotes constructive
                  feedback and a safe and visual learning experience.
                </h1>
                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/no-db" target="blank"
                >
                  View Code Here
                </a>
              </div>
              <div className="elements">
                <img className="projects" src={thisisdevmtn} alt="none" />
                <h1>
                  Project showcasing application for past, present and current
                  DevMountain students to view and experience students projects.
                </h1>
                <a
                  className="code-link"
                  href="https://github.com/C-E-Campbell/groupProjectWPX15" target="blank"
                >
                  View Code Here
                </a>
                <a className="code-link" href="https://thisisdevmountain.com/" target="blank">
                  Live Hosted Site Here
                </a>
              </div>
            </div>
            <div className="boxes-2">
              <div className="elements">
                <img className="projects" src={juniors} alt="none" />

                <h1>
                  Business website for Junior Barber Parlor providing business information and online representation of barbers.
                </h1>

                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/juniors" target="blank"
                >
                  View Code Here
                </a>
                <a className="code-link" href="https://juniorsbarberparlor.netlify.com/#/" target="blank">
                  Live Hosted Site Here
                </a>
              </div>
              <div className="elements">
                <img className="projects" src={crownClothing} alt="none" />

                <h1>
                  E-commerce site for clothing company with galleries and google login.  Payments accepted with stripe API.
                </h1>

                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/crown-clothing-e-commerce" target="blank"
                >
                  View Code Here
                </a>
                <a className="code-link" href="https://crown-live-build.herokuapp.com/" target="blank">
                  Live Hosted Site Here
                </a>
              </div>
              <div className="elements">
                <img className="projects" src={infiniteScroll} alt="none" />

                <h1>
                  Infinite Scroll using the Unsplash API.  App loads images to create constant page of images to scroll through.                </h1>

                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/Infinite-Scroll-Images" target="blank"
                >
                  View Code Here
                </a>
                <a className="code-link" href="https://nicktillinghast.github.io/Infinite-Scroll-Images/" target="blank">
                  Live Hosted Site Here
                </a>
              </div>
            </div>
            <div className="boxes-3">
              <div className="elements">
                <img className="projects" src={jokeTeller} alt="none" />

                <h1>
                  Joke Teller app using the text to speech api and joke api.</h1>
                <a
                  className="code-link"
                  href="https://github.com/NickTillinghast/joke-teller" target="blank"
                >
                  View Code Here
                </a>
                <a className="code-link" href="https://nicktillinghast.github.io/joke-teller/" target="blank">
                  Live Hosted Site Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
