import React from 'react'
import { Button, Section, SimpleTeather } from '../../components'
import { useProjectStore } from '../../app/store'
import { useTranslation } from 'react-i18next'

const FeatureExplore = ({ id, isDark , background }) => {
    const { t } = useTranslation()
    const projects = useProjectStore.getState().projects

    const images = projects[0].imagesSrc
    return (
        <Section id={id} isDark={isDark} background={background}>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center">
                {/* image */}
                <div className="w-[calc(100%)] md:w-[calc(%50)] rounded-xl overflow-hidden shadow-2xl shadow-c-red-400 relative">
                    <SimpleTeather images={images} />
                </div>
                {/* content */}
                <div className="flex flex-col w-[calc(100%)] md:w-[calc(%50)]">
                    <h4 className='mb-2'>{t("explore")}</h4>
                    <h1 className='text-4xl font-bold mb-2'>{t("feature_explore_h")}</h1>
                    <p
                        className='mb-8'
                    >{t("feature_explore_p")}</p>
                    
                    <Button 
                        text={"explore reale states"}
                    />
                </div>
            </div>
        </Section>
      )
}

export default FeatureExplore