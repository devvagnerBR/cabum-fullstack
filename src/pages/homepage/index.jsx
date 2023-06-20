import React from 'react'
import MainBanner from './banner'
import OnOffer from './on-offer'


const Homepage = () => {



    return (
        <div className='flex-col self-center h-full flex overflow-hidden'>
            <MainBanner />
            <OnOffer />
        </div>
    )
}

export default Homepage