import React from 'react'
import { CaretLeft,ShoppingCart } from '@phosphor-icons/react';
import fav_tutorial from '../../assets/images/favorite-tutorial.png'

const Favorites = ( { favorites } ) => {

    const hasFavorites = favorites === true



    return (
        <div className={`flex flex-col items-center justify-start  pt-4 min-h-[500px] max-md:h-[calc(100dvh-15rem)]  h-[calc(100dvh-18rem)] `}>
            <header className='w-full flex items-center pl-6 pt-4 '>
                <CaretLeft size={22} weight='bold' className='fill-orange-500 cursor-pointer' />
                <h1 className='font-bold text-2xl cursor-pointer'>FAVORITOS</h1>
            </header>
            {hasFavorites ?
                <section>

                </section> :
                <section className='flex flex-col  items-center pt-10 gap-6 max-[500px]:gap-2'>
                    <h1 className='font-bold text-2xl text-neutral-800'>Ops Ninja...</h1>
                    <h1 className='text-center font-semibold text-xl text-neutral-800'>Sua lista de favoritos está vazia.</h1>
                    <h1 className='text-neutral-600 flex-wrap w-[520px] text-center leading-6 max-[500px]:w-[90%] '>Mas não se preocupe, basta clicar no ícone de coração e o
                        produto será adicionado a sua lista de favoritos.
                    </h1>
                    <img className='max-[380px]:w-[90%]' src={fav_tutorial} alt="" />
                    <button
                        className='hover:bg-orange-400 transition-all text-lg  h-[3.125rem] max-md:mt-4 mt-4 flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-[350px] mb-6 max-[380px]:w-[90%]'>
                        <ShoppingCart
                            size={28}
                            weight='fill'
                            className='fill-white'
                        />
                        CONTINUAR COMPRANDO
                    </button>
                </section>
            }
        </div>
    )
}

export default Favorites