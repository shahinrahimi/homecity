import React from 'react';
import { Modal, ContactUsForm } from '../../components';
import { io } from 'socket.io-client';
import { Banner } from '../../components';
const Franchises = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const socket = io()

    socket.on('connect', () => {
      console.log('Connected to Socket.io');
    });

    socket.on('live prices signal', (msg) => {
      console.log(msg)
    });
    return () => {
      socket.disconnect()
    }
  },[])

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <main className='bg-slate-900 min-h-screen grid place-content-center bg-transparent'>
      {/* <Banner /> */}
      {/* <button
        className='bg-slate-300 text-slate-950 px-10 py-3'
        onClick={openModal}
      >open modal</button>
      <Modal
        isOpen={isOpen}
        closeMe={closeModal}
      >
        <ContactUsForm />
      </Modal> */}
      <Banner />
    </main>
  )
}
export default Franchises