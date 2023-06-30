import React from 'react'
import Footer from '../../../../components/footer'
import PaymentActions from '../../payment-actions'

const Pix = () => {
    return (
        <div className='flex flex-col  pb-24 max-md:pb-6'>
            <header>

                <h1 className='font-semibold'>Pix</h1>
                <h3
                    className='text-sm flex-wrap pt-4'>Até <span className='font-semibold'>15% de desconto</span> com <span className='font-semibold'>aprovação imediata</span>  que torna a <span className='font-semibold'>expedição mais rápida</span> do pedido.
                </h3>
            </header>
            <section className='grid grid-cols-2 m-auto w-full mt-4 gap-4 max-md:flex-col max-md:flex'>
                <div className='bg-orange-100 w-full flex items-center justify-center p-6 flex-col gap-2 rounded-md'>
                    <h1 className='text-orange-500 font-semibold'>TOTAL DA SUA COMPRA:</h1>
                    <h1 className='font-bold text-3xl text-orange-500'>R$ 128,99</h1>
                </div>
                <div className='bg-green-100 w-full flex items-center justify-center p-4 flex-col gap-1 rounded-md'>
                    <h1 className='text-green-600 font-semibold'>TOTAL DA SUA COMPRA:</h1>
                    <h1 className='font-bold text-3xl text-green-600'>R$ 128,99</h1>
                    <h1 className='text-xs text-green-600 leading-3'>(Economize: R$ 14,90)</h1>
                </div>
            </section>
        </div>
    )
}

export default Pix