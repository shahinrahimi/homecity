import React from 'react'
import { Icons } from '../../icons';
import { socialLinks } from "../../constants/socialLinks"
const socials = [
    {
      name : "Instagran",
      icon : Icons.InstagramIcon,
      link:socialLinks.Instagram
    },
    {
      name : "Youtube",
      icon : Icons.YoutubeIcon,
      link: socialLinks.Youtube
    },
    {
      name : "Facebook",
      icon : Icons.FacebookIcon,
      link: ""
    },
    {
      name : "X",
      icon : Icons.TwitterXIcon,
      link: socialLinks.Twitter
    },
    {
      name : "Telegram",
      icon : Icons.TelegramIcon,  
      link: socialLinks.Telegram
    },
    {
      name : "WhatsApp",
      icon : Icons.WhatsAppIcon,
      link: socialLinks.WhatsApp
    }
]

const Socials = ({parentClassName, childClassName}) => {
  return (
    <ul className={parentClassName}>
        {socials.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.link} className='cursor-pointer' target="_blank" rel="noopener noreferrer" >
                    {<item.icon 
                        className={childClassName}
                    />}
                </a>
            </li>
        )
        })}
    </ul>
  )
}

export default Socials