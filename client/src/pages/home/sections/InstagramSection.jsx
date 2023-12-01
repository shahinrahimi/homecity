import React from 'react'
import { Section } from '../../../components'
import { InstagramEmbed } from 'react-social-media-embed'
const instagram_items = [
  {
    url: "https://www.instagram.com/reel/Czgc39ItOgf/"
  },
  {
    url: "https://www.instagram.com/reel/CzLvxYLtJ49/"
  },
  {
    url: "https://www.instagram.com/reel/CyLMhXPNuwJ/"
  },
  {
    url: "https://www.instagram.com/reel/Cx7ryXUtMKe/"
  },
  {
    url: "https://www.instagram.com/reel/CxsJwwAt5Wh/"
  },
  {
    url: "https://www.instagram.com/reel/CwfQfbMtDzw/"
  },
  {
    url: "https://www.instagram.com/reel/CvXSkypNEZ5/"
  },
  {
    url: "https://www.instagram.com/reel/Cz3Kj9VNWOn/"
  },
  {
    url : "https://www.instagram.com/reel/C0JThxvtM8f/"
  },
  // {
  //   url: "https://www.instagram.com/reel/CzBRpGPNNGA/"
  // },
  // {
  //   url: "https://www.instagram.com/reel/CylRANptGzD/"
  // },
  // {
  //   url: "https://www.instagram.com/p/CzTPLggtiEc/"
  // }
]

const InstagramSection = ({ id, isDark , background }) => {
  return (
    <Section id={id} isDark={isDark} background={background} >
      <div className='grid grid-cols-2 grid-rows-5'>
          {instagram_items.map((item,index) => {
            return (
              <InstagramEmbed key={index} url={item.url} size={500} captioned={false} />
            )
          })}
      </div>
    </Section>
  )
}

export default InstagramSection
