import React, { useState } from "react";
import styles from "./ServiceCard.module.css";

export function ServiceCard({ title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.serviceCard} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
