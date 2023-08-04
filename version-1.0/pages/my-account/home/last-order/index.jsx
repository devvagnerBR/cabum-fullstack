import { ShoppingCartSimple } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../../../hooks/useContext'
import convertTimeInDate from '../../../../util/convert-time-in-date'
import usePaymentCheck from '../../../../hooks/usePaymentCheck'

const LastOrderSection = () => {


    const { orders } = myContext();

    const lastOrder = orders[0]
    const address = lastOrder?.address


    return (
        <main className='flex flex-col max-md:flex-col w-full gap-4'>
            <header className='flex items-center gap-2'>
                <ShoppingCartSimple
                    weight='fill'
                    size={30}
                    className='fill-orange-500'
                />
                <h1 className='text-xl font-bold'>RESUMO DO SEU ÚLTIMO PEDIDO</h1>
            </header>
            <main className='flex flex-col divide-y bg-neutral-50 border shadow-sm rounded-sm px-4'>
                <section className='flex max-md:flex-col max-md:divide-y-[1px]  max-md:divide-neutral-200  gap-2 justify-evenly w-full py-2'>
                    <div className='min-w-[250px] flex flex-col gap-4'>
                        <h1 className='text-sm font-bold uppercase'>NÚMERO DO PEDIDO</h1>
                        <h1 className='text-sm'>#{lastOrder?.order_number}</h1>
                    </div>
                    <section className='flex gap-2 justify-between w-full max-md:pt-2'>
                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-sm font-bold uppercase'>STATUS</h1>
                            <h1 className='text-sm text-green-500 font-semibold'>Concluído</h1>
                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-sm font-bold uppercase'>DATA</h1>
                            <h1 className='text-sm '>{convertTimeInDate( lastOrder?.order_date )}</h1>
                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-sm font-bold uppercase'>PAGAMENTO</h1>
                            <h1 className='text-sm text-orange-500 font-semibold'>{usePaymentCheck( lastOrder?.paymentMethod )}</h1>
                        </div>
                    </section>
                </section>
                <section className='flex max-md:flex-col max-md:gap-4 gap-32 justify-start w-full py-4'>
                    <div className='flex flex-col'>
                        <h1 className='text-sm font-bold uppercase'>ENDEREÇO</h1>
                        <h1 className='text-sm text-neutral-800 pt-4'>{address?.street}</h1>
                        <h1 className='text-sm text-neutral-400'>{address?.neighborhood}</h1>
                        <h1 className='text-sm text-neutral-400'>CEP {address?.cep} - {address?.city}</h1>
                    </div>
                    <div className=' flex flex-col gap-4'>
                        <h1 className='text-sm font-bold uppercase'>GFL</h1>
                        <h1 className='text-sm text-orange-500 font-semibold'>Não disponível</h1>
                    </div>
                </section>
                <div className='justify-end items-center flex py-4'>
                    <Link to="meus-pedidos" className='border-orange-500 border rounded-sm p-3 text-orange-500 font-semibold'>VER TODOS OS PEDIDOS</Link>
                </div>
            </main>
        </main>
    )
}

export default LastOrderSection