import React from 'react'
import MainBanner from './banner'
import OnOffer from './on-offer'
import Categories from './categories'


const Homepage = () => {



    return (
        <div className='flex-col self-center h-full flex overflow-hidden'>
            <MainBanner />
            <OnOffer />
            <Categories />
        </div>
    )
}

export default Homepage