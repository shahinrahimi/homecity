import React from 'react'
import { AiOutlineInstagram as InstagramIcon, 
    AiFillYoutube as YoutubeIcon, 
    AiFillLinkedin as LinkdinIcon,
    AiFillFacebook as FacebookIcon,  
} from "react-icons/ai"
import { RiTwitterXFill as TwitterXIcon } from "react-icons/ri"

const socials = [
    {
      name : "Instagran",
      icon : InstagramIcon,
      link:""
    },
    {
      name : "Youtube",
      icon : YoutubeIcon,
      link: ""
    },
  
    {
      name : "Linkdin",
      icon : LinkdinIcon,
      link: ""
    },
  
    {
      name : "facebook",
      icon : FacebookIcon,
      link: ""
    },
  
    {
      name : "X",
      icon : TwitterXIcon,
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