import styles from "./contact-offer.module.css";
import SectionContent from "../../components/section-content/SectionContent";
import Button from "../../components/button/Button";

export default function ContactOffer() {
  return (
    <section id="contact-offer" className="section-content-container">
      <SectionContent className={styles.content}>
        <div className={styles.left}>
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button isFilled={true}>Get your free proposal</Button>
        </div>

        <div className={styles.right}>
          <img src="images/contact-offer-image.svg" alt="illustration" />
        </div>
      </SectionContent>
    </section>
  );
}
