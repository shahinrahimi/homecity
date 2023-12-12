import React from 'react'
import { useFranchiseStore } from '../../../app/store'
import { Section } from '../../../components'

const Brand = ({ brandImage }) => {

    return (
        <div className={`w-20 md:w-40 lg:w-60 grid place-content-center`}>
            <img src={brandImage} className='w-full h-full object-cover rounded-lg ' alt="" />
        </div>
    )
}

const FranchiseSection = () => {

    const franchises = useFranchiseStore.getState().franchises

    const brands = franchises.map(f => f.brandSrc)

  return (
    // <Section className="grid place-content-stretch">
        <div className="flex w-full h-full overflow-hidden py-10 md:py-20 lg:py-40 relative">

            <div className="flex flex-nowrap animate-brand-ticker-1 justify-around items-center gap-8 md:gap-12 lg:gap-20">
                {brands.map((item, index) => {
                    return (
                        <Brand 
                            brandImage={item}
                            key={index}
                        />
                    )
                })}
            </div>

            <div className="flex flex-nowrap animate-brand-ticker-2 justify-around items-center gap-8 md:gap-12 lg:gap-20">
                {brands.map((item, index) => {
                    return (
                        <Brand 
                            brandImage={item}
                            key={index}
                        />
                    )
                })}
            </div>

            <div className="mask-1"></div>
            <div className="mask-2"></div>

        </div>
        
    // </Section>
  )
}

export default FranchiseSection