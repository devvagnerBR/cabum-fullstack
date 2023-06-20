import React from 'react'
import { UserCircle,House,Heart,ShoppingCart } from '@phosphor-icons/react'

const SidebarMenu = () => {

    return (
        <div
            className='w-full h-[100dvh] max-md:h-[calc(100dvh-4rem)] bg-neutral-800/70 z-50 absolute max-md:top-[4rem] top-0 left-0'>
            <aside className='bg-blue-700 w-[20rem] h-full max-md:w-full'>

                <header className='w-full h-[4rem] flex items-center pl-4 gap-4'>
                    <UserCircle size={40} weight='fill' className=' fill-neutral-100' />
                    <h1 className='text-neutral-200 text-[1.25rem] font-extrabold'>Olá. Faça seu login</h1>
                </header>

                <section className='w-full h-[3rem] flex items-center  pl-8 gap-4  '>
                    <House weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-sm cursor-pointer'>Minha conta</h1>
                </section>
                <section className='w-full h-[3rem] flex items-center  pl-8 gap-4 '>
                    <Heart weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-sm cursor-pointer'>Favoritos</h1>
                </section>
                <section className='w-full h-[3rem] flex items-center  pl-8 gap-4 '>
                    <ShoppingCart weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-sm cursor-pointer'>Carrinho</h1>
                </section>

                <footer className=' w-[20rem] flex flex-col items-center justify-center max-md:w-full h-[7rem] fixed bottom-0'>

                    <section className=' w-11/12 rounded-md bg-orange-600  justify-center h-[3rem] flex items-center '>

                        <h1 className='text-neutral-100  cursor-pointer font-semibold text-lg'>ENTRAR</h1>
                    </section>
                    <section className='w-11/12 rounded-md  justify-center h-[3rem] flex items-center '>

                        <h1 className='text-neutral-100  cursor-pointer font-semibold text-lg'>CADASTRO</h1>
                    </section>

                </footer>
            </aside>
        </div>
    )
}

export default SidebarMenu