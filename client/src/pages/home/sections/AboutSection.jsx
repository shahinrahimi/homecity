import { address_image } from "../../../assets/img"
import { Section } from "../../../components"

const AboutSection = ({ id, isDark , background }) => {
  return (
    <Section id={id} isDark={isDark} background={background} >
      <div>
        <img src={address_image} />
        About
      </div>
    </Section>
  )
}

export default AboutSection
