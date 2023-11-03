import React from "react";
import { useTranslation } from "react-i18next";
import { background1, background2 } from "../../assets/img";
import { Background, AboutUs, ContactUs, Hero, Section, Services, Experiences, Information } from "./elements";


const Home = () => {
  const { t } = useTranslation()

  return (
    <main className="">

      {/* background */}
      <Background image={background1} filterStr={"4"} />

      {/* hero */}
      <Section id={"hero"} h={'h-screen'}>
        <Hero />
      </Section>

      {/* services */}
      <Section id={"service"} darkTheme={true}>
        <Services />
      </Section>


      {/* experiences */}
      <Section id={"exp"} >
        <Experiences />
      </Section>

      {/* info with nice animation */}
      {/* cuz horizonal scrolling */}
      <Section id={"info"} darkTheme={true}>
        <Information />
      </Section>

      {/* contact us messages*/}
      <Section id={"info"} >
        <ContactUs />
      </Section>

      {/* about us */}
      <Section id={"info"} darkTheme={true}>
        <AboutUs />
      </Section>

    </main>
  );
};

export default Home