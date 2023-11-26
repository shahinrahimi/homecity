import React from 'react'
import { Icons } from '../../icons';

const socials = [
    {
      name : "Instagran",
      icon : Icons.InstagramIcon,
      link:""
    },
    {
      name : "Youtube",
      icon : Icons.YoutubeIcon,
      link: ""
    },
    {
      name : "Facebook",
      icon : Icons.FacebookIcon,
      link: ""
    },
    {
      name : "X",
      icon : Icons.TwitterXIcon,
      link: ""
    },
    {
      name : "Telegram",
      icon : Icons.TelegramIcon,
      link: ""
    },
    {
      name : "WhatsApp",
      icon : Icons.WhatsAppIcon,
      link: ""
    }
]

const Socials = ({parentClassName, childClassName}) => {
  return (
    <ul className={parentClassName}>
        {socials.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.link} className='cursor-pointer'>
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