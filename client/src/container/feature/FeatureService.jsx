import React from 'react'
import { 
    legalAssistant, 
    applicationProcessing, 
    propertyTours } from '../../assets/img'
import { Button, Section } from '../../components'
import { useTranslation } from 'react-i18next'
const data = [
    {
        title: "feature_service_h1",
        content: "feature_service_p1",
        image: legalAssistant

    },
    {
        title: "feature_service_h2",
        content: "feature_service_p2",
        image: propertyTours
        
    },
    {
        title: "feature_service_h3",
        content: "feature_service_p3",
        image: applicationProcessing
        
    }
]


const FeatureService = ({ id, isDark , background }) => {
    const { t } = useTranslation()
    const items = data.map((item, index) => {
        return (
            <li
                key={index}
                className='flex-col w-full lg:w-1/3 lg:flex-col gap-3'

            >
                {/* image */}
                <div className="w-full h-[calc(200px)] sm:h-[calc(250px)] md:h-[calc(300px)] border-2 border-c-red-700 border-opacity-50 shadow-xl rounded-md overflow-hidden mb-5">
                    <img 
                        src={item.image} alt=""
                        className='object-cover w-full h-full'
                    />
                </div>
                {/* content */}
                <div className="w-full flex-col">
                    <h2 className='text-xl font-bold text-center'>{t(item.title)}</h2>
                    <p className='text-center'>{t(item.content)}</p>
                </div>
                
            </li>
        )
    })
    return (
        <Section id={id} isDark={isDark} background={background} >
            <div className="flex flex-col justify-between items-center text-center gap-6">
                <h3 className='uppercase mb-2'>{t("service")}</h3>
                <h1 className='text-4xl mb-2 font-bold'>{t("feature_service_h")}</h1>
                <p>{t("feature_service_p")}</p>

                <ul className="flex flex-col lg:flex-row w-full justify-between gap-8 mt-8 self">
                    {items}
                </ul>

                <Button text={"Let's start"} alighClassName={"self-center"} />

            </div>
        </Section>
    )
}

export default FeatureService