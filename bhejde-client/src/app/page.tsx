'use client'
import "./globals.css"

import TopBar from "../components/TopBar"
import RoomDetails from "../components/RoomDetails"
import JoinRoom from "../components/JoinRoom"
import Clients from "../components/Clients"
import Features from "../components/Features"
import Footer from "../components/Footer"
import { useRoomDetails, useRoomJoinee } from "../lib/store"
import { useEffect, useState } from "react"
import { generateClientName, generateRoomId } from "@/lib/roomInfoGenerator"
import socket from "@/lib/socketService"

export default function Home() {
  const roomDetails = useRoomDetails()
  const roomJoinee = useRoomJoinee()
  const [hydration, setHydration] = useState(false) //peice of shit 😤
  useEffect(() => {
    setHydration(true)
    roomDetails.roomName && roomJoinee.setMembers(roomDetails.roomName)
    socket.emit('create room', (roomDetails.roomId))
    socket.emit('join room', roomDetails.roomId, roomDetails.roomName)
    socket.on("user join room", (roomId: string, clientName: string) => {
      roomJoinee.setMembers(clientName)
    })
  }, [])
  if (!hydration) return null
  return (
    <div className="App h-screen flex flex-col justify-between">
      <div>
        <TopBar />
        <div className="mt-6 px-3 md:px-6 grid grid-col-1 md:grid-cols-2 gap-3">
          <RoomDetails></RoomDetails>
          <JoinRoom></JoinRoom>
        </div>
        <div className="px-3 md:px-6  grid grid-cols-1 my-3">
          <Clients></Clients>
          <Features></Features>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
