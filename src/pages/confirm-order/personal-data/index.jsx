import React from 'react'
import { Truck } from '@phosphor-icons/react'

const PersonalData = ( { user,addressInfos } ) => {



    return (
        <div className='border p-4 rounded-sm'>
            <header className='flex gap-4 items-center'>
                <Truck size={28} weight='fill' className='fill-orange-500' />
                <h1 className='uppercase text-2xl font-bold'>informações do seu pedido</h1>
            </header>

            <section className='pt-8  flex'>

                <section className='flex flex-col w-full'>

                    <header className='flex flex-col border-b pb-2'>
                        <p className='text-xl capitalize font-bold'>dados pessoais</p>
                        <p className='text-sm text-neutral-400'>Informações que serão inseridas na nota fiscal do pedido.</p>
                    </header>

                    <aside className='pt-2 text-sm gap-1 flex flex-col'>
                        <p className='font-bold text-neutral-700 flex gap-2'>{user?.name}</p>
                        <p className='font-bold text-neutral-600 flex gap-2'>CPF / CNPJ: <span className='font-normal'>{user?.cpf}</span></p>
                        <p className='font-bold text-neutral-600 flex gap-2'>Telefone: <span className='font-normal'>{user?.phone_number}</span></p>
                        <p className='font-bold text-neutral-600 flex gap-2'>Email: <span className='font-normal'>{user?.email}</span></p>
                    </aside>

                </section>





                <section className='w-full'>
                    <header className='flex flex-col border-b pb-2'>
                        <p className='text-xl capitalize font-bold'>endereço de entrega</p>
                        <p className='text-sm text-neutral-400'>Este é o endereço onde seu pedido será enviado</p>
                    </header>

                    <aside className='pt-2 text-sm gap-1 flex flex-col'>
                        <p className='font-bold text-neutral-700 flex gap-2'>{addressInfos?.street}</p>
                        <p className='font-bold text-neutral-600 flex gap-2'>Bairro: <span className='font-normal'>{addressInfos?.neighborhood
}</span></p>
                        <p className='font-bold text-neutral-600 flex gap-2'>CEP: <span className='font-normal'>{addressInfos?.cep}</span></p>
                        <p className='font-bold text-neutral-600 flex gap-2'>Cidade: <span className='font-normal'>{addressInfos?.city}</span></p>
                        <p className='font-bold text-neutral-600 flex gap-2'>Complemento: <span className='font-normal'>{addressInfos?.complement}</span></p>
                    </aside>
                </section>

            </section>

        </div>
    )
}

export default PersonalData