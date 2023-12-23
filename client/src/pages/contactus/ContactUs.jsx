import React from "react"
import { Section } from "../../components"
import { background4 } from "../../assets/img"
import ContactForm from "./ContactForm";
import { FAQ } from "../../container"
import { useTranslation } from "react-i18next";
import { contact_us_svg } from "../../assets/svg"
const ContactUs = () => {

  const { t } = useTranslation()

  return (
    <main className="min-h-screen py-20">
      <Section background={background4}>
      </Section>
      <Section>
        <div className="flex flex-col lg:flex-row w-full justify-center items-center mb-8">
          {/* contact details */}
          <p className="mb-4 text-xl p-2">{t("contact_p")}</p>

          <img className="w-1/2 lg:w-1/4" src={contact_us_svg} />
        </div>
        <ContactForm />
        
      </Section>

      <FAQ haveQuestion={false}/>
      
    </main>
  )
}
export default ContactUs