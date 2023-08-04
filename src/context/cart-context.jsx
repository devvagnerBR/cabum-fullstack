import React from 'react'
import CART_REQUESTS from '../services/requests/cart-requests'
import { getCookie } from '../hooks/useCookie'


const CartContext = React.createContext( '' )

const CartProvider = ( { children } ) => {

    const token = getCookie( 'token' )


    const {
        addProductToCart,
        getProductsInCart,
        productsInCart,
        removeProductFromCart,
        removeAllProductsFromCart,
        incrementQuantityFromItemInCart,
        decrementQuantityFromItemInCart,
        getIdsFromItensInCart,
        productsInCartIds,
        addOrderInfos,
        getPreOrder,
        preOrder
    } = CART_REQUESTS()

    React.useEffect( () => {
        getIdsFromItensInCart()
        getProductsInCart()
    },[token] )

    return (
        <CartContext.Provider value={{
            addProductToCart,
            getProductsInCart,
            productsInCart,
            removeProductFromCart,
            removeAllProductsFromCart,
            incrementQuantityFromItemInCart,
            decrementQuantityFromItemInCart,
            getIdsFromItensInCart,
            productsInCartIds,
            addOrderInfos,
            getPreOrder,
            preOrder
        }}>
            {children}
        </CartContext.Provider>
    )

}

const useCartContext = () => React.useContext( CartContext )

export { CartProvider,useCartContext }