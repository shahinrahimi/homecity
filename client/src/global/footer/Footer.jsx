
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
        <Brand />

        <div className="flex flex-col items-start md:flex-row justify-between md:items-center border-slate-500 mb-4 gap-4">

        

          {/* Address and Contacts */}
          <div className="flex flex-col h-full gap-3 justify-between ">
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
            <ul className="flex gap-1">
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
          
          {/* site maps */}
          <div className="">
            <h1 className="font-bold mb-2">Links</h1>
            <ul
              className="flex flex-col gap-2"
            >
              {NAVLINKS.map(item => {
                return (
                  <li
                    className="capitalize hover:text-c-red-500 transition-all duration-300"
                    key={item.name}
                  ><a href="">{item.name}</a></li>
                )
              })}
            </ul>
          </div>
          

          {/* subscribe */}
          <div className="">
            <h1 className="font-bold mb-2">Subscribe</h1>
            <div className="flex justify-center items-center gap-2 mb-2">
              <Input placeholder={"Enter your mail"}/>
              <a
                className="bg-transparent px-4 py-2 hover:bg-red-600/75 self-start  border-slate-700 border-4 transition-colors duration-200 font-bold hover:text-white" 
                href="#projects"
              >
                Subscribe
              </a>
            </div>
            <p>by subscribing, you agree to our Privacy Policy</p>
          </div>

        </div>

        {/* footer developer */}
        <div className="text-sm mx-auto flex justify-between items-center  border-t-2 border-opacity-30 pt-2 border-red-300">
          <ul className="flex gap-2">
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Term of Service</a></li>
            <li><a href="">Cookie Policy</a></li>
          </ul>
          <p>&copy; {year} <a href="">Homecity</a>. All rights reseved</p>
        </div>

      </div>
      
    
    </footer>
  )
}
export default Footer