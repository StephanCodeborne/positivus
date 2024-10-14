import Button from "../../components/button/Button";
import SectionContent from "../../components/section-content/SectionContent";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav id="navbar" className="section-content-container">
      <SectionContent className={styles.navContent}>
        <a href="/">
          <img src="images/logo-dark.svg" alt="logo" className={styles.logo} />
        </a>

        <ul className={styles.links}>
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
            <Button type="button" className={styles.button}>
              Request a quote
            </Button>
          </li>
        </ul>
      </SectionContent>
    </nav>
  );
}
