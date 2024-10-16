import Button from "../../components/button/Button";
import SectionContent from "../../components/section-content/SectionContent";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className="section-content-container">
      <SectionContent className={styles.content}>
        <nav className={styles.footerNav}>
          <a href="/">
            <img
              src="images/white-logo.svg"
              alt="logo"
              className={styles.logo}
            />
          </a>

          <ul className={styles.links}>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="">Use Cases</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>

          <ul className={styles.socialMedia}>
            <a href="#">
              <img src="icons/white-dark-linkedin.svg" alt="linkedin" />
            </a>
            <a href="#">
              <img src="icons/white-dark-facebook.svg" alt="facebook" />
            </a>
            <a href="#">
              <img src="icons/white-dark-twitter.svg" alt="twitter" />
            </a>
          </ul>
        </nav>

        <div className={styles.main}>
          <div className={styles.contactUs}>
            <h4 className="heading-bg brand-green">Contact us:</h4>

            <ul className={styles.contacts}>
              <li>
                <p className={styles.caption}>Email: </p>
                <a href="#">
                  <p> info@positivus.com</p>
                </a>
              </li>
              <li>
                <p className={styles.caption}>Phone: </p>
                <a href="#">
                  <p> 555-567-8901</p>
                </a>
              </li>
              <li>
                <p className={styles.caption}>Adress: </p>
                <a href="#">
                  <p> 1234 Main St Moonstone City, Stardust State</p>
                </a>
              </li>
            </ul>
          </div>

          <form className={styles.subscribtion}>
            <input className={styles.email} type="email" placeholder="Email" />
            <Button isFilled={true} type="submit" className={styles.subscribe}>
              Subscribe to news
            </Button>
          </form>
        </div>

        <ul className={`${styles.socialMedia} ${styles.mob}`}>
          <a href="#">
            <img src="icons/white-dark-linkedin.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="icons/white-dark-facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="icons/white-dark-twitter.svg" alt="twitter" />
          </a>
        </ul>

        <div className={styles.initials}>
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#">
            <p>Privacy Policy</p>
          </a>
        </div>
      </SectionContent>
    </footer>
  );
}
