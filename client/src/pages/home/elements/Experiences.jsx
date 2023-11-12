
import { FaPeopleGroup } from "react-icons/fa6"
import { MdHomeWork } from "react-icons/md"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { Counter } from "../../../components"

const experience_items = [
  { order: 1, count: 105, name: "Franchises", icon: SiHomeassistantcommunitystore },
  { order: 2, count: 1256, name: "Customers", icon: FaPeopleGroup },
  { order: 3, count: 150, name: "Projects", icon: MdHomeWork },

]

const Experiences = () => {
  const experienceElements = experience_items.map(item => {
    return (
      <li key={item.name} className="flex flex-col justify-between items-center">
        <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
        <item.icon className="text-8xl mb-4" />
        <Counter
          className="text-4xl font-bold"
          count={item.count} duration={3} 
        />
      </li>
    )
  })

  return (
    <ul className="w-full flex flex-row justify-around items-center">
      {experienceElements}
    </ul>
  )
}

export default Experiences