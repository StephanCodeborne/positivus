import IntroText from "../../components/intro-text/IntroText";
import SectionContent from "../../components/section-content/SectionContent";
import styles from "./contact-us.module.css";
import ContactUsForm from "./form/ContactUsForm";

export default function ContactUs() {
  return (
    <section id="contact-us" className="section-content-container">
      <SectionContent className={styles.content}>
        <IntroText sectionTitle="Contact Us" descriptionMaxWidth="25.188rem">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </IntroText>

        <div className={styles.container}>
          <ContactUsForm />
          <img src="images/contact-us-image.svg" alt="illustration" />
        </div>
      </SectionContent>
    </section>
  );
}
