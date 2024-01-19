import React from "react";
import { Section } from "../../components";
import { underConstructionSvg } from "../../assets/svg";

const About = () => {

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <Section>
      <main className="h-[calc(80vh)] grid place-content-center w-full">
        <img
          className="h-full w-[calc(50vw)]"
          src={underConstructionSvg} alt="" 
        />
      </main>
    </Section>
  );
};

export default About