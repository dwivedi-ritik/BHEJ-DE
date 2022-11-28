import React from 'react'
export default function RoomDetails() {
    return (
        <div className='w-full h-auto bg-gray-800 rounded-sm'>
            <div className='px-6 py-6 text-gray-200'>
                <p className='font-medium font-mono'>Roasted Lily</p>
                <p className='my-3 text-lg font-medium'>
                    Room No is <span className='font-mono font-medium'>"23453"</span>
                </p>
                <p>Ask your friend to join this room</p>
                <div className='relative '>
                    <input className='mt-4 font-mono text-center text-gray-200 mb-6 bg-gray-700 border-0  sm:text-sm rounded-lg focus:ring-0  outline-none block w-full p-2.5'
                        value={"https://bhejde.io/234566"}>
                    </input>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 absolute right-2 top-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                    </svg>

                </div>
            </div>
        </div>
    )
}