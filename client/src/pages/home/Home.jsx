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

    </main>
  );
};

export default Home