import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div>
        <div className="form-boxes">
          <form method="POST" data-netlify="true">
            <p>
              <label>
                Your Name:{" "}
                <input className="input-boxes" type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email:{" "}
                <input className="input-boxes" type="email" name="email" />
              </label>
            </p>

            <p>
              <label>
                Message: <input className="message-box" name="message"></input>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
