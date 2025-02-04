import React, { useState } from "react";
import { Header } from "./components/Header";
import { SkillIcon } from "./components/SkillIcon";
import { ContactForm } from "./components/ContactForm";
import { ServiceCard } from "./components/ServiceCard";
import AboutMe from "./components/AboutMe"; // Import as default
import { skillsData } from "./components/skillsData";
import { animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";
import skillIconStyles from "./components/SkillIcon.module.css";

const services = [
  { title: "Web Development", description: "Custom websites & applications tailored to your needs." },
  { title: "Front-End/Backend Development", description: "Modern UI/UX development using React, HTML, CSS, and JavaScript, along with secure and scalable backend solutions using Node.js." },
  { title: "E-commerce Development", description: "Build high-converting online stores with payment integration." },
  { title: "Freelancing Services", description: "Hire me for your projects and get professional web solutions." },
  { title: "Portfolio Website Creation", description: "Showcase your work with a stunning personal portfolio." },
];

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <Header />

      <main className={styles.main}>
        <section id="home" className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Hi, I'm Chetan Choudhary</h1>
            <p className={styles.heroSubtitle}>
              Web Developer | Freelancer | Problem Solver
            </p>
            <p className={styles.heroDescription}>
              I specialize in crafting seamless and scalable web applications
              with modern tools and technologies.
            </p>
            <p className={styles.heroDescription}>
              Let’s create something extraordinary together.
            </p>
            <div className={styles.heroButtons}>
            <a href="/Chetan CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Download CV</a>
            <a href="https://www.linkedin.com/in/chetanchoudharie/" target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>LinkedIn</a>
            </div>

          </div>
          <img
            src="https://raw.githubusercontent.com/chetanchaudharie/portfolio-assets/refs/heads/main/hero-image.gif"
            alt="Chetan Choudhary"
            className={styles.heroImage}
          />
        </section>

        <section id="about-me">
          <AboutMe /> {/* Add the AboutMe component here */}
        </section>

        <section id="skills" className={skillIconStyles.skillsSection}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={skillIconStyles.skillsGrid}>
            <div className={skillIconStyles.skillCard}>
              <h3>Front-End</h3>
              <div className={skillIconStyles.skillCategory}>
                <div className={skillIconStyles.skillRow}>
                  {skillsData.frontEnd.slice(0, 2).map((skill, index) => (
                    <SkillIcon key={index} {...skill} />
                  ))}
                </div>
                <div className={skillIconStyles.skillRow}>
                  {skillsData.frontEnd.slice(2).map((skill, index) => (
                    <SkillIcon key={index} {...skill} />
                  ))}
                </div>
              </div>
            </div>
            <div className={skillIconStyles.skillCard}>
              <h3>Back-End</h3>
              <div className={skillIconStyles.skillCategory}>
                {skillsData.backEnd.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
            <div className={skillIconStyles.skillCard}>
              <h3>Others</h3>
              <div className={skillIconStyles.skillCategory}>
                {skillsData.others.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <ServiceCard title={service.title} description={service.description} />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2 className={styles.contactTitle}>
            Contact Me
          </h2>
          <div className={styles.contactContainer}>
            <ContactForm />
            <img
              src="https://github.com/chetanchaudharie/portfolio-assets/blob/main/contact-illustration.png?raw=true"
              alt="Contact illustration"
              className={styles.contactImage}
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contactInfo}>
          <div className={styles.emailContainer}>
            <img
              src="https://github.com/chetanchaudharie/portfolio-assets/blob/main/email-icon.png?raw=true"
              alt="E"
              className={styles.icon}
            />
            <span>chetanchoudharie@gmail.com</span>
          </div>
          <div className={styles.phoneContainer}>
            <img
              src="https://github.com/chetanchaudharie/portfolio-assets/blob/main/phone-icon.png?raw=true"
              alt="P"
              className={styles.icon}
            />
            <span>(+91) 9870424714</span>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2025 Chetan Chaudhary. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
