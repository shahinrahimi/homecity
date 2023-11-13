import React from 'react'
import { BsFillArrowLeftCircleFill as ArrowIcon } from "react-icons/bs"
import { Button } from '../../../components'
const data = [
    {
        question: "How to apply for citizenship?",
        answer: "To apply for citizenship in Turkey, you need to meet certain criteria and submit the required documents. Our team of experts can guide you through the process and assist you with the application."
    },
    {
        question: "Can foreigners buy property?",
        answer: "Yes, foreigners are allowed to buy property in Turkey. There are certain regulations and procedures to follow, but our experienced agents can help you navigate the real estate investment process."
    },
    {
        question: "What are the benefits?",
        answer: "Obtaining Turkish citizenship offers numerous benefits, including access to a high-quality healthcare system, affordable education, and a favorable business environment. Our team can provide you with detailed information on the advantages of becoming a Turkish citizen."
    },
    {
        question: "How long does it take?",
        answer: "The duration of the citizenship process can vary depending on individual circumstances. Our experts will assess your situation and provide you with an estimated timeline for the completion of the process."
    },
    {
        question: "What is the cost?",
        answer: "The cost of obtaining Turkish citizenship can vary depending on factors such as the type of investment and the number of family members included in the application. Our team will provide you with a transparent breakdown of the costs involved."
    }
]

const Faq = ({question, answer, isOpen, toggle}) => {
    return (
        <div 
            className={`w-full flex flex-col group p-4 border-b-2 border-solid border-slate-600 border-opacity-30 cursor-pointer hover:bg-slate-50 ${isOpen ? "bg-c-white-100" : "bg-slate-200 transition-all duration-300"}`}
            onClick={toggle}
        >
            <div className="flex justify-between">
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



const FAQs = () => {

    const [currntIndex, setCurrentIndex] = React.useState(null)

    const toggle = (index) => {
        if (index === currntIndex) {
            setCurrentIndex(null)
        } else {
            setCurrentIndex(index)
        }
    }


    const Faqs = data.map((d, index) => {
        return (
            <Faq question={d.question} answer={d.answer}  key={index} isOpen={currntIndex===index} toggle={() => toggle(index)}/>
        )
    })
    return (
        <div className="">
            <h1 className='bg-cu text-4xl font-bold mb-1'>FAQs</h1>
            <p className='text-xl mb-4'>Find answers to common questions about the citizenship process, real estate investment, and living in Turkey.</p>
            <div className="flex flex-col [&>*:last-child]:border-none mb-8">
                {Faqs}
            </div>

            <div className="flex flex-col gap-2">
                <h2 className='text-3xl font-semibold'>Still have questions?</h2>
                <p>Contact out team for further assistance.</p>
                <Button text={"Contact"} />
            </div>
            
        </div>
    )
}

export default FAQs