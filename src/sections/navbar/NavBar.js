import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import SectionContent from "../../components/section-content/SectionContent";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewPortWidth = window.innerWidth;

      if (viewPortWidth <= 1106) {
        setShowMenu(true);
        setShowLinks(false);
      } else {
        setShowMenu(false);
        setShowLinks(true);
      }
    };

    handleResize(); // Run once on component mount to set initial state
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="navbar" className="section-content-container">
      <SectionContent className={styles.navContent}>
        <a href="/">
          <img src="images/logo-dark.svg" alt="logo" className={styles.logo} />
        </a>

        <ul
          className={`${styles.links} ${
            showMenu && showLinks ? styles.show : ""
          }`}
        >
          <li>
            <a className={styles.link} href="#">
              About us
            </a>
          </li>
          <li>
            <a className={styles.link} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Use Cases
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Blog
            </a>
          </li>
          <li>
            <Button isFilled={showMenu} type="button" className={styles.button}>
              Request a quote
            </Button>
          </li>
        </ul>

        <button
          onClick={() => setShowLinks((show) => !show)}
          className={styles.menu}
        >
          <img src="icons/burger-menu.svg" alt="menu" />
        </button>
      </SectionContent>
    </nav>
  );
}
