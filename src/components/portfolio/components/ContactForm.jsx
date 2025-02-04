import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wp5kozh",
      "template_w6swtso",  // Replace with your actual EmailJS template ID
      e.target,
      "7vyCfUtQ3_sZ1uYwu"
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again.");
      }
    );

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="fullName" className={styles.label}>
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className={styles.input}
          aria-label="Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          E-mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          aria-label="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          aria-label="Message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        SEND
      </button>
    </form>
  );
}
