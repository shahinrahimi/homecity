import React from "react"
import { contact_us_svg } from "../../../assets/svg"
import { ContactUsForm } from "../../../components"


const ContactUs = () => {

  return (
    <div className="flex flex-col gap-8 justify-between items-center md:flex-row">
      <div className="w-full md:w-1/2">
        <img src={contact_us_svg} className="block w-full" />
      </div>
      <div className="w-full md:w-1/2">
        <ContactUsForm />
      </div>
    </div>
  )
}
export default ContactUs