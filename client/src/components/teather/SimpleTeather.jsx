import React from "react"

const SimpleTeather = ({ images }) => {

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

export default SimpleTeather