import React from 'react'

import { 
    project_1_image_0,
    project_1_image_1,
    project_1_image_2,
    project_1_image_3,
    project_1_image_4,
} from '../../../assets/img'



const ImageTheather = () => {
    const images = [
        project_1_image_0,
        project_1_image_1,
        project_1_image_2,
        project_1_image_3,
        project_1_image_4,
    ]

    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(Math.random()*images.length)) 

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random()*images.length)
            if (randomIndex !== currentIndex) {
                setCurrentIndex(randomIndex)
            }
        }, 5000)

        return () => (intervalId) ? clearInterval(intervalId) : null

    },[])

    return (
        <>
            <img className='w-full animate-zoomOut' src={images[currentIndex]} />
        </>
    )
}

export default ImageTheather