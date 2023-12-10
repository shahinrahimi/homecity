import React from "react";
import { useTranslation } from "react-i18next";
import { background1 } from "../../assets/img";
import { SmoothScrollingContext } from "../../context/SmoothScrollingContext";
import {
  ServicesSection, 
  ExperiencesSection, 
  InformationSection,
  HeroCarousel,
  ProjectsCarouselSection, 
  FeaturesSection, 
  FeaturesSection2, 
  FeaturesSection3, 
  FAQsSection,
  InstagramSection,
  BlogsCarouselSection
} from "./sections";


const Home = () => {
  const { t } = useTranslation()

  const { scrollToSection } = React.useContext(SmoothScrollingContext)

  return (
    <main className="overflow-hidden">
      <HeroCarousel id={"home"} />
      <FeaturesSection />
      <ServicesSection isDark={true} />
      <FeaturesSection2 />
      <ExperiencesSection background={background1} isDark={true} />
      <FeaturesSection3 />
      <InstagramSection isDark={true} />
      <BlogsCarouselSection />
      <InformationSection isDark={true} />
      <ProjectsCarouselSection />
      <FAQsSection />
      <iframe
          width="450"
          height="250"
          frameborder="0"
          src="https://www.google.com/maps/place/Beykoz%2F%C4%B0stanbul/@41.2153589,29.1113098,15z/data=!4m6!3m5!1s0x409fd869ad5badbb:0xb7727b8d46d97252!8m2!3d41.1429436!4d29.1782018!16zL20vMDV6M2Nt"
          allowfullscreen>
      </iframe>
      <iframe
          width="450"
          height="250"
          frameborder="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96335.93559827539!2d28.871393202106262!3d41.014359812651726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab989e5fae399%3A0x34f0847eed8b22e0!2zRmF0aWgvxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1701528648049!5m2!1sen!2str"
          allowfullscreen>
      </iframe>

     <iframe width="450"
          height="250"
          frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Beykoz/İstanbul,+Türkiye&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" allowfullscreen></iframe>
    </main>
  );
};

export default Home