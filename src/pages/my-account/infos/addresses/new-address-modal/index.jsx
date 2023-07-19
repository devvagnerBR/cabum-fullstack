import { X } from '@phosphor-icons/react'
import React from 'react'
import NewAddressForm from './new-address-form'

const NewAddressModal = () => {

    return (
        <section
            className='bg-neutral-100 shadow-sm w-[95%] max-w-[900px] h-fit p-4 rounded-sm'>
            <header className='flex  items-center justify-between'>
                <h4
                    className='uppercase font-semibold'>
                    Cadastrar novo endereço
                </h4>
                <X
                    className='fill-orange-500 cursor-pointer'
                    weight='bold'
                    size={24}
                />
            </header>
            <NewAddressForm />
        </section>
    )
}

export default NewAddressModal