require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
// const massive = require("massive");
// const bodyParser = require("body-parser");
const path = require("path");
const { SESSION_SECRET, SERVER_PORT } = process.env;
const port = SERVER_PORT;
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 21
    }
  })
);

// massive(CONNECTION_STRING).then(db => {
//   console.log("db connected");
//   app.set("db", db);
// });

const nodemailer = require("nodemailer");
app.post("/auth/contact", (req, res) => {
  const { firstName, lastName, email, phone, info } = req.body;
  console.log(firstName, lastName, email, phone, info);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"));
  });

  let mailOptions = {
    from: email,
    to: process.env.EMAIL_NAME,
    subject: "New Client Contact",
    html: `<body>
           <h1>New Client Contact</h1>
           <ul style='list-style-type: none; padding: 0px; font-size: 18px;'>
               <li>Name: ${firstName} ${lastName}</li>
               <li>Email: ${email}</li>
               <li>Phone: ${phone}</li>
               <li>Info: ${info}</li>
               
           </ul>
           <body>`
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("error occurs");
    } else {
      console.log("email sent");
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
