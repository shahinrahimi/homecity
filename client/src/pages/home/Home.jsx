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
  BlogsCarouselSection,
  FranchiseSection
} from "./sections";

import PreLoader from "../../components/loading/PreLoader";

const Home = () => {
  const { t } = useTranslation()

  const { scrollToSection } = React.useContext(SmoothScrollingContext)

  return (
    <main className="overflow-hidden">
      <PreLoader/>
      
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
      <FranchiseSection />
    </main>
  );
};

export default Home