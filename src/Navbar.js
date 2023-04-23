import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className={`${styles.nav}`}>
        <ul className={`menu ${styles.menu}`}>
          <li className={`menu headings ${styles.headings}`}>
            <p
              className={`menu headingLink ${styles.headingLink}`}
              onClick={() => navigate("/")}
            >
              Home
            </p>
          </li>
          <li className={`menu headings ${styles.headings}`}>
            <a
              href="#0"
              className={`menu headingLink ${styles.headingLink}`}
              onClick={() => navigate("/about")}
            >
              About
            </a>
          </li>
          <li className={`menu headings ${styles.headings}`}>
            <a
              href="/contact"
              className={`menu headingLink ${styles.headingLink}`}
            >
              Contact
            </a>
          </li>

          <li className={`menu headings ${styles.headings}`}>
            <a href="#0" className={`menu headingLink ${styles.headingLink}`}>
              Schedule
            </a>
            <ul className={`subMenu ${styles.subMenu}`}>
              <li className={`menu subMenuHeading ${styles.subMenuHeading}`}>
                <a href="#0">Annual Schedule</a>
              </li>
            </ul>
          </li>

          <li className={`menu headings ${styles.headings}`}>
            <a href="#0" className={`menu headingLink ${styles.headingLink}`}>
              Profile
            </a>
            <ul className={`subMenu ${styles.subMenu}`}>
              <li className={`menu subMenuHeading ${styles.subMenuHeading}`}>
                <p
                  style={{ textDecoration: "underline", color: "#2375D8" }}
                  onClick={() => navigate("/profile")}
                >
                  View Profile
                </p>
              </li>
              <li
                className={`menu subMenuHeading ${styles.subMenuHeading}`}
                onClick={handleLogout}
              >
                Log Out
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
