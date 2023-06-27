import React from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import CEPSection from './cep-section'
import SummarySection from './summary-section'
import ProductsInCartSection from './products-section'

const Cart = ( { products } ) => {

    const hasProducts = products === true
    //lembrar de remover o !  ao final da estilização


    return (
        <div className={`flex flex-col items-center ${!hasProducts ? 'justify-start' : 'justify-center'}  min-h-[300px] px-4   h-screen `}>
            {!products ?



                <section
                    className='w-[1350px] py-4 h-full max-[1350px]:w-full flex items-start gap-4'>

                    <section className='w-full'>
                        <CEPSection />
                        <ProductsInCartSection />
                    </section>
                    <SummarySection />

                </section> :











                <section
                    className='flex flex-col items-center'>
                    <h1 className='text-2xl font-bold'>O seu carrinho está vazio.</h1>
                    <h1 className='text-sm py-2'>Deseja olhar outros produtos similares?</h1>
                    <button
                        className='hover:bg-orange-400 transition-all text-lg  h-[3.125rem] max-md:mt-4 mt-4 flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-full'>
                        <ShoppingCart
                            size={28}
                            weight='fill'
                            className='fill-white' />
                        CONTINUAR COMPRANDO
                    </button>
                </section>
            }
        </div>
    )
}

export default Cart