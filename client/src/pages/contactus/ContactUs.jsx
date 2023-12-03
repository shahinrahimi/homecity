import React from "react"
import { Section } from "../../components"
import { underConstructionSvg } from "../../assets/svg";
import { ContactUsForm } from "../../components";
const ContactUs = () => {
  return (
    <Section>
      <main className="h-[calc(80vh)] grid place-content-center w-full">
        <ContactUsForm />
      </main>
    </Section>
  )
}
export default ContactUs