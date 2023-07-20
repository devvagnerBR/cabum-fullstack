import React from 'react'
import { myContext } from '../../../../../hooks/useContext';

const AddressCard = ( { address,index } ) => {


    const {
        deleteAddress,
        setModalEditAddress,
        setEditableAddress
    } = myContext()

    const handleRemoveAddress = ( address ) => {
        deleteAddress( address.id );
    }


    return (
        <section
            className={`border-l-4 ${index === 0 ? 'bg-orange-200 border border-orange-300' : 'border border-zinc-300'}  border-l-orange-400 p-3 `}
            key={address.id}>

            <aside className='flex flex-col gap-2 '>

                <h1
                    className='font-bold text-sm'>
                    {address.identification}
                </h1>
                <h4
                    className='text-sm  max-sm:text-xs'>
                    {address.street}
                </h4>

                <section className='flex gap-2'>
                    <h4
                        className='text-sm  max-sm:text-xs'>
                        Número: {address.number},
                    </h4>
                    <h4
                        className='text-sm  max-sm:text-xs'>
                        {address.complement}
                    </h4>
                </section>

                <section className='flex gap-2'>
                    <h4
                        className='text-sm  max-sm:text-xs'>
                        CEP: {address.cep} -
                    </h4>
                    <h4
                        className='text-sm  max-sm:text-xs'>
                        {address.city},
                    </h4>
                    <h4
                        className='text-sm  max-sm:text-xs'>
                        {address.uf}
                    </h4>
                </section>
            </aside>
            <nav className=' flex items-center justify-end  gap-4 h-6'>
                <button
                    onClick={() => {
                        setModalEditAddress( true )
                        setEditableAddress( address )
                    }}
                    className='text-neutral-300 font-semibold text-sm'>
                    EDITAR
                </button>
                <button
                    onClick={() => handleRemoveAddress( address )}
                    className='text-neutral-300 font-semibold text-sm'
                >EXCLUIR</button>
            </nav>
        </section>
    )
}

export default AddressCard