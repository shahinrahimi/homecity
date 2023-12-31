import React from 'react'
import { useFranchiseStore } from '../../app/store'

const Brand = ({ brandImage }) => {

    return (
        <div className={`w-20 md:w-40 lg:w-60 grid place-content-center`}>
            <img src={brandImage} className='w-full h-full object-cover rounded-lg ' alt="" />
        </div>
    )
}

const FranchiseTicker = () => {
  const franchises = useFranchiseStore.getState().franchises

  const brands = franchises.map(f => f.brandSrc)

  return (
    <div dir="ltr" className="flex w-full h-full overflow-hidden py-8 md:py-10 lg:py-20 relative">

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
  )
}

export default FranchiseTicker