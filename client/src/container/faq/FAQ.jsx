import React from 'react'
import { BsFillArrowLeftCircleFill as ArrowIcon } from "react-icons/bs"
import { Button, Section } from '../../components'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from '../../context/LanguageContext'
const Faq = ({ question, answer, isOpen, toggle }) => {
    
    return (
        <div 
            className={`w-full flex flex-col group p-4 border-b-2 border-solid border-slate-600 border-opacity-30 cursor-pointer hover:bg-slate-50 ${isOpen ? "bg-c-white-100" : "bg-slate-200 transition-all duration-300"}`}
            onClick={toggle}
        >
            <div className="flex justify-between items-center">
                <h2 className='font-bold text-l mb-2 group-hover:text-rose-500'>{question}</h2>
                <ArrowIcon 
                    onClick={toggle}
                    className={`text-2xl  ${isOpen ? "rotate-90 text-slate-700" : "rotate-0 text-slate-500"} transition-all duration-300 group-hover:text-rose-500`}
                />
            </div>
            <p
                className={`${isOpen ? "opacity-100 translate-y-0 duration-300" : "opacity-0 duration-0 absolute translate-y-[calc(-50px)] -z-10"} transition-all`}
            >{answer}
            </p>
        </div>
    )
}

const FAQ = ({ id, isDark , background, haveQuestion=true }) => {

    const [currntIndex, setCurrentIndex] = React.useState(null)

    const { t } = useTranslation()
    const { dir, lang } = React.useContext(LanguageContext)

    const data = t("faqs", { returnObjects: true })

    const toggle = (index) => {
        if (index === currntIndex) {
            setCurrentIndex(null)
        } else {
            setCurrentIndex(index)
        }
    }


    const faqs = data.map((d, index) => {
        return (
            <Faq question={d.question} answer={d.answer}  key={index} isOpen={currntIndex===index} toggle={() => toggle(index)}/>
        )
    })
    return (
        <Section id={id} isDark={isDark} background={background} >
            <div dir={dir} className={`${lang === "fa" || "ar" ? "vazir" : ""}`}>
                <h1 className='bg-cu text-4xl font-bold mb-2'>{t("faqs_title")}</h1>
                <p className='text-xl mb-4'>{t("faqs_p_1")}</p>
                <div className="flex flex-col [&>*:last-child]:border-none [&>*:last-child]:rounded-b-lg [&>*:first-child]:rounded-t-lg mb-8">
                    {faqs}
                </div>

                {haveQuestion && (
                        <div className="flex flex-col gap-2">
                            <h2 className='text-3xl font-semibold mb-2'>{t("faqs_p_2")}</h2>
                            <p>{t("faqs_p_3")}</p>
                            <Button text={"Contact"} />
                        </div>
                    )
                    
                }
            </div>
        </Section>
    )
}

export default FAQ