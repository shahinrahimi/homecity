import React from "react";
import { useTranslation } from "react-i18next";
import { background1, background2 } from "../../assets/img";
import {
  Background, AboutUs, ContactUs, Hero, Section, Services, Experiences, Information,
  CarouselHero
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

      <CarouselHero />

      {/* hero */}
      {/* <Section id={"home"} h={'h-screen'}>
        <Hero />
      </Section> */}

      {/* services */}
      <Section id={"#franchizes"} darkTheme={true}>
        <Services />
      </Section>


      {/* experiences */}
      <Section id={"exp"} >
        <Experiences />
      </Section>

      {/* info with nice animation */}
      {/* cuz horizonal scrolling */}
      {/* <Section id={"info"} darkTheme={true}>
        <Information />
      </Section> */}

      {/* contact us messages*/}
      <Section id={"info"} >
        <ContactUs />
      </Section>

      {/* about us */}
      <Section id={"info"} darkTheme={true}>
        <AboutUs />
      </Section>

      <button onClick={() => scrollToSection("home")}>
        Click me
      </button>

    </main>
  );
};

export default Home