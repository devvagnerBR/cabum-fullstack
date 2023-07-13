import { UserFocus } from '@phosphor-icons/react'
import React from 'react'
import BasicInfos from './basic-infos'
import Addresses from './addresses'

const Infos = () => {
    return (
        <section className='p-2'>
            <header
                className='flex gap-2 items-center h-20'>
                <UserFocus
                    weight='fill'
                    size={26}
                    className='fill-orange-500' />
                <h1
                    className='text-xl font-bold'>MEUS DADOS</h1>
            </header>
            <main className='grid grid-cols-2 gap-2 max-md:grid-cols-1'>
                <BasicInfos />
                <Addresses />
            </main>
        </section>
    )
}

export default Infos