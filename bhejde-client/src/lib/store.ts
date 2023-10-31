
import { create } from "zustand";
import { generateClientName, generateRoomId } from "./roomInfoGenerator"

export type RoomDetails = {
    roomId: string,
    roomName: string,
    color: string,
    setRoomId: (newRoomId: string) => void,
    setRoomName: (newRoomName: string) => void
}

export type RoomJoinee = {
    members: string[],
    setMembers: (newMember: string) => void
}

export type ChatMessage = {
    message: string
    sent: boolean,
    received: boolean,
    owner: string,
    info: boolean
}


type MessageTree = {
    message: ChatMessage[] | [],
    setMessage: (newMessage: ChatMessage) => void
}

export const useChatTree = create<MessageTree>((set) => ({
    message: [],
    setMessage(newMessage: ChatMessage) {
        set((state) => ({
            ...state,
            message: [...state.message, newMessage]
        }))
    }

}))

function getRandomBrightColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 40) + 60; // Adjust the range to make colors brighter (e.g., 60-100)
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

type ClientStatus = {
    joinee: boolean,
    host: boolean,
    setJoinee: (value: boolean) => void,
    setHost: (value: boolean) => void
}

export const useClientStatus = create<ClientStatus>((set) => ({
    joinee: false,
    host: true,
    setJoinee(value: boolean) {
        set((state) => ({
            ...state,
            joinee: value
        }))
    },
    setHost(value: boolean) {
        set((state) => ({
            ...state,
            host: value
        }))
    }
}))


export const useRoomDetails = create<RoomDetails>((set) => ({
    roomId: generateRoomId(),
    roomName: generateClientName(),
    color: getRandomBrightColor(),
    setRoomId(newRoomId: string) {
        set((state) => ({
            ...state,
            roomId: newRoomId
        }))
    },
    setRoomName(newRoomName: string) {
        set((state) => ({
            ...state,
            roomName: newRoomName
        }))
    }
}))

export const useRoomJoinee = create<RoomJoinee>((set) => ({
    members: [],
    setMembers(newMember: string) {
        set((state) => ({
            ...state,
            members: Array.from(new Set([...state.members, newMember]))
        }))
    }
}))