
import { NAVLINKS } from "../../constants/navLinks"
import { Brand } from "../header/elements"
import { Input } from "../../components"

import { AiOutlineInstagram as InstagramIcon, 
        AiFillYoutube as YoutubeIcon, 
        AiFillLinkedin as LinkdinIcon,
        AiFillFacebook as FacebookIcon,  
} from "react-icons/ai"
import { RiTwitterXFill as TwitterXIcon } from "react-icons/ri"


const socials = [
  {
    name : "Instagran",
    icon : InstagramIcon
  },
  {
    name : "Youtube",
    icon : YoutubeIcon
  },

  {
    name : "Linkdin",
    icon : LinkdinIcon
  },

  {
    name : "facebook",
    icon : FacebookIcon
  },

  {
    name : "X",
    icon : TwitterXIcon
  }
]

const Footer = () => {

  const year = new Date().getFullYear()


  return (
    <footer className="relative px-10 pt-10 pb-5 lg:px-20 lg:pt-20  w-screen bg-c-black-800 text-c-white-500 justify-center items-center">
      <div className="container mx-auto">
        {/* footer main */}
      <div className="flex-col mkd:flex-row justify-between items-center border-slate-500 border-b-2 border-opacity-50">

        {/* Brand and sie maps */}
        <div className="flex flex-col">
          <Brand />
          {/* address */}
          <address className="flex flex-col">
            <h3>Address</h3>
            <p>Universite Mh, Smaple Sk, N1, D200 ,Alura Tower, Avcilar/Turkey </p>
          </address>
          
          {/* contact */}
          <div className="flex flex-col">
            <h3>Contact</h3>
            <p>info@homecity@com.tr</p>
          </div>

          {/* socials */}
          <ul className="flex">
            {socials.map((item, index) => {
              return (
                <li key={index}>
                  {<item.icon 
                    className="text-2xl"
                  />}
                </li>
              )
            })}
          </ul>

        </div>

        <ul
            className="flex-col md:flex-row gap-2"
          >
          {NAVLINKS.map(item => {
            return (
              <li
                key={item.name}
              ><a href="">{item.name}</a></li>
            )
          })}
          </ul>

        {/* subscribe */}
        <div className="">
          <h3>Subscribe</h3>
          <div className="flex">
            <Input placeholder={"Enter your mail"}/>
            <a
              className="bg-transparent px-4 py-2 hover:bg-red-600/75 self-start mt-4  border-slate-700 border-4 transition-colors duration-200 font-bold hover:text-white" 
              href="#projects"
            >
              Subscribe
            </a>
          </div>
          <p>by subscribing, you agree to our Privacy Policy</p>
        </div>
        </div>

        {/* footer developer */}
        <div className="text-sm mx-auto flex justify-between items-center ">
        <ul className="flex gap-2">
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Term of Service</a></li>
        <li><a href="">Cookie Policy</a></li>
        </ul>
        <p>&copy; {year} <a href="">Shahin Rhimi</a>. All rights reseved</p>
        </div>

      </div>
      
    
    </footer>
  )
}
export default Footer