import { FileText,Lock,MapPin } from '@phosphor-icons/react'
import React from 'react'
import AddressCard from './address-card'

const Addresses = () => {


    const mockAddresses = [
        { id: 1,title: 'Endereço Principal',cep: '28890401',street: 'Raul Seixas',bairro: 'Jardim Campomar',city: 'Rio das Ostras',uf: 'RJ',number: '55',complement: 'Lote 5 Quadra 7b' },
        { id: 2,title: 'Trabalho',cep: '28890401',street: 'Raul Seixas',bairro: 'Jardim Campomar',city: 'Rio das Ostras',uf: 'RJ',number: '7',complement: 'Lote 5 Quadra 7b' },
        { id: 3,title: 'Escola Principal',cep: '28890401',street: 'Raul Seixas',bairro: 'Jardim Campomar',city: 'Rio das Ostras',uf: 'RJ',number: '11',complement: 'Lote 5 Quadra 7b' },
    ]

    return (
        <aside className='border flex gap-4 flex-col max-sm:p-0 p-4'>
            <header
                className='flex gap-2 items-center py-4'>
                <MapPin
                    weight='fill'
                    size={22}
                    className='fill-orange-500' />
                <h1
                    className='text-sm font-bold'>
                    ENDEREÇOS
                </h1>
            </header>
            {mockAddresses?.map( ( address ) => {
                return <AddressCard
                    key={address.id}
                    address={address} />
            } )}

            <nav className='bg-orange-500 h-12 flex items-center justify-center cursor-pointer rounded-sm'>
                <button className='text-neutral-50 font-semibold '>CADASTRAR NOVO ENDEREÇO</button>
            </nav>
        </aside>
    )
}

export default Addresses