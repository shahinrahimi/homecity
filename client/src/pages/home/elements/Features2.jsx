import React from 'react'
import ImageTheather from './ImageTheather'
import { Button } from '../../../components'
const Features2 = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-10 items-center">
            {/* image */}
            <div className="w-[calc(100%)] md:w-[calc(%50)] rounded-xl overflow-hidden shadow-2xl shadow-c-red-400">
                <ImageTheather />
            </div>
            {/* content */}
            <div className="flex flex-col w-[calc(100%)] md:w-[calc(%50)]">
                <h4 className='mb-2'>Explore</h4>
                <h1 className='text-4xl font-bold mb-2'>Discover Exclusive Real Estate Opportunities in Turkey</h1>
                <p
                    className='mb-8'
                >Unlock the benefits of Turkish citizenship by investing in real estate. Enjoy visa-free travel, access to a thriving economy, and a high quality of life.</p>
                
                <Button 
                    text={"explore reale states"}
                />
            </div>
        </div>
      )
}

export default Features2