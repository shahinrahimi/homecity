import React from 'react'
import { useParams } from 'react-router-dom'
import { useFranchiseStore } from '../../app/store'
import { NotFound } from "../../pages"
import { MdLocationPin as LocationIcon } from "react-icons/md";
import { LanguageContext } from '../../context/LanguageContext';
import { TiTick as TickIcon } from "react-icons/ti";

const FranchisePage = () => {
  const { id } = useParams()
  const { getFranchiseById } = useFranchiseStore()
  const franchise = getFranchiseById(id)
  const { lang, dir } = React.useContext(LanguageContext)
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0)
  }, [])

  if (!franchise){
    return <NotFound />
  }

  const franchiseFa = franchise.translations.filter(t => t.language === "fa")[0]
  const franchiseAr = franchise.translations.filter(t => t.language === "ar")[0]
  const franchiseTr = franchise.translations.filter(t => t.language === "tr")[0]

  const {
    country,
    translations,
    branchCount,
    startYear,
    averageCost,
    imagesSrc,
    coverSrc,
    brandSrc
  } = franchise

  let title, content
    if (lang === "fa"){
        title = franchiseFa.title
        content = franchiseFa.content
    } else if (lang === "ar") {
        title = franchiseAr.title
        content = franchiseAr.content
    } else if (lang === "tr") {
        title = franchiseTr.title
        content = franchiseTr.content
    } else {
        title = franchise.title,
        content = franchise.content
    }
  
  return (
    <main dir={dir} className={`min-h-screen flex flex-col px-10 py-40 container mx-auto ${lang === "fa" || lang === "ar" ? "vazir" : ""}`}>
      {/* title and country */}
      <div className=" flex flex-col mb-4">
        <h1 className='text-4xl'>{title}</h1>
        <h3 dir='ltr' className={`flex text-slate-400 font items-center roboto`}>
          <span><LocationIcon /></span>
          <span>{country}</span>
        </h3>
      </div>
      {/* images */}
      <ul className='grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-3 w-full pb-8 border-b-2 border-black/10 mb-8'>
        <li className='row-span-2 col-span-2 w-full h-full rounded-md overflow-hidden'>
          <img 
            src={coverSrc} alt=""
            className='w-full h-full'
          />
        </li>
        <li className='w-full h-full rounded-md overflow-hidden'>
          <img 
            src={imagesSrc[0]} alt=""
            className='w-full h-full'
          />
        </li>
        <li className='w-full h-full rounded-md overflow-hidden'>
          <img 
            src={imagesSrc[1]} alt=""
            className='w-full h-full' 
          />
        </li>
        <li className='w-full h-full rounded-md overflow-hidden'>
          <img 
            src={imagesSrc[2]} alt="" 
            className='w-full h-full'
          />
        </li>
        <li>
          <img 
            src={brandSrc} alt="" 
            className='w-full h-full'
          />
        </li>
      </ul>

      {/* content */}
      <div className="mb-4">
        <h2 className='text-3xl'>{title}</h2>
        <p className='text-justify'>{content}</p>
      </div>

      {/* average cost */}
      <div className="">
        <h3>Average cost</h3>
        <div className="flex text-green-500">
          <span>{averageCost}</span><span>$</span>
        </div>
        
      </div>

      {/* details */}
      <ul className="">
        <li className="">
          <TickIcon className='text-green-500'/>
          <span>{startYear}</span>
        </li>

        <li className="">
          <TickIcon className='text-green-500' />
          <span>{branchCount}</span>
        </li>

      </ul>


    </main>
  )
}

export default FranchisePage