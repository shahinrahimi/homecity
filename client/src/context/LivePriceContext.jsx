import React from "react";
import { socket } from "../socket"

export const LivePriceContext = React.createContext()

export const LivePriceProvider = ({ children }) => {

    const [livePrices, setLivePrices] = React.useState({})
    const [show, setShow] = React.useState(false)

    const toggleShow = () => setShow(prev => !prev)

    const connect = () => {
      if (!socket.connected){
        socket.connect()
      }
    }

    const disconnect = () => {
      if (socket.connected) {
        socket.disconnect()
      }
    }

    const onConnect = () => {
      //console.log('Connected to Socket.io')
    }

    const onDisconnect = () => {
      //console.log('Disconnected from Socket.io')
    }

    const onPriceEvent = (prices) => {
      setLivePrices(JSON.parse(prices))
    }


    React.useEffect(() => {
      socket.on('connect', onConnect)
      socket.on('disconnect', onDisconnect)
      socket.on('live prices signal', onPriceEvent)

      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
      }
    }, [])

    React.useEffect(() => {
      if (show){
        connect()
      }

      if (!show){
        disconnect()
      }
    }, [show])

    return (
        <LivePriceContext.Provider value={{ livePrices, show, toggleShow }}>
            {children}
        </LivePriceContext.Provider>
    )
}