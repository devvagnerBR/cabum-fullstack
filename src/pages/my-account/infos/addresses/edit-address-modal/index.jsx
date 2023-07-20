import React from 'react'
import { X } from '@phosphor-icons/react'
import EditAddressForm from './edit-address-form'
import { myContext } from '../../../../../hooks/useContext'

const EditAddressModal = ( { setModalEditAddress } ) => {

    

    return (
        <section
            className='bg-neutral-100 shadow-sm w-[95%] max-w-[900px] h-fit p-4 rounded-sm'>
            <header className='flex  items-center justify-between'>
                <h4
                    className='uppercase font-semibold'>
                    Editar endereço
                </h4>
                <X
                    onClick={() => {
                        setModalEditAddress( false )
                    }}
                    className='fill-orange-500 cursor-pointer'
                    weight='bold'
                    size={24}
                />
            </header>
            <EditAddressForm />
        </section>
    )
}

export default EditAddressModal