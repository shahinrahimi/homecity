import React from 'react'
import { benefitSvg, investmentSvg } from '../../assets/svg'
import { passportImage } from '../../assets/img'
import { Button, Simplify, Section } from '../../components'
import { useTranslation } from 'react-i18next'

const FeatureDiscover = ({ id, background, isDark }) => {
    const { t } = useTranslation()

  return (
    <Section id={id} isDark={isDark} background={background}>
        <div className={`flex flex-col md:flex-row justify-between gap-10 items-center`}>
            {/* content */}
            <div className="flex flex-col w-[calc(100%)] md:w-[calc(%50)]">
                <Simplify text={t("discover")}/>
                <h1 className='text-4xl font-bold mb-2'>{t("feature_discover_h1")}</h1>
                <p
                    className='mb-8'
                >{t("feature_discover_p1")}</p>
                <div className="flex justify-between mb-6">
                    <div className="flex flex-col gap-2">
                        <img src={benefitSvg} alt="" width="50px"/>
                        <h3 className='font-semibold'>{t("benefits")}</h3>
                        <p>{t("feature_discover_benefits")}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src={investmentSvg} width="50px"/>
                        <h3
                            className='font-semibold'
                        >{t("investment")}</h3>
                        <p>{t("feature_discover_investment")}</p>
                    </div>

                </div>

                <a
                    className="capitalize bg-transparent px-4 py-2 lg:px-8 lg:py-4 lg:text-lg hover:bg-red-600/75 self-start lg:self-center mt-10 border-4 transition-colors duration-200 font-bold border-c-black-300 hover:text-white"
                    href="#projects"
                    >
                    {t("learn_more")}
                </a>


            </div>
            {/* image */}
            <div className="w-[calc(100%)] md:w-[calc(%50)] rounded-xl overflow-hidden shadow-2xl shadow-red-400">
                <img 
                    src={passportImage} alt=""
                    className='w-full object-cover'
                />
            </div>
        </div>
    </Section>
  )
}

export default FeatureDiscover