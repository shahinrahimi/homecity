import React from 'react'
import { Section, Modal } from '../../../components'
import { InstagramEmbed } from 'react-social-media-embed'
import { FaInstagram as InstagramIcon } from "react-icons/fa6";
import { 
  instagram_image_01,
  instagram_image_02,
  instagram_image_03,
  instagram_image_04,
  instagram_image_05,
  instagram_image_06,
  instagram_image_07,
  instagram_image_08,
  instagram_image_09,
  instagram_image_10,
  instagram_image_11,
  instagram_image_12,
} from '../../../assets/img';
const instagram_items = [
  {
    id:1,
    url: "https://www.instagram.com/reel/Czgc39ItOgf/",
    image: instagram_image_01,
  },
  {
    id:2,
    url: "https://www.instagram.com/reel/CzLvxYLtJ49/",
    image: instagram_image_02,
  },
  {
    id:3,
    url: "https://www.instagram.com/reel/CyLMhXPNuwJ/",
    image: instagram_image_03,
  },
  {
    id:4,
    url: "https://www.instagram.com/reel/Cx7ryXUtMKe/",
    image: instagram_image_04,
  },
  {
    id:5,
    url: "https://www.instagram.com/reel/CxsJwwAt5Wh/",
    image: instagram_image_05,
  },
  {
    id:6,
    url: "https://www.instagram.com/reel/CwfQfbMtDzw/",
    image: instagram_image_06,
  },
  {
    id:7,
    url: "https://www.instagram.com/reel/CvXSkypNEZ5/",
    image: instagram_image_07,
  },
  {
    id:8,
    url: "https://www.instagram.com/reel/Cz3Kj9VNWOn/",
    image: instagram_image_08,
  },
  {
    id:9,
    url : "https://www.instagram.com/reel/C0JThxvtM8f/",
    image: instagram_image_09,
  },
  {
    id:10,
    url: "https://www.instagram.com/reel/CzBRpGPNNGA/",
    image: instagram_image_10,
  },
  {
    id:11,
    url: "https://www.instagram.com/reel/CylRANptGzD/",
    image: instagram_image_11,
  },
  {
    id:12,
    url: "https://www.instagram.com/reel/Czgc39ItOgf/",
    image: instagram_image_12,
  },
]


const InstagramView = ({item}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const closeMe = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <li
      className='cursor-pointer group'
      onClick={openModal}
    >
      <div className="w-full h-full bg-red-500 rounded-md overflow-hidden group-hover:scale-105 transition-transform">
        <img 
          src={item.image} alt=""
          className='w-full h-full object-cover'
        />
      </div>
      <Modal isOpen={isOpen} closeMe={closeMe}>
          <InstagramEmbed url={item.url} />
          {/* <div className="">Hi</div> */}
      </Modal>
    </li>

  )
}

const InstagramSection = ({ id, isDark , background }) => {
  return (
    <Section id={id} isDark={isDark} background={background} >
      <h1 className='capitalize text-3xl font-bold w-[calc(90%)] mx-auto pb-4 text-center border-b-2 border-c-white-300/50'>Homecity Instagram</h1>
      <div className="flex items-center gap-2 m-4">
        <div className="grid place-content-center text-4xl p-4 bg-c-white-000 rounded-full text-c-black-200 ">
          <InstagramIcon />
        </div>
        <span>emirkaya.official</span>
      </div>
      
        {/* md and lg */}
      {/* <div className='hidden md:grid md:grid-cols-3 md:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3 gap-2'>
          {instagram_items.map((item,index) => {
            return (
              <div 
                className="w-full h-[calc(545px)] overflow-hidden"
                key={index} 
                >
                  <InstagramEmbed
                    url={item.url} 
                    captioned={false} 
                />
              </div>
              
            )
          })}
      </div> */}

      {/* <ul 
        className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-8"
        >
          {instagram_items.map(item => {
            return (
              <li
                key={item.id}
                className=''
              >
                <div className="w-full h-full bg-red-500 rounded-md overflow-hidden">
                  <img 
                    src={item.image} alt=""
                    className='w-full h-full object-cover'
                  />
                </div>
                <InstagramView 
                  children={<InstagramEmbed url={item.url} />}
                />
              </li>
            )
          })}
      </ul> */}

      <ul 
        className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-6 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 gap-8"
        >
          {instagram_items.map(item => {
            return (
              <InstagramView key={item.id} item={item} />
            )
          })}
      </ul>


    </Section>
  )
}

export default InstagramSection
