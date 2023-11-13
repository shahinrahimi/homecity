import React from "react";
import { useTranslation } from "react-i18next";
import { background1, background2, background6 } from "../../assets/img";
import {
  Background, AboutUs, ContactUs, Hero, Section, Services, Experiences, Information,
  HeroCarousel, ProjectsCarousel, Features, Features2, Features3, FAQs
} from "./elements";



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
    <main className="relative top-20">

      {/* background */}
      {/* <Background image={background1} filterStr={"4"} /> */}

      <HeroCarousel />

      <Section>
        <Features />
      </Section>

      {/* hero */}
      {/* <Section id={"home"} h={'h-screen'}>
        <Hero />
      </Section> */}

      {/* services */}
      <Section id={"#franchizes"} isDark={true}>
        <Services />
      </Section>

      <Section>
        <Features2 />
      </Section>


      {/* experiences */}
      <Section id={"exp"} background={background6} isDark={true} >
        <Experiences />
      </Section>

      <Section>
        <Features3 />
      </Section>

      {/* info with nice animation */}
      {/* cuz horizonal scrolling */}
      {/* <Section id={"info"} darkTheme={true}>
        <Information />
      </Section> */}

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