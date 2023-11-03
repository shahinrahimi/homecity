import React, { useState } from 'react';
import { Modal, ContactUsForm } from '../../components';

const Franchises = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <main className='bg-slate-900 min-h-screen grid place-content-center'>
      <button
        className='bg-slate-300 text-slate-950 px-10 py-3'
        onClick={openModal}
      >open modal</button>
      <Modal
        isOpen={isOpen}
        closeMe={closeModal}
      >
        <ContactUsForm />
      </Modal>
    </main>
  )
}
export default Franchises