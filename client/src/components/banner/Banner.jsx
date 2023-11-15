const Banner = () => {
  return (
    <>
        <svg
            className='w-full h-[calc(20vw)] max-h-[calc(200px)] bg-c-white-500'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
        >
            <defs>
                <path
                    id="gentle-wave"
                    d="M-160 44c30 0 
                        58-18 88-18s
                        58 18 88 18 
                        58-18 88-18 
                        58 18 88 18
                        v44h-352z"
                />
            </defs>
            <g className="waves">
                <use
                    className='fill-c-black-800/40 animate-wave-1'
                    xlinkHref="#gentle-wave"
                    x="50"
                    y="0"
                />
                <use
                    className='fill-c-black-800/60 animate-wave-2'
                    xlinkHref="#gentle-wave"
                    x="50"
                    y="3"
                />
                <use
                    className='fill-c-black-800 animate-wave-3'
                    xlinkHref="#gentle-wave"
                    x="50"
                    y="6"
                />
            </g>
        </svg>
    </>
    
  )
}

export default Banner