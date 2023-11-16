import React from "react";
import { useTranslation } from "react-i18next";
import { Section } from "../../components";
import { background1 } from "../../assets/img";
import { SmoothScrollingContext } from "../../context/SmoothScrollingContext";
import {
  Services, 
  Experiences, 
  Information,
  HeroCarousel, 
  ProjectsCarousel, 
  Features, 
  Features2, 
  Features3, 
  FAQs
} from "./elements";


const Home = () => {
  const { t } = useTranslation()

  const { scrollToSection } = React.useContext(SmoothScrollingContext)

  return (
    <main className="overflow-hidden">
      <HeroCarousel id={"home"} />

      <Section>
        <Features />
      </Section>

      <Section id={"#franchizes"} isDark={true}>
        <Services />
      </Section>

      <Section>
        <Features2 />
      </Section>

      <Section id={"exp"} background={background1} isDark={true} >
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