import React, { useEffect } from "react";
import io from 'socket.io-client'

const About = () => {
  useEffect(() => {
    const socket = io('http://localhost:5002')

    socket.on('data', (data) => {
      console.log('Received data:', data)
    })

    return () => {
      socket.disconnect();
    }

  }, [])

  return (
    <main>
      <h1>About</h1>
    </main>
  );
};

export default About