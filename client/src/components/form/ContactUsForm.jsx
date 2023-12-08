import React, { useState } from "react"
import { Input, Button, TextArea } from ".."
import { GoogleReCaptcha } from "react-google-recaptcha-v3"
import { createNewMessage } from "../../api"

const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const [token, setToken] = React.useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const messageObg = {
      username: firstName,
      lastName,
      contact: email,
      subject,
      content: message,
      token: token,
    }

    console.log(messageObg)

    const res = await createNewMessage({ data : messageObg})

    console.log(res)
  }

  console.log(token)

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50 p-8 rounded-lg shadow-lg w-full">
      <div className="flex flex-row gap-4">
        <Input
          id="firstname"
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
        id="email"
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
        id="content"
        label={'your message'}
        value={message}
        setValue={setMessage}
        placeholder={"query/suggestion"}
      />

      <GoogleReCaptcha 
        onVerify={setToken}
      />

      <div className="flex flex-row-reverse">
        {/* will add after deployment */}
        <Button type="submit" text={"submit"} id="clickme" />
      </div>
    </form>
  )
}
export default ContactUsForm