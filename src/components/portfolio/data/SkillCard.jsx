import React from "react";
import styles from "./SkillCard.module.css";

export function SkillCard({ title, skills }) {
  return (
    <div className={styles.skillCard}>
      <h3 className={styles.skillTitle}>{title}</h3>
      <div className={styles.skillContent}>
        {skills.map((skill) => (
          <div key={skill} className={styles.skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
