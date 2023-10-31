import React, { useEffect, useRef, useState } from 'react'
import { useRoomDetails, useRoomJoinee, useChatTree, ChatMessage } from '../lib/store'
import socket from '@/lib/socketService'

export default function Clients() {
    const roomJoinee = useRoomJoinee()
    const roomDetails = useRoomDetails()
    const chatMessages = useChatTree()
    const [messageTyped, setMessagedTyped] = useState('')

    useEffect(() => {
        socket.on('group message', (msg, clientName) => {
            const currentMessage: ChatMessage = {
                info: false,
                message: msg,
                owner: clientName,
                received: false,
                sent: true
            }
            chatMessages.setMessage(currentMessage)
        })
    }, [])


    const handleTextAreaInput = (e: any) => {
        setMessagedTyped(e.target.value)
        if (parseInt(e.target.scrollHeight) > 180 || parseInt(e.target.scrollHeight) < 60) return
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    }

    const handleMessage = () => {
        if (messageTyped.length == 0) return
        socket.emit("share message in room", roomDetails.roomId, roomDetails.roomName, messageTyped)
        const currentMessage: ChatMessage = {
            info: false,
            message: messageTyped,
            owner: roomDetails.roomName,
            received: false,
            sent: true
        }
        chatMessages.setMessage(currentMessage)
        setMessagedTyped('')
    }
    return (
        <div className='w-full h-[440px] bg-gray-800 rounded-sm px-2 flex flex-col justify-between'>
            <div className='py-3 text-gray-200 overflow-y-hidden'>
                <p className='font-mono text-xs text-gray-200'>All joined clients will appear here...</p>
                {roomJoinee.members.map(client => {
                    return <p className='font-mono text-xs text-gray-200' key={client}>{client} has joined</p>
                })}
                {chatMessages.message.map(currentMessage => {
                    if (currentMessage.info) {
                        return (
                            <p className='font-mono text-xs text-gray-200'>{currentMessage.message}</p>
                        )
                    }
                    return (
                        <div className='w-full'>
                            <div className='w-full mt-2 p-2 text-xs text-mono h-auto bg-gray-700 rounded-lg'>
                                <p className='text-xs font-medium' style={{ color: roomDetails.color }}>{currentMessage.owner}</p>
                                <p>{currentMessage.message}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='relative'>
                <textarea className='mb-2 w-full font-mono text-left text-gray-200  bg-gray-700 border-0 text-xs rounded-lg focus:ring-0  outline-none p-2.5 overflow-y-hidden pr-8' style={{ height: "46px", resize: "none" }}
                    placeholder='Type your message' value={messageTyped} onChange={handleTextAreaInput}>
                </textarea>
                <div className='p-2 absolute top-[5%] right-0 cursor-pointer' onClick={handleMessage}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-gray-200" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>

                </div>

            </div>
        </div>
    )
}