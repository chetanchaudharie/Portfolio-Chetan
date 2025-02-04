// filepath: /d:/Portfolio Chetan/Portfolio-Chetan/src/components/portfolio/components/SkillIcon.jsx
import React from 'react';
import styles from './SkillIcon.module.css';

export const SkillIcon = ({ image, altText }) => (
  <div className={styles.skillIconContainer}>
    <img
      src={image}
      alt={altText}
      className={styles.skillIcon}
    />
    <span className={styles.skillText}>{altText}</span>
  </div>
);