import { Envelope,Gear } from '@phosphor-icons/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { myContext } from '../../../../hooks/useContext'

const InfoCardsSection = () => {


    const { user } = myContext()

    return (
        <main className='flex max-md:flex-col w-full  gap-4'>
            <section className=' w-2/4 max-md:w-full  p-4 flex items-center min-h-[150px]  justify-center bg-neutral-50  shadow-sm shadow-neutral-300 gap-4 rounded-sm'>
                <div className='flex items-center justify-center gap-4 flex-wrap'>
                    <div>
                        <img src="https://static.kabum.com.br/conteudo/temas/001/imagens/k5/images/profile_ninja.png" alt="IMG" width={70} />
                    </div>
                    <div className='gap-1 flex flex-col'>
                        <h1 className='font-bold text-xl'>Bem-vindo, {user?.name}</h1>
                        <p className='flex gap-2 items-center text-sm text-neutral-500'><Envelope weight='fill' className='fill-orange-500' size={20} /> {user?.email}</p>
                    </div>
                </div>
                <div>
                    <NavLink to="/minha-conta/meus-dados">
                        <Gear
                            size={30}
                            weight='fill'
                            className='fill-orange-500 cursor-pointer hover:fill-orange-600'
                        />
                    </NavLink>
                </div>
            </section>
            <section className=' w-2/4 flex-wrap min-h-[150px]   max-md:w-full flex items-center justify-between max-lg:justify-center p-4 bg-neutral-50  shadow-sm shadow-neutral-300 gap-4 rounded-sm'>
                <div className='flex items-center justify-center gap-4 max-md:w-full'>
                    <div className='gap-1 flex  md:flex-col max-md:w-full max-md:items-center max-md:justify-between'>
                        <h1 className='font-bold max-md:font-normal text-xl max-md:text-sm'>Crédito disponível</h1>
                        <p className='flex gap-2 items-center text-4xl font-bold text-orange-500 max-sm:text-2xl'>R$ 0,00</p>
                    </div>
                </div>
                <div className='flex max-lg:w-full items-center justify-center gap-4 cursor-pointer bg-orange-500 hover:bg-orange-400 transition-all p-3 rounded-sm'>

                    <button className='text-white font-semibold text-sm px-4'>RESGATAR GIFT CARD</button>
                </div>
            </section>

        </main>
    )
}

export default InfoCardsSection