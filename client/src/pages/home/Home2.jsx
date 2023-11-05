import { NAVLINKS } from "../../constants/navLinks"
import { Footer } from "../../global"
const Section = ({ children, id, bgColor }) => {
  return (
    <section
      className={`${bgColor} min-h-[calc(50vh)] top-[calc(80px)] snap-start container mx-auto relative`}
      id={id}
    // className={`${bgColor} h-[calc(100vh/2)] snap-start`}
    >
      {children}
    </section>
  )
}

const sections = NAVLINKS.map(item => {
  return (
    <Section id={item.name} key={item.name} bgColor={item.bgColor}>
      {item.name}
    </Section>
  )
})


const Home2 = () => {
  return (
    // containing all sections
    <main className="relative top-[calc(80px)] overflow-y-scroll h-[calc(100vh-80px)] no-scrollbar scroll-smooth w-full snap-y snap-normal">
      {sections}
    </main>
  )
}
export default Home2