import { MapPin } from '@phosphor-icons/react'
import React from 'react'
import AddressCard from './address-card'
import { myContext } from '../../../../hooks/useContext';


const Addresses = () => {


    const {
        getAddresses,
        addresses,
        setModalNewAddress
    } = myContext()

    const hasAddress = addresses.length > 0

    React.useEffect( () => {
        const getAddressesFromUser = () => {
            getAddresses()
        }
        getAddressesFromUser()
    },[] )

    return (
        <aside className='border flex gap-4 flex-col max-sm:p-0 p-4'>
            <header
                className='flex gap-2 items-center py-4'>
                <MapPin
                    weight='fill'
                    size={22}
                    className='fill-orange-500'
                />
                <h1
                    className='text-sm font-bold'>
                    ENDEREÇOS
                </h1>
            </header>
            {hasAddress ? addresses?.map( ( address,index ) => {


                return <AddressCard
                    index={index}
                    key={address.id}
                    address={address} />
            } ) : <p className='text-center'>Nenhum endereço cadastrado</p>

            }
            <nav
                onClick={() => setModalNewAddress( true )}
                className='bg-orange-500 h-12 flex items-center justify-center cursor-pointer rounded-sm'>
                <button
                    className='text-neutral-50 font-semibold '
                >
                    CADASTRAR NOVO ENDEREÇO
                </button>
            </nav>
        </aside>
    )
}

export default Addresses