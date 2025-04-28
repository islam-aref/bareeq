import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logoImage from "./logo.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("AR"); // Default language is Arabic

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle language change
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "AR" ? "AR" : "AR"));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src={logoImage}
              alt="Bareeq Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link
            to="/about"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            من نحن
          </Link>
          <Link
            to="/books"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            إصداراتنا
          </Link>
          <Link
            to="/publish"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            انشر معنا
          </Link>
          <Link
            to="/contact"
            className={styles.navLink}
            onClick={closeMobileMenu}
          >
            للتواصل
          </Link>
        </div>

        {/* Language Selector */}
        <div className={styles.languageSelector} onClick={toggleLanguage}>
          <span className={styles.languageText}>
            {language === "AR" ? "AR" : "AR"}
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <Link
            to="/about"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            من نحن
          </Link>
          <Link
            to="/publications"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            إصداراتنا
          </Link>
          <Link
            to="/publish"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            انشر معنا
          </Link>
          <Link
            to="/contact"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            للتواصل
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
