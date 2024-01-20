import React from 'react'
import { TextInput, TextAreaInput } from '../../components'
import { createNewMessage } from '../../api'
import { GoogleReCaptcha } from "react-google-recaptcha-v3"
import { useTranslation } from 'react-i18next'
const ContactForm = () => {

    const [clientName, setClientName] = React.useState("")
    const [clientEmail, setClientEmail] = React.useState("")
    const [clientPhone, setClientPhone] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [messageContent, setMessageContent] = React.useState("")

    const { t } = useTranslation()

  const [token, setToken] = React.useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const messageObg = {
      username: clientName,
      lastName : "",
      contact: clientEmail,
      subject,
      content: messageContent,
      token: token,
    }

    console.log(messageObg)
    const res = await createNewMessage({ data : messageObg})
  }


  return (
    <form 
        className='p-8 shadow-sharp rounded-lg'
        action=""
    >
        {/* input values */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <li>
                <TextInput 
                    name={"clientname"}
                    value={clientName}
                    setValue={setClientName}
                    placeholder={t("your_name")}
                />
            </li>

            <li>
                <TextInput 
                    name={"clientEmail"}
                    value={clientEmail}
                    setValue={setClientEmail}
                    placeholder={t("email_address")}
                />
            </li>

            <li>
                <TextInput 
                    name={"clientphone"}
                    value={clientPhone}
                    setValue={setClientPhone}
                    placeholder={t("phone_number")}
                />
            </li>

            <li>
                <TextInput 
                    name={subject}
                    value={subject}
                    setValue={setSubject}
                    placeholder={t("subject")}
                />
            </li>

            <li className='colspan-1 md:col-span-2'>
                <TextAreaInput 
                    name={"messagecontent"}
                    value={messageContent}
                    setValue={setMessageContent}
                    placeholder={t("message")}
                />
            </li>
        </ul>

        <button
            className='bg-black text-white capitalize py-2 px-4 rounded-sm w-full'
        >
            {t("send")}
        </button>

        <GoogleReCaptcha 
            onVerify={setToken}
            
        />


    </form>
  )
}

export default ContactForm