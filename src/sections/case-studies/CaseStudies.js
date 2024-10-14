import { useState } from "react";
import IntroText from "../../components/intro-text/IntroText";
import ReferenceList from "../../components/reference-list/ReferenceList";
import SectionContent from "../../components/section-content/SectionContent";
import styles from "./case-studies.module.css";

const caseStudiesList = [
  {
    id: 0,
    href: "#",
    description:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    id: 1,
    href: "#",
    description:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    id: 2,
    href: "#",
    description:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState(caseStudiesList);

  return (
    <section id="case-studies" className="section-content-container">
      <SectionContent className={styles.content}>
        <IntroText sectionTitle="Case Studies" descriptionMaxWidth="36.25rem">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </IntroText>

        <ReferenceList list={caseStudies} />
      </SectionContent>
    </section>
  );
}
