import { ShoppingCartSimple } from '@phosphor-icons/react'
import React from 'react'

const LastOrderSection = () => {
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

            <main className='flex bg-neutral-50 border shadow-sm rounded-sm p-4'>
                <section className='flex max-md:flex-col max-md:divide-y-[1px]  max-md:divide-neutral-200  gap-2 justify-evenly w-full py-4'>
                    <div className='min-w-[250px] flex flex-col gap-4'>
                        <h1 className='text-sm font-bold uppercase'>NÚMERO DO PEDIDO</h1>
                        <h1 className='text-sm'>#453345345</h1>
                    </div>
                    <section className='flex gap-2 justify-between w-full pt-2'>
                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-sm font-bold uppercase'>STATUS</h1>
                            <h1 className='text-sm text-green-500 font-semibold'>Concluído</h1>
                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-sm font-bold uppercase'>DATA</h1>
                            <h1 className='text-sm '>22/06/2022</h1>
                        </div>
                        <div className='w-full flex flex-col gap-4'>
                            <h1 className='text-sm font-bold uppercase'>PAGAMENTO</h1>
                            <h1 className='text-sm text-orange-500 font-semibold'>Cartão de crédito</h1>
                        </div>
                    </section>
                </section>
            </main>
        </main>
    )
}

export default LastOrderSection