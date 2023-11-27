
import { FaPeopleGroup } from "react-icons/fa6"
import { MdHomeWork } from "react-icons/md"
import { SiHomeassistantcommunitystore } from "react-icons/si"
import { Counter, Section } from "../../../components"

const experience_items = [
  { order: 1, count: 105, name: "Franchises", icon: SiHomeassistantcommunitystore },
  { order: 2, count: 1256, name: "Customers", icon: FaPeopleGroup },
  { order: 3, count: 150, name: "Projects", icon: MdHomeWork },

]

const ExperiencesSection = ({ id, isDark , background }) => {
  const experienceElements = experience_items.map(item => {
    return (
      <li key={item.name} className="flex flex-col justify-between items-center scale-75 lg:scale-100">
        
        <item.icon className="text-8xl mb-4" />
        <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
        <Counter
          className="text-4xl font-bold"
          count={item.count} duration={3} 
        />
      </li>
    )
  })

  return (
    <Section id={id} isDark={isDark} background={background}>
      <ul className="w-full flex flex-row justify-around items-center">
        {experienceElements}
      </ul>
    </Section>
  )
}

export default ExperiencesSection
