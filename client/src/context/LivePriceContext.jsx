import React from "react";
import { io } from 'socket.io-client';

export const LivePriceContext = React.createContext()

export const LivePriceProvider = ({ children }) => {

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

    return (
        <LivePriceContext.Provider>
            {children}
        </LivePriceContext.Provider>
    )
}