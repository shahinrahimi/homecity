import React from 'react'
import { benefitSvg, investmentSvg } from '../../../assets/svg'
import { passportImage } from '../../../assets/img'
import { Button, Simplify, Section } from '../../../components'

const FeaturesSection = ({ id, isDark , background }) => {
  return (
    <Section id={id} isDark={isDark} background={background}>
        <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            {/* content */}
            <div className="flex flex-col w-[calc(100%)] md:w-[calc(%50)]">
                <Simplify text={"Discover"}/>
                <h1 className='text-4xl font-bold mb-2'>Acquire Turkish Citizienship Throuth Investment</h1>
                <p
                    className='mb-8'
                >Unlock the benefits of Turkish citizenship by investing in real estate. Enjoy visa-free travel, access to a thriving economy, and a high quality of life.</p>
                <div className="flex justify-between mb-6">
                    <div className="flex flex-col gap-2">
                        <img src={benefitSvg} alt="" width="50px"/>
                        <h3 className='font-semibold'>Benefits</h3>
                        <p>Visa-free travel, access to a thriving economy, and a high quality of life.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <img src={investmentSvg} width="50px"/>
                        <h3
                            className='font-semibold'
                        >Investment</h3>
                        <p>Invest in Turkish real estate and secure your path to Turkish citizenship.</p>
                    </div>

                </div>

                <Button 
                    text={"Learn More"}
                    />



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

export default FeaturesSection