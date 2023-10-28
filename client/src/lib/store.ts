import { create } from "zustand";
import { generateClientName, generateRoomId } from "./roomInfoGenerator"

type RoomDetails = {
    roomId: string,
    roomName: string,
    setRoomId: (newRoomId: string) => void,
    setRoomName: (newRoomName: string) => void
}

type RoomJoinee = {
    members: string[],
    setMembers: (newMember: string) => void
}

export const useRoomDetails = create<RoomDetails>((set) => ({
    roomId: generateRoomId(),
    roomName: generateClientName(),
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
            members: [...state.members, newMember]
        }))
    }
}))