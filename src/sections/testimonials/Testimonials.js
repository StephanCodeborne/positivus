import styles from "./testimonials.module.css";
import SectionContent from "../../components/section-content/SectionContent";
import IntroText from "../../components/intro-text/IntroText";
import ReviewsSlider from "./reviews-slider/ReviewsSlider";
import { useState } from "react";

const reviewsList = [
  {
    reviewer: "John Smith",
    ocupation: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    reviewer: "John Smith",
    ocupation: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    reviewer: "John Smith",
    ocupation: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    reviewer: "John Smith",
    ocupation: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    reviewer: "John Smith",
    ocupation: "Marketing Director at XYZ Corp",
    review:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(reviewsList);
  return (
    <section id="testimonials" className="section-content-container">
      <SectionContent>
        <IntroText sectionTitle="Testimonials" descriptionMaxWidth="29.563rem">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </IntroText>

        <ReviewsSlider reviews={reviews} />
      </SectionContent>
    </section>
  );
}
