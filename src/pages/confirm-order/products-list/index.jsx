import { ShoppingBag } from '@phosphor-icons/react'

import React from 'react'
import convertToLocaleString from '../../../util/convert-to-locale-string'
import { textLimit } from '../../../util/text-limit'

const ProductsList = ( { products } ) => {




    return (
        <section className='border p-4'>
            <header className='flex gap-4 items-center'>
                <ShoppingBag size={28} weight='fill' className='fill-orange-500' />
                <h1 className='uppercase text-2xl font-bold'>lista de produtos</h1>
            </header>
            <main className='pt-8 flex flex-col gap-4 divide-y p-2'>
                {products?.map( ( product ) => {
                    return (
                        <section key={product.id} className='flex items-center  gap-2'>
                            <div className='flex max-sm:flex-col items-center justify-between gap-4'>
                                <img className='w-16' src={product?.image_url} alt="" />
                                <h1 className='text-sm max-w-[600px]'>{textLimit( product?.name,90 )}</h1>
                                <div className='flex flex-col  gap-2 items-center justify-center'>
                                    <p className='text-sm'>Quantidade</p>
                                    <h1 className='text-orange-500 text-sm font-semibold'>{product?.quantity}</h1>
                                </div>
                                <div className='flex flex-col gap-2 items-center  justify-center '>
                                    <p className='text-sm'>Valor</p>
                                    <h1 className='text-orange-500 text-sm font-semibold'>{convertToLocaleString( product?.price )}</h1>
                                </div>

                            </div>
                        </section>
                    )
                } )}
            </main>

        </section>
    )
}

export default ProductsList