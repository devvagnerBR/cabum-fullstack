import React from 'react'

const CustomModal = ( { children } ) => {

    return (
        <section
            className='absolute  items-start justify-center flex z-[40] min-h-[calc(100vh-7rem)] max-md:h-[calc(100vh-4rem)] max-sm:h-[100vh-4rem] sm:bg-neutral-500 sm:bg-opacity-40 w-full pt-4' >
            {children}
        </section>
    )
}

export default CustomModal