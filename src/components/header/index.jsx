import React from 'react'
import cabum_logo from '../../assets/images/cabum-logo.png'
import { UserCircle,Heart,ShoppingCart, List} from '@phosphor-icons/react'
const Header = () => {
    return (
        <header
            className='bg-blue-700 h-[7rem] flex items-center justify-center gap-4 md:gap-8 lg:px-8  max-md:px-2 flex-wrap'>
            <img className='max-md:hidden cursor-pointer' width={170} src={cabum_logo} alt="cabum logo" />
            <List size={40} weight='regular' className='md:hidden fill-neutral-300 cursor-pointer' />

            <div className='w-[30%] max-md:w-[60%] max-w-[40rem]'>
                <input placeholder='Busque aqui' className=' w-full bg-neutral-100 pl-4 h-[2.25rem] text-neutral-600 border focus:border-orange-500 rounded-sm placeholder:text-sm' type="text" />
            </div>

            <div className='flex gap-8  '>

                <div className='text-xs flex gap-2 items-center max-md:hidden'>
                    <section>
                        <UserCircle size={40} weight='fill' className=' fill-neutral-100' />
                    </section>
                    <section>
                        <h1 className='text-neutral-100'>Faça <span className='uppercase text-neutral-100 font-semibold hover:underline cursor-pointer transition-all'>Login</span> ou</h1>
                        <h1 className='text-neutral-100'>crie seu <span className='text-neutral-100 font-semibold uppercase hover:underline cursor-pointer transition-all'>Cadastro</span></h1>
                    </section>
                </div>
                <div className='flex items-center gap-4'>
                    <Heart size={22} weight='fill' className=' fill-neutral-100 cursor-pointer' />
                    <ShoppingCart size={22} weight='fill' className=' fill-neutral-100 cursor-pointer' />
                </div>
            </div>


        </header>
    )
}

export default Header

//800px - 50rem