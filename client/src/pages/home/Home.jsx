import React from "react";
import { useTranslation } from "react-i18next";
import { background1, background2, background6 } from "../../assets/img";
import {
 AboutUs, ContactUs, Hero, Section, Services, Experiences, Information,
  HeroCarousel, ProjectsCarousel, Features, Features2, Features3, FAQs
} from "./elements";

import { Banner } from "../../components";

const Home = () => {
  const { t } = useTranslation()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // return (
  //   <CarouselHero />
  // )

  return (
    <main className="overflow-hidden">
      <HeroCarousel />

      <Section>
        <Features />
      </Section>

      <Section id={"#franchizes"} isDark={true}>
        <Services />
      </Section>

      <Section>
        <Features2 />
      </Section>

      <Section id={"exp"} background={background6} isDark={true} >
        <Experiences />
      </Section>

      <Section>
        <Features3 />
      </Section>

      {/* info with nice animation */}
      {/* cuz horizonal scrolling */}
      <Section id={"info"} darkTheme={true}>
        <Information />
      </Section>

      <Section isDark={true}>
        <ProjectsCarousel />
      </Section>

      <Section>
        <FAQs />
      </Section>


    </main>
  );
};

export default Home