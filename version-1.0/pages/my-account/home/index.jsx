import React from 'react'
import InfoCardsSection from './info-cards'
import LastOrderSection from './last-order'
const Home = () => {

    return (
        <section className=' rounded-md gap-4 w-full pt-2 flex flex-col items-center justify-center'>
            <InfoCardsSection />
            <LastOrderSection />
        </section>
    )
}

export default Home