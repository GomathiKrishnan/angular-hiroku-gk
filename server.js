//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/angular-hiroku-gk"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular-hiroku-gk/" })
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

export function sendEmail(email, time) {
  console.log("email", email);
  console.log("time", time);
  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "learnwithfunproduct@gmail.com",
      pass: "LearnwithFun@21",
    },
  });

  var mailOptions = {
    from: "JSSkillParticapant",
    to: "learnwithfunproduct@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
