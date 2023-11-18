import { Section, Card } from "../../components"
import { project_1_image_0, project_2_image_0, project_3_image_0, project_4_image_0 } from "../../assets/img"

const data = [
  {
    name: "slide1",
    price: "600",
    image: project_1_image_0,
    address: "Anatolian side, Beykoz",
    bedroomCount: "1-3",
    bathroomCount: "1-2"

  },
  {
    name: "slide2",
    price: "600",
    image: project_2_image_0,
    address: "Anatolian side, Beykoz",
    bedroomCount: "1-3",
    bathroomCount: "1-2"

  },
  {
    name: "slide2",
    price: "600",
    image: project_3_image_0,
    address: "Anatolian side, Beykoz",
    bedroomCount: "1-3",
    bathroomCount: "1-2"

  },

  {
    name: "slide2",
    price: "600",
    image: project_4_image_0,
    address: "Anatolian side, Beykoz",
    bedroomCount: "1-3",
    bathroomCount: "1-2"

  },
]



const Projects = () => {

  const cards = data.map((d, index) => {
    return (
      <Card 
        key={index}
        image={d.image}
        address={d.address}
        price={d.price}
        bathroomCount={d.bathroomCount}
        bedroomCount={d.bedroomCount}
      />
    )
  })
  return (
    <Section>
      <main className="h-[calc(80vh)] grid place-content-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-5">
          {cards}
        </div>
      </main>
    </Section>
  )
}
export default Projects