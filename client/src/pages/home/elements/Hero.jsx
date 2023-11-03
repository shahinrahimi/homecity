import React, { useState } from "react"
import { Modal, ContactUsForm } from "../../../components"


const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className=" text-white text-4xl font-bold drop-shadow-lg">Do you need solution in turkey?</h1>
        <p className="mt-4 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
        <button
          className="py-2 px-4 mt-4 bg-blue-600 text-white font-bold  rounded-md"
          onClick={openModal}
        >more info</button>
        <Modal
          isOpen={isModalOpen}
          closeMe={closeModal}
        >
          <ContactUsForm />
        </Modal>
      </div>
    </>
  )
}
export default Hero