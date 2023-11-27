import React from "react"
import { contact_us_svg } from "../../../assets/svg"
import { ContactUsForm } from "../../../components"
import { Section } from "../../../components"

const ContactUsSection = ({ id, isDark , background }) => {

  return (
    <Section id={id} isDark={isDark} background={background} >
      <div className="flex flex-col gap-8 justify-between items-center md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={contact_us_svg} className="block w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <ContactUsForm />
        </div>
      </div>
    </Section>
  )
}

export default ContactUsSection 
