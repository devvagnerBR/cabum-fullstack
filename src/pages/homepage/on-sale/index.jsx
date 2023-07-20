import React from 'react'
import { Star,Alarm,CaretRight } from '@phosphor-icons/react'
import CardProduct from '../../../components/card-product'


import { myContext } from './../../../hooks/useContext';

const OnSale = ( { onSaleProducts } ) => {

    const { countdown } = myContext()

    return (
        <div

            className='w-10/12 max-2xl:w-full flex-col  self-center flex items-center bg-white  '>

            <header className='flex  w-full bg-orange-500 h-16 items-center justify-between px-4 flex-wrap max-[580px]:justify-center'>
                <div className='flex items-center gap-2'>

                    <h1 className='font-semibold text-neutral-100 text-xl  max-[580px]:text-3xl'>OFERTAS NINJAS</h1>
                </div>
                {countdown && <>

                    <div className='flex items-center gap-2 max-[580px]:hidden'>
                        <h1 className='font-bold text-neutral-100 text-lg max-[580px]:text-sm'>TERMINA EM</h1>
                        <Alarm className='fill-neutral-100 ' weight='fill' size={26} />
                        <h1 className='font-bold tracking-wide text-neutral-100 text-2xl max-[580px]:text-sm'> {countdown?.days}D {countdown?.hours}h : {countdown?.minutes} : {countdown?.seconds}</h1>
                    </div>
                </>
                }
            </header>

            <section
                className='w-full grid grid-cols-5  max-xl:grid-cols-4 place-items-center max-[950px]:grid-cols-3  max-md:grid-cols-2  max-[560px]:grid-cols-1 gap-3 p-4 bg-white '>
                {onSaleProducts?.map( ( product ) => {

                    return (
                        <CardProduct
                            product={product}
                            key={`on-sale-${product.id}`} />
                    )
                } )}

            </section>
            <div className=' w-full h-12 max-sm:w-[100vw] cursor-pointer items-center max-sm:justify-center bg-white flex justify-end pr-4'>
                <button className='text-orange-500 font-semibold text-base'>VER TODOS</button>
                <CaretRight className='fill-orange-500 ' weight='bold' size={16} />
            </div>
        </div>
    )


}

export default OnSale