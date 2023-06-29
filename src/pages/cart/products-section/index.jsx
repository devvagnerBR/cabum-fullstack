import { Basket,Trash,FireSimple } from '@phosphor-icons/react'
import React from 'react'
import { textLimit } from './../../../util/text-limit';
import { myContext } from './../../../hooks/useContext';
import convertToLocaleString from '../../../util/convert-to-locale-string';


const ProductsInCartSection = ( { summaryModal,products } ) => {

    const { size,removeProductFromCart,removeAllProductsFromCart,incrementQuantityFromItemInCart,decrementQuantityFromItemInCart } = myContext()

    const handleRemoveProductFromCart = async ( productId ) => {
        await removeProductFromCart( productId )
    }

    const handleClearCart = async () => {
        await removeAllProductsFromCart()
    }


    const handleIncrementQuantity = async ( productId ) => {
        await incrementQuantityFromItemInCart( productId )
    }

    const handleDecrementQuantity = async ( productId ) => {
        await decrementQuantityFromItemInCart( productId )
    }

    return (
        <div className={`flex flex-col items-start justify-start h-fit w-full py-4 px-6  border rounded-sm shadow-sm mt-4 mb-4 ${summaryModal && size > 400 && 'mb-24'}`}>
            <header className='flex items-start justify-between w-full gap-2'>
                <div className='flex items-center gap-2'>
                    <Basket weight='fill' size={16} className='fill-orange-500' />
                    <h1 className='font-bold text-xl text-neutral-600'>PRODUTO E FRETE</h1>
                </div>
                <section
                    onClick={handleClearCart}
                    className='flex items-center max-[550px]:gap-0 gap-2 border  p-1 border-red-500 rounded-sm cursor-pointer'>
                    <Trash size={20} weight='fill' className='fill-red-500' />
                    <p className='font-bold text-red-500 text-sm max-[550px]:hidden '>REMOVER TODOS OS PRODUTOS</p>
                    <p className='font-bold  text-red-500 text-xs min-[550px]:hidden text-center max-[550px]:leading-3'>REMOVER TODOS</p>
                </section>
            </header>

            <section className='mt-6 w-full'>
                <p className='bg-neutral-200/70 w-fit h-5 flex items-center gap-1 text-xs p-1'>Vendido e entregue por <span className='font-bold'> KaBuM!</span></p>

                <main className='border-t border-neutral-200/70 w-full gap-10 flex flex-col'>

                    {products?.map( product => {
                        const productPrice = product?.price
                        return (

                            <div key={product?.id} className='mt-2 flex items-start gap-4 max-[450px]:flex-col max-[450px]:items-center max-[450px]:justify-center'>


                                <img className='w-24' src={product?.image_url} alt="" />
                                <div className='flex-1  flex flex-col'>

                                    <h1 className='font-semibold text-sm max-md:leading-4 max-[450px]:text-center'>{textLimit( product?.name,55 )}</h1>
                                    <h2 className='text-sm pt-2 text-neutral-500 leading-3 max-md:text-xs max-[450px]:text-center'>Com desconto no PIX: <span className='font-bold'>{convertToLocaleString( ( productPrice - ( productPrice * 0.05 ) ) )}</span></h2>
                                    <h2 className='text-sm text-neutral-500 leading-3 max-md:text-xs max-[450px]:text-center'>Parcelado no cartão em até 10x sem juros:<span className='font-bold'>{convertToLocaleString( productPrice )}</span></h2>

                                    <div className='flex items-center gap-1 pt-4 max-md:pt-2 max-[450px]:justify-center '>
                                        <FireSimple weight='fill' size={16} className='fill-orange-500' />
                                        <h2 className='text-sm font-semibold text-neutral-600 leading-3 flex items-center max-md:text-xs '>OFERTA NINJA </h2>
                                    </div>

                                </div>

                                <div className='h-full flex-wrap max-md:flex-wrap max-md:flex-col max-md:justify-center  w-[300px] max-[1150px]:w-fit flex items-start justify-between '>

                                    <section className='flex flex-col items-center justify-evenly  h-full  max-md:w-full'>

                                        <h1 className='text-sm text-neutral-700'>Quant.</h1>

                                        <nav className='flex gap-6 pt-2'>
                                            <p
                                                onClick={() => handleDecrementQuantity( product.id )}
                                                className='text-neutral-400 font-bold cursor-pointer'>{"<"}</p>
                                            <p className='font-bold'>{product.quantity}</p>
                                            <p
                                                onClick={() => handleIncrementQuantity( product.id )}
                                                className='text-orange-500 font-bold cursor-pointer'>{">"}</p>
                                        </nav>

                                        <section
                                            onClick={() => handleRemoveProductFromCart( product.id )}
                                            className='flex gap-2 mt-4 items-center cursor-pointer'>
                                            <Trash className='fill-red-500' />
                                            <p className='text-red-500 font-semibold text-sm'>REMOVER</p>
                                        </section>
                                    </section>

                                    <section className='flex flex-col items-center'>
                                        <p className='text-sm max-sm:text-xs max-sm:mt-2'>Preço à vista no PIX:</p>
                                        <p className='font-bold text-orange-500 text-end mt-3 max-sm:mt-1'>{convertToLocaleString( productPrice * product.quantity - ( productPrice * 0.05 ) )}</p>
                                    </section>

                                </div>

                            </div>
                        )



                    } )}



                </main>
            </section>
        </div>
    )

}

export default ProductsInCartSection