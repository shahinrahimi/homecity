import React from 'react'
import { legalAssistant, applicationProcessing, propertyTours } from '../../../assets/img'
import { Button } from '../../../components'
const data = [
    {
        title: "Legal Assistance",
        content: "Our experienced legal team is here to guide you through the process and ensure all legal requirements are met.",
        image: legalAssistant

    },
    {
        title: "Property Tours",
        content: "Discover the perfect property with our personalized tours, tailored to your preferences and needs.",
        image: propertyTours
        
    },
    {
        title: "Application Processing",
        content: "We handle the entire application process, ensuring accuracy and efficiency for a smooth experience.",
        image: applicationProcessing
        
    }
]

const Features3 = () => {

    const items = data.map((item, index) => {
        return (
            <li
                key={index}
                className='flex-col w-full lg:w-1/3 lg:flex-col gap-3'

            >
                {/* image */}
                <div className="w-full h-[calc(150px)] border-2 border-c-red-700 border-opacity-50 shadow-xl rounded-md overflow-hidden ">
                    <img 
                        src={item.image} alt=""
                        className='object-cover w-full h-full'
                    />
                </div>
                {/* content */}
                <div className="w-full flex-col">
                    <h2 className='text-xl font-bold text-center'>{item.title}</h2>
                    <p className='text-center'>{item.content}</p>
                </div>
                
            </li>
        )
    })
    return (
        <div className="flex flex-col justify-between items-center text-center">
            <h3 className='uppercase mb-2'>service</h3>
            <h1 className='text-4xl mb-4 font-bold'>Efficient Services for Citizenship and Real Estate</h1>
            <p>We offer a range of services to make your journey to Turkish citizenship and real estate ownership seamless. Our team provides expert legal assistance, personalized property tours, and efficient application processing.</p>

            <ul className="flex flex-col lg:flex-row w-full justify-between gap-4 mt-8 self">
                {items}
            </ul>

            <Button text={"Let's start"} alighClassName={"self-center"} />

        </div>
    )
}

export default Features3