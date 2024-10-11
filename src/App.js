import NavBar from "./sections/navbar/NavBar";
import Hero from "./sections/hero/Hero";
import Services from "./sections/services/Srevices";
import ContactOffer from "./sections/contact-offer/ContactOffer";
import CaseStudies from "./sections/case-studies/CaseStudies";
import WorkingProcess from "./sections/working-process/WorkingProcess";
import Team from "./sections/team/Team";
import Testimonials from "./sections/testimonials/Testimonials";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <ContactOffer />
      <CaseStudies />
      <WorkingProcess />
      <Team />
      <Testimonials />
    </>
  );
}
