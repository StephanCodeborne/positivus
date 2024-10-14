import { useState } from "react";
import IntroText from "../../components/intro-text/IntroText";
import SectionContent from "../../components/section-content/SectionContent";
import Step from "../../components/step/Step";
import styles from "./working-process.module.css";

export default function WorkingProcess() {
  const [activeStep, setActiveStep] = useState("");

  function handleToggle(stepNumber) {
    setActiveStep((active) => (active === stepNumber ? "" : stepNumber));
  }

  return (
    <section id="working-process" className="section-content-container">
      <SectionContent>
        <IntroText
          sectionTitle={"Our Working Process"}
          descriptionMaxWidth="18.25rem"
        >
          Step-by-Step Guide to Achieving Your Business Goals
        </IntroText>

        <div className={styles.steps}>
          <Step
            stepNumber="01"
            title="Consultation"
            activeStep={activeStep}
            onToggle={handleToggle}
          >
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Step>
          <Step
            stepNumber="02"
            title="Research and Strategy Development"
            activeStep={activeStep}
            onToggle={handleToggle}
          >
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Step>
          <Step
            stepNumber="03"
            title="Implementation"
            activeStep={activeStep}
            onToggle={handleToggle}
          >
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Step>
          <Step
            stepNumber="04"
            title="Monitoring and Optimization"
            activeStep={activeStep}
            onToggle={handleToggle}
          >
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Step>
          <Step
            stepNumber="05"
            title="Reporting and Communication"
            activeStep={activeStep}
            onToggle={handleToggle}
          >
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Step>
          <Step
            stepNumber="06"
            title="Continual Improvement"
            activeStep={activeStep}
            onToggle={handleToggle}
          >
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </Step>
        </div>
      </SectionContent>
    </section>
  );
}
