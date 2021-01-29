import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";
import { FaReact, FaCss3Alt, FaNode, FaAws } from "react-icons/fa";
import {
  DiPostgresql,
  DiJsBadge,
  DiGithubFull,
  DiHtml5,
  DiVisualstudio,
  DiSass,
  DiPhotoshop,
  DiMongodb
} from "react-icons/di";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    };
  }
  firstHandleChange(value) {
    this.setState({
      firstName: value
    });
  }
  lastHandleChange(value) {
    this.setState({
      lastName: value
    });
  }
  emailHandleChange(value) {
    this.setState({
      email: value
    });
  }
  phoneHandleChange(value) {
    this.setState({
      phone: value
    });
  }

  submitButton(e) {
    e.preventDefault();
    let clientInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone
    };
    alert("email sent");
    axios.post("/auth/contact", clientInfo).then(response => {
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
      });
    });
    console.log(clientInfo);
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-main">
          <form className="contact-form">
            <div className="">
              <div>
                <label className="contact-label">First Name</label>
              </div>
              <input
                className="input-boxes"
                type="text"
                id="firstName"
                onChange={e => this.firstHandleChange(e.target.value)}
              />

              <div>
                <div>
                  <label className="contact-label">Last Name</label>
                </div>
                <input
                  className="input-boxes"
                  type="text"
                  id="lastName"
                  onChange={e => this.lastHandleChange(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="contact-label">Email</label>
                </div>
                <input
                  className="input-boxes"
                  type="text"
                  id="email"
                  onChange={e => this.emailHandleChange(e.target.value)}
                />
              </div>
              <div>
                <div>
                  <label className="contact-label">Phone Number</label>
                </div>
                <input
                  className="input-boxes"
                  type="text"
                  id="phoneNumber"
                  onChange={e => this.phoneHandleChange(e.target.value)}
                />
              </div>
              <div className="message-box">
                <button
                  className="send-button"
                  onClick={e => this.submitButton(e)}
                  type="submit"
                >
                  Contact me
                </button>
              </div>
            </div>
          </form>
          <div className="skills">
            <div className="skills-box">
              <FaCss3Alt size="100px" color="#1975ff" />
              <DiGithubFull size="100px" color="#000000" />
              <DiPostgresql size="100px" color="#125d88" />
              <FaReact size="100px" color="#32c6e0" />
              <FaNode size="100px" color="#1bd449" />
              <DiJsBadge size="100px" color="#ffd82d" />
            </div>
            <div className="skills-box">
              <DiHtml5 size="100px" color="#f13d1e" />
              <DiVisualstudio size="100px" color="#408abb" />
              <DiSass size="100px" color="#ff5ef7" />
              <DiPhotoshop size="100px" color="#1975ff" />
              <DiMongodb size='100px' color="#1bd449" />
              <FaAws size="100px" color="#FF9900" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
