import React from 'react'

const CustomModal = ( { children } ) => {

    return (
        <div
            className='absolute items-center justify-center flex z-50 min-h-[calc(100vh-7rem)] max-md:h-[calc(100vh-4rem)] bg-neutral-500 bg-opacity-40 w-full' >
            {children}
        </div>
    )
}

export default CustomModal