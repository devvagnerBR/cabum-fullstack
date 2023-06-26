
import { Alarm,Star } from '@phosphor-icons/react'
import React from 'react'
import CardProduct from '../../../components/card-product'

const ProductsSection = ( { products,Icon,title = 'PRODUTOS' } ) => {

    return (
        <section className='w-10/12 max-2xl:w-full flex-col  self-center flex items-center bg-white  '>
            <header className='flex  w-full gap-2  h-16 items-center justify-start px-4 flex-wrap max-[580px]:justify-center'>

                <  Icon size={18} weight='bold' className='fill-orange-500' />
                <h1 className='font-bold text-neutral-700 text-xl  max-[580px]:text-3xl'>{title}</h1>


            </header>
            <section
                className='w-full grid grid-cols-5  max-xl:grid-cols-4 place-items-center max-[950px]:grid-cols-3  max-md:grid-cols-2  max-[560px]:grid-cols-1 gap-3 p-4 bg-white '>
                {products?.map( ( product ) => {
                    return (
                        <CardProduct product={product} key={product.id} />
                    )
                } )}
            </section>

        </section>
    )
}

export default ProductsSection