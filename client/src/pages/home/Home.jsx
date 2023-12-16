import React from "react";
import { useTranslation } from "react-i18next";
import { background1 } from "../../assets/img";
import { SmoothScrollingContext } from "../../context/SmoothScrollingContext";
import { 
  HeroCarousel,
  BlogCarousel,
  ProjectCarousel,
  FeatureDiscover,
  FeatureExperience,
  FeatureExplore,
  FeatureService,
  FeatureServiceHub,
  Instagram,
  FAQ,
  FranchiseTicker
} from "../../container"

import PreLoader from "../../components/loading/PreLoader";

const Home = () => {
  const { t } = useTranslation()

  const { scrollToSection } = React.useContext(SmoothScrollingContext)
  
  return (
    <main className="overflow-hidden">
      <HeroCarousel id={"home"} />
      <FeatureDiscover id={"discover"} />
      <FeatureExperience id={"experience"} background={background1} isDark={true} />
      <FeatureServiceHub id={"servicehub"}  />
      <FeatureExplore id={"explore"}  isDark={true}/>
      <ProjectCarousel />
      <FeatureService id={"service"} isDark={true} />
      <BlogCarousel />
      <FranchiseTicker />
      <Instagram isDark={true} />
      <FAQ  />
    </main>
  );
};

export default Home