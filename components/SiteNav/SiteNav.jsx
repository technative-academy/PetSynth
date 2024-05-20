import React from "react";
import styles from "./SiteNav.module.css";
import { NavLink } from "react-router-dom";

function SiteNav() {
  const navLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "GitHub", url: "https://github.com/sfbennett" },
    { label: "Projects", url: "/projects" },
  ];
  return (
    <div className={styles.wrapper}>
      <nav className={styles.links}>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.url}
            to={navLink.url}
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.inactiveLink
            }
          >
            {navLink.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default SiteNav;
