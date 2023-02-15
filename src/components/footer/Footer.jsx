import React, { useRef } from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
  const form = useRef();

  function sendStatusMsgGood() {
    const msg = document.querySelector(".success");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  }
  function sendStatusMsgBad() {
    const msg = document.querySelector(".warning");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000);
  }

  function cleanFormData() {
    const inputName = document.querySelector(".input-name");
    const inputEmail = document.querySelector(".input-email");
    const inputTextarea = document.querySelector(".input-textarea");
    inputName.value = "";
    inputEmail.value = "";
    inputTextarea.value = "";
  }

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_nbvfc4p",
        "template_7xj0r1p",
        form.current,
        "SI58jEejm8ALsjbd-"
      )
      .then(
        (result) => {
          console.log(result.text);
          // show the user a success message
          console.log(form.current);
          cleanFormData();

          sendStatusMsgGood();
        },
        (error) => {
          console.log(error.text);
          sendStatusMsgBad();
          // show the user an error
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <p
        className="success"
        style={{ display: "none", color: "green", textAlign: "center" }}
      >
        Your message has been delivered!
      </p>
      <p
        className="warning"
        style={{ display: "none", color: "darkred", textAlign: "center" }}
      >
        Something went wrong!
      </p>
      <label className="label-input-name" htmlFor="input-name">
        Name
      </label>
      <input
        className="input-name"
        name="user_name"
        id="input-name"
        type="text"
        placeholder="Name"
      />
      <label className="label-input-email" htmlFor="input-email">
        Email
      </label>
      <input
        className="input-email"
        name="user_email"
        id="input-email"
        type="text"
        placeholder="Email"
      />
      <label className="label-input-text" htmlFor="input-text">
        Type your question
      </label>
      <textarea
        className="input-textarea"
        name="message"
        id="input-text"
        placeholder="Provide your email here as well!"
      ></textarea>
      <input className="input-btn" type="submit" value="Send" />
    </form>
  );
};

const Footer = () => {
  return (
    <div className="container">
      <section id="contact">
        <h2 className="section-title">Contact me</h2>
        <footer className="footer" id="footer">
          <EmailContactForm />
          <div className="footer-contacts">
            <a
              href="https://linkedin.com/in/olegskrivko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="contact-icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com//olegskrivko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="contact-icon" />
              Github
            </a>

            <a
              href="mailto:olegs.krivko@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrMail className="contact-icon" />
              olegs.krivko@gmail.com
            </a>
            <a
              href="tel:+37129771299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTelephoneFill className="contact-icon" />
              +371 29771299
            </a>
            <a
              href="https://www.google.com/maps/@56.9510767,24.1088039,14z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationOn className="contact-icon" />
              Latvia, Riga
            </a>
          </div>
          <p className="copyright-text">&copy;Made by Olegs Krivko</p>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
