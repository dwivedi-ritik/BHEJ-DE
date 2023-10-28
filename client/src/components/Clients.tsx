import React, { useEffect } from 'react'
import { useRoomDetails, useRoomJoinee } from '../lib/store'
import socket from '../lib/socketService'
export default function Clients() {
    const roomDetails = useRoomDetails()
    const roomJoinee = useRoomJoinee()
    useEffect(() => {
        roomJoinee.setMembers(roomDetails.roomName)
        socket.on("user join room", (roomId: string, clientName: string) => {
            roomJoinee.setMembers(clientName)
        })
    }, [])

    return (
        <div className='w-full h-64 bg-gray-800 rounded-sm px-2'>
            <div className='px-3 py-3 text-gray-200'>
                <p className='font-mono text-xs text-gray-200'>All joined clients will appear here...</p>
                {roomJoinee.members.map(client => {
                    return <p className='font-mono text-xs text-gray-200'>{client} has joined</p>
                })}
            </div>
        </div>
    )
}