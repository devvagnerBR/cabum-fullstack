import React from 'react'
import { CaretLeft,ShoppingCart,Heart } from '@phosphor-icons/react';
import fav_tutorial from '../../assets/images/favorite-tutorial.png'
import { myContext } from './../../hooks/useContext';
import convertToLocaleString from './../../util/convert-to-locale-string';
import transformTittleInSlug from '../../util/transform-tittle-in-slug';
import { useNavigate } from 'react-router-dom';
import { GO_TO_CART } from '../../router/navigation';
import { textLimit } from '../../util/text-limit';
import Footer from '../../components/footer';

const Favorites = () => {

    const { productsAsFavorites,getProductDetails,addProductToCart,size,removeProductFromFavorites } = myContext()
    const hasFavorites = productsAsFavorites.length > 0
    const navigate = useNavigate()

    const goToProductDetails = async ( product ) => {
        await getProductDetails( product.id )
        navigate( `/produto/${product.id}/${transformTittleInSlug( product.name )}` );
    }

    const handleAddToCart = async ( product ) => {
        await addProductToCart( product )
        GO_TO_CART( navigate )
    }

    const removeItemFromFavorites = async ( productId ) => {
        await removeProductFromFavorites( productId )
    }

const mobile = size < 600
let limitText = 90
if ( mobile ) limitText = 40




return (
    <div className={`flex flex-col items-center justify-start    pt-4 min-h-[500px] h-fit`}>
        <header className='w-full flex items-center pl-24 pt-4 '>
            <CaretLeft size={22} weight='bold' className='fill-orange-500 cursor-pointer' />
            <h1 className='font-bold text-2xl cursor-pointer'>FAVORITOS</h1>
        </header>
        {hasFavorites ?
            <section className=' p-7 flex flex-col gap-8 flex-wrap w-3/4 max-sm:w-full '>
                {productsAsFavorites?.map( ( product ) => {
                    return (
                        <div key={product.id} className='border shadow-sm py-2 px-4 flex max-lg:flex-col items-center'>


                            <section className='gap-2 flex items-center w-full flex-1  p-2'>

                                <img className='w-[120px] max-sm:w-[100px]' src={product?.image_url} alt="" />
                                <h1
                                    onClick={() => goToProductDetails( product )}
                                    className='flex-wrap flex hover:text-orange-500 cursor-pointer max-w-[40rem] leading-6 font-bold max-lg:text-sm max-lg:leading-4'>{textLimit( product?.name,limitText )}</h1>
                            </section>

                            <section className=' flex  gap-4 max-lg:w-full  border-l flex-col justify-center  pl-4  h-full  items-ce'>

                                <div className='flex flex-col gap-0 items-start '>
                                    <div className='flex items-center w-full justify-between'>
                                        <h4 className='line-through text-xs '>{convertToLocaleString( product?.price )}</h4>
                                        <Heart
                                            onClick={() => removeItemFromFavorites( product.id )}
                                            className='flex fill-red-500 rounded-md hover:fill-red-400 cursor-pointer hover:shadow-sm'
                                            weight='fill'
                                            size={26}
                                        />
                                    </div>
                                    <h1
                                        className='text-orange-600 font-bold text-2xl'>{convertToLocaleString( product?.price - ( product?.price * 0.05 ) )}</h1>
                                    <h1 className='text-sm'>À vista no Pix</h1>
                                </div>

                                <button
                                    onClick={() => handleAddToCart( product )}
                                    className='bg-orange-500 text-sm h-12 font-semibold rounded-sm w-[100%] gap-2 px-2 hover:bg-orange-400 text-white flex items-center   justify-center'>
                                    <ShoppingCart className='fill-white flex h-full' weight='fill' size={20} />
                                    ADICIONAR AO CARRINHO
                                </button>

                                {/*  */}

                            </section>


                        </div>
                    )
                } )}
            </section> :
            <section className='flex flex-col  items-center pt-10 gap-6 max-[500px]:gap-2'>
                <h1 className='font-bold text-2xl text-neutral-800'>Ops Ninja...</h1>
                <h1 className='text-center font-semibold text-xl text-neutral-800'>Sua lista de favoritos está vazia.</h1>
                <h1 className='text-neutral-600 flex-wrap w-[500px] text-center leading-6 max-[500px]:w-[90%] '>Mas não se preocupe, basta clicar no ícone de coração e o
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