'use client'
import React, { useEffect } from "react";
import Clients from "@/components/Clients";
import socket from "@/lib/socketService";
import { useRoomJoinee, useRoomDetails } from "@/lib/store"

export default function Room({ params }: { params: { id: string } }) {
    const roomJoinee = useRoomJoinee()
    const roomDetails = useRoomDetails()
    useEffect(() => {
        socket.emit('join room', params.id, roomDetails.roomName)

        socket.on('user join room', (roomId: string, clientName: string) => {
            roomJoinee.setMembers(clientName)
        })

    }, [])
    return (
        <>
            <Clients></Clients>
        </>
    )
}