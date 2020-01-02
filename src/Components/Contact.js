import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

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
                <div>
                  <label className="contact-label">First Name</label>
                </div>
                <input
                  className="input-boxes"
                  type="text"
                  id="firstName"
                  // placeholder="First Name"
                  onChange={e => this.firstHandleChange(e.target.value)}
                />
              </div>
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
        </div>
      </div>
    );
  }
}
