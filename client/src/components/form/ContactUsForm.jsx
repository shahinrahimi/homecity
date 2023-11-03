import React, { useState } from "react"
import { Input, Button, TextArea } from ".."
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const messageObg = {
      firstName,
      lastName,
      email,
      subject,
      message
    }

    console.log(messageObg)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 p-8 rounded-lg shadow-lg w-full">
      <div className="flex flex-row gap-4">
        <Input
          label={'first name'}
          value={firstName}
          setValue={setFirstName}
          placeholder={"enter first name"}
        />
        <Input
          label={'last name'}
          value={lastName}
          setValue={setLastName}
          placeholder={"enter last name"}
        />
      </div>

      <Input
        label={'your email'}
        value={email}
        setValue={setEmail}
        placeholder={"enter your mail"}
      />
      <Input
        label={'subject'}
        value={subject}
        setValue={setSubject}
        placeholder={"what issue/suggestion do you have?"}
      />

      <TextArea
        label={'your message'}
        value={message}
        setValue={setMessage}
        placeholder={"query/suggestion"}
      />

      <div className="flex flex-row-reverse">
        {/* will add after deployment */}
        {/* <ReCAPTCHA
            // size="invisible"
            sitekey="6LcefbMoAAAAAM3qI0xMf4r_Ue24MEhZ-Kmyq2BX"
          /> */}
        <Button type="submit" text={"submit"} />
      </div>
    </form>
  )
}
export default ContactUsForm