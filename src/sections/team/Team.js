import { useState } from "react";
import IntroText from "../../components/intro-text/IntroText";
import SectionContent from "../../components/section-content/SectionContent";
import styles from "./team.module.css";
import Members from "./members/Members";
import Button from "../../components/button/Button";

const membersList = [
  {
    fullName: "John Smith",
    position: "CEO and Founder",
    linkedIn: "#",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    photo: "images/members/1.png",
  },
  {
    fullName: "Jane Doe",
    position: "Director of Operations",
    linkedIn: "#",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    photo: "images/members/2.png",
  },
  {
    fullName: "Michael Brown",
    position: "Senior SEO Specialist",
    linkedIn: "#",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    photo: "images/members/3.png",
  },
  {
    fullName: "Emily Johnson",
    position: "PPC Manager",
    linkedIn: "#",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    photo: "images/members/4.png",
  },
  {
    fullName: "Brian Williams",
    position: "Social Media Specialist",
    linkedIn: "#",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    photo: "images/members/5.png",
  },
  {
    fullName: "Sarah Kim",
    position: "Content Creator",
    linkedIn: "#",
    bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    photo: "images/members/6.png",
  },
];

export default function Team() {
  const [members, setMembers] = useState(membersList);
  return (
    <section id="team" className="section-content-container">
      <SectionContent className={styles.content}>
        <IntroText sectionTitle="Team" descriptionMaxWidth="29.563rem">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </IntroText>

        <Members members={members} />
        <div className={styles.btnContainer}>
          <Button isFilled={true}>See all team</Button>
        </div>
      </SectionContent>
    </section>
  );
}
