import React from 'react'
import { ShoppingCart,Heart } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { GO_TO_CART } from '../../router/navigation'
import { useUtilitiesContext } from '../../context/utilities-context'
import { useProductsContext } from '../../context/products-context'
import { useCartContext } from '../../context/cart-context'
import { useFavoritesContext } from '../../context/favorites-context'

const CardProduct = ( { product } ) => {

    const {
        markProductAsFavorite,
        removeProductFromFavorites
    } = useFavoritesContext()

    const {
        addProductToCart
    } = useCartContext()
    const {
        textLimit
    } = useUtilitiesContext()

    const {
        getProductDetails,

    } = useProductsContext()

    const navigate = useNavigate()

    const goToProductDetails = async ( product ) => {
        await getProductDetails( product.id )
        navigate( `/produto/${product.id}` );
    }

    const handleAddToCart = async ( product ) => {
        await addProductToCart( product )
        GO_TO_CART( navigate )
    }

    const handleAddProductToFavorite = async ( product ) => {

        if ( product.favorite ) {
            await removeProductFromFavorites( product.id )
        } else {
            await markProductAsFavorite( product )
        }
    }

    return (
        <div
            key={product.id}
            className=' h-fit flex items-center flex-col relative shadow-sm border bg-white max-[490px]:w-[100%] w-[1fr] p-2  hover:shadow-lg'>
            <div className=' absolute right-0 opacity-100  flex hover:opacity-100  w-[95%] h-[10%]'>
                <Heart
                    onClick={() => handleAddProductToFavorite( product )}
                    size={26}
                    weight='light'
                    className={`${product?.favorite ? 'fill-orange-500' : 'fill-neutral-300'} absolute right-11 cursor-pointer`}
                />
                <ShoppingCart
                    onClick={() => handleAddToCart( product )}
                    size={26}
                    weight='light'
                    className={`${product?.inCart ? 'fill-orange-500' : 'fill-neutral-300'}  absolute right-3 cursor-pointer`}
                />
            </div>

            <div className='flex flex-col items-center cursor-pointer'>
                <div className='border border-orange-500 rounded absolute left-2 top-2 w-12 h-10 flex items-center justify-center flex-col'>
                    <p className='text-[9px] text-orange-500 leading-3'>RESTAM</p>
                    <p className='text-[12px] text-orange-500 font-bold leading-3'>{product.quantity}</p>
                    <p className='text-[9px] text-orange-500 leading-3'>UNID.</p>
                </div>
                <img
                    onClick={() => goToProductDetails( product )}
                    src={product.image_url} className='w-[9rem] mt-8' alt={product?.name}
                />
                <div>
                    <h1
                        onClick={() => goToProductDetails( product )}
                        className='text-sm capitalize  font-semibold flex flex-wrap w-11/12  h-[5rem] pl-2 leading-4 max-[560px]:w-[100%] max-[560px]:max-w-[300px]'>
                        {textLimit( product?.name,66 )}
                    </h1>
                    <h2
                        className=' text-orange-500 font-bold text-2xl pl-2'>
                        R$ {product.price}
                    </h2>
                    <h2
                        className='font-light text-xs pl-2'>
                        À vista no PIX
                    </h2>
                    <div
                        onClick={() => handleAddToCart( product )}
                        className='flex items-center gap-2 justify-center bg-orange-500 hover:bg-orange-400 p-3 rounded mt-8 cursor-pointer'>
                        <ShoppingCart
                            className='fill-neutral-50 '
                            weight='fill'
                            size={20}
                        />
                        <p
                            className='text-neutral-50 font-semibold text-sm cursor-pointer'>
                            COMPRAR
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )


}





export default CardProduct