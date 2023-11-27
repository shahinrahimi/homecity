import React from 'react'
import { Icons } from '../../icons';

const socials = [
    {
      name : "Instagran",
      icon : Icons.InstagramIcon,
      link:"https://www.instagram.com/Homey_invest/"
    },
    {
      name : "Youtube",
      icon : Icons.YoutubeIcon,
      link: "https://www.youtube.com/@emirkaya.istanbul"
    },
    {
      name : "Facebook",
      icon : Icons.FacebookIcon,
      link: ""
    },
    {
      name : "X",
      icon : Icons.TwitterXIcon,
      link: "https://twitter.com/Emirkaya_ist"
    },
    {
      name : "Telegram",
      icon : Icons.TelegramIcon,
      link: "https://t.me/emirkaya_official"
    },
    {
      name : "WhatsApp",
      icon : Icons.WhatsAppIcon,
      link: "https://api.whatsapp.com/send?phone=905411214030&text="
    }
]

const Socials = ({parentClassName, childClassName}) => {
  return (
    <ul className={parentClassName}>
        {socials.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.link} className='cursor-pointer' target="_blank" >
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