import React from 'react'

export default function JoinRoom() {
    return (
        <div className='w-full h-64 bg-gray-800 rounded-sm px-2'>
            <div className='px-6 py-6 text-gray-200'>
                <p className='font-semibold text-xl'>Join Room</p>
                <p className='text-sm my-3'>Add your friends room number with whom you want to share your files</p>
                <div className='mt-4'>
                    <input type="text" className="shadow-sm text-sm rounded-lg outline-none block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-200 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light" placeholder="Fill your friends room number..." required>
                    </input>
                    <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join this room</button>
                </div>
            </div>
        </div>
    )
}