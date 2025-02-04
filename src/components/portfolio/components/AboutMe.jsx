import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.description}>
        Hi, I'm <strong>Chetan Choudhary</strong> – a passionate and results-driven <strong>Full-Stack Developer</strong> with expertise in crafting modern, scalable, and high-performance web applications. 🚀  
        <br /><br />
        With a strong command over <strong>React.js, Django, Flask, MongoDB, and Vite</strong>, I thrive on building intuitive user interfaces and robust back-end architectures. My focus is on delivering seamless digital experiences through clean code, efficient APIs, and cutting-edge web technologies.
        <br /><br />
        <strong>🔹 Key Achievements:</strong>  
        - Successfully developed and deployed a **Flask-based portfolio project** showcasing my technical expertise.  
        - Built a **React portfolio project** with advanced routing, state management, and API integrations.  
        - Gained hands-on experience in **Selenium automation** for web testing.  
        - Developing a **React Native sleep-tracking app** that detects dream talking and snoring.  
        <br /><br />
        <strong>📜 Certifications:</strong>  
        - **The Complete Python Developer** – Strengthened my Python and back-end skills.  
        - **Software Testing Tutorial - Great Learning Academy** – Acquired expertise in software quality assurance.  
        <br /><br />
        <strong>💡 Projects & Experience:</strong>  
        - Worked on various **full-stack applications**, integrating APIs, authentication, and database management.  
        - Currently enhancing my skills in **MERN stack development**, focusing on performance optimization and scalability.  
        <br /><br />
        Beyond coding, I’m an <strong>EDM enthusiast</strong> who loves deep bass drops, a fan of mystery-thriller series, and always eager to explore new tech. 🎧
        <br /><br />
        Let's create something amazing together!
      </p>
    </div>
  );
};

export default AboutMe;