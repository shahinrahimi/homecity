import React from "react";
import { useTranslation } from "react-i18next";
import { background1 } from "../../assets/img";
import { SmoothScrollingContext } from "../../context/SmoothScrollingContext";
import {
  ServicesSection, 
  ExperiencesSection, 
  InformationSection,
  HeroCarousel,
  RealestateCarouselSection, 
  FeaturesSection, 
  FeaturesSection2, 
  FeaturesSection3, 
  FAQsSection,
  InstagramSection,
  BlogsSection
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
      <BlogsSection />
      <InformationSection isDark={true} />
      <RealestateCarouselSection />
      <FAQsSection />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96284.13887802274!2d28.57882471451361!3d41.049767654674746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b558b1fceb5dad%3A0x614634ee1252675e!2sEsenyurt%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1701374212280!5m2!1sen!2str" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </main>
  );
};

export default Home