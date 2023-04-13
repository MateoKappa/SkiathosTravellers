import styles from "./Contact.module.scss";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_462g39c",
        "template_zagojfa",
        form.current,
        "o_vaqleCtcTkAiWrI"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className={styles.forum}>
      <h2>Contact Us</h2>
      <h4>Any questions or remarks? Just write us a message!</h4>
      <div className={styles.container}>
        <div className={styles.contact_information}>
          <h1>Contact Infromation</h1>
          <h4>Fill up the form and our Team will get back to you!</h4>
          <div className={styles.icons}>
            <i className="fas fa-phone-alt">
              <p>011-3291723</p>
            </i>
            <i className="fas fa-envelope">
              <p>skiathostravellers@gmail.com</p>
            </i>
            <i className="fas fa-map-marker-alt">
              <p>Port of skiathos</p>
            </i>
          </div>
          <div className={styles.socials}>
            <a target="_blank1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a target="_blank2">
              <i className="fab fa-twitter"></i>
            </a>
            <a target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className={styles.inputs}>
          <form ref={form} onSubmit={sendEmail}>
            <input placeholder="Name" name="name" />
            <input placeholder="Surname" name="surname" />
            <input placeholder="Your Email" type="email" name="email" />
            <input placeholder="phone" name="phone" />

            <textarea placeholder="" name="Text" className={styles.bigtext} />

            <button type="submit">Sumbit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
