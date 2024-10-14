import IntroText from "../../components/intro-text/IntroText";
import SectionContent from "../../components/section-content/SectionContent";
import Service from "../../components/service/Service";
import styles from "./services.module.css";

export default function Services() {
  return (
    <section id="services" className="section-content-container">
      <SectionContent className={styles.servicesContent}>
        <IntroText sectionTitle="Services" descriptionMaxWidth="36.25rem">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </IntroText>

        <div className={styles.services}>
          <Service
            headingRows={["Search engine", "optimization"]}
            imagePath="images/service-images/seo.png"
          />

          <Service
            headingRows={["Pay-per-click", "advertising"]}
            imagePath="images/service-images/ppca.png"
            headingBgColorClass="white"
            bgColor="var(--brand-green)"
          />

          <Service
            headingRows={["Social media", "marketing"]}
            imagePath="images/service-images/smm.png"
            headingBgColorClass="white"
            bgColor="var(--brand-dark)"
          />

          <Service
            headingRows={["Email", "marketing"]}
            imagePath="images/service-images/email-marketing.png"
          />

          <Service
            headingRows={["Content", "Creation"]}
            imagePath="images/service-images/content-creation.png"
            headingBgColorClass="white"
            bgColor="var(--brand-green)"
          />

          <Service
            headingRows={["Analytics and", "Tracking"]}
            imagePath="images/service-images/analytics.png"
            headingBgColorClass="brand-green"
            bgColor="var(--brand-dark)"
          />
        </div>
      </SectionContent>
    </section>
  );
}
