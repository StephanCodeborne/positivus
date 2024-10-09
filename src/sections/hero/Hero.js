import styles from "./hero.module.css";
import Button from "../../components/button/Button";
import Sponsors from "./sponsors/Sponsors";

export default function Hero() {
  return (
    <main className={`section-content-container ${styles.flexColumn}`}>
      <div className={`section-content ${styles.heroContent}`}>
        <div className={styles.left}>
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button isFilled={true}>Book a consultation</Button>
        </div>

        <div className="right">
          <img
            className={styles.image}
            src="images/hero-image.svg"
            alt="illustration"
          />
        </div>
      </div>

      <Sponsors />
    </main>
  );
}
