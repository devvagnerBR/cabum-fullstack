import React from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from '../../hooks/useContext'
import { ShoppingCart } from '@phosphor-icons/react'


const ProductDetails = () => {

    const { id } = useParams()
    const { productDetails } = myContext()

    const productPrice = productDetails?.price

    if ( productDetails )
        return (
            <div className={`flex flex-col items-center justify-start  pt-4 min-h-[500px] max-md:h-[calc(100dvh-15rem)]  h-[calc(100dvh-18rem)]`}>
                <div className={`w-3/4 `}>

                    <header className='w-full'>
                        <h1 className='font-bold text-2xl'>{productDetails?.name}</h1>
                    </header>

                    <section className='flex items-center w-full gap-10 pt-12 h-full'>

                        <section className='w-[50rem]  flex  items-center justify-center'>
                            <img className='w-[20rem]' src={productDetails?.image_url} alt="" />
                        </section>

                        <section className='w-full   h-full pt-6'>

                            <h2 className='text-sm'>Vendido e entregue por: <span className='font-semibold'>KaBuM! </span>| <span className='text-green-600 font-semibold'> Em estoque</span> </h2>
                            <h2 className='pt-2 font-bold text-4xl text-orange-500'>{( productPrice - ( productPrice * 0.05 ) )?.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )}</h2>
                            <h2 className='text-sm pt-2'>À vista no PIX com até <span className='font-semibold'>5% OFF</span></h2>
                            <h2 className='text-sm pt-2 font-bold'>{productPrice?.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )}</h2>
                            <h2 className='text-sm'>Em até 10x de <span className='font-semibold'> {( productPrice / 10 )?.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )} </span> sem juros no cartão</h2>
                            <h2 className='text-sm'>Ou em 1x no cartão com até  <span className='font-semibold'>5% OFF</span></h2>
                            <h3 className='underline cursor-pointer text-sm pt-2'>Ver mais opções de pagamento</h3>

                            <button className='bg-orange-500 py-3 w-[20.5rem] hover:bg-orange-400 transition-all flex items-center justify-center gap-3 mt-6 rounded-sm text-white font-semibold tracking-wider'>
                                <ShoppingCart size={26} className='fill-white ' weight='fill' />
                                COMPRAR
                            </button>

                        </section>

                    </section>
                </div>
            </div>
        )
}

export default ProductDetails