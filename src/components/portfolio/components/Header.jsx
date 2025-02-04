import React from "react";
import styles from "./Header.module.css";

export function Header() {
  const menuItems = [
    { name: "About Me", href: "#about-me" },
    { name: "Services", href: "#services" },
    { name: "Contact Me", href: "#contact" },
    { name: "GitHub", href: "https://github.com/chetanchaudharie", target: "_blank", rel: "noopener noreferrer" },
    { name: "Blog", href: "https://dev.to/chetan_choudhary_d01fd55b", target: "_blank", rel: "noopener noreferrer" }, // Open in new tab
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Chetan</div>
      <nav className={styles.navigation}>
        {menuItems.map((item) => (
          <a
            href={item.href}
            key={item.name}
            className={styles.navItem}
            target={item.target}
            rel={item.rel}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
