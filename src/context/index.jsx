import React from 'react'
import { textLimit } from './../util/text-limit';
import formsValidate from '../services/forms-validate';
import formatPhone from './../util/convert-phone';
import countdownTime from '../util/countdown';
import USER_REQUESTS from '../services/requests/user-requests';
import controlledLoading from '../util/controlled-loading';
import { getCookie,setCookie } from '../hooks/useCookie';
import transformTittleInSlug from './../util/transform-tittle-in-slug';
import PRODUCT_REQUESTS from '../services/requests/products-requests';
import getPageWidth from '../util/get-page-width';
import getCEP from '../util/get-cep';
import CART_REQUESTS from '../services/requests/cart-requests';
import FAVORITES_REQUESTS from '../services/requests/favorite-request';
import PAYMENT_REQUESTS from '../services/requests/payments-requests';

export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {

    const token = getCookie( 'token' )
    const [modalMenu,setModalMenu] = React.useState( false )
    const [searchInput,setSearchInput] = React.useState( '' )
    const { countdown } = countdownTime()
    const { loading,awaitLoading } = controlledLoading()
    const { size } = getPageWidth()


    const {
        formLoginValidade,
        formSignUpValidade,
        creditCardValidade
    } = formsValidate()

    const {
        signInWithEmailAndPassword,
        createAccount,
        userErrorMessage,
        getLoggedUser,
        user,
        userLogOut,
        checkForUpdate,
        getAddresses,
        addresses
    } = USER_REQUESTS()

    const {
        addProductToCart,
        getProductsInCart,
        productsInCart,
        removeProductFromCart,
        removeAllProductsFromCart,
        incrementQuantityFromItemInCart,
        decrementQuantityFromItemInCart,
        getIdsFromItensInCart,
        productsInCartIds
    } = CART_REQUESTS()

    const {
        getAllProducts,
        products,
        getProductDetails,
        productDetails,
        getSearchProducts,
        researchedProducts,
        setResearchedProducts
    } = PRODUCT_REQUESTS()


    const {
        buyAsCreditCardMethod,
    } = PAYMENT_REQUESTS()

    const {
        markProductAsFavorite,
        favoritesProductsId,
        getIdFromFavoritesProducts,
        getProductsMarkAsFavorite,
        productsAsFavorites,
        removeProductFromFavorites
    } = FAVORITES_REQUESTS()

    React.useEffect( () => {
        if ( modalMenu ) {
            document.body.classList.add( 'overflow-hidden' )
        } else {
            document.body.classList.remove( 'overflow-hidden' )
        }

        return () => {
            document.body.classList.remove( 'overflow-hidden' )
        }
    },[modalMenu] )


    React.useEffect( () => {
        checkForUpdate()
        getLoggedUser()
        getAllProducts()
    },[token] )

    React.useEffect( () => {
        if ( user?.name ) setCookie( 'username',user?.name )
    },[user] )

    React.useEffect( () => {
        getIdFromFavoritesProducts()
        getIdsFromItensInCart()
        getProductsInCart()
        getProductsMarkAsFavorite()
    },[token] )


    return (
        <GlobalContext.Provider
            value={{

                modalMenu,
                setModalMenu,
                textLimit,
                formLoginValidade,
                formSignUpValidade,
                formatPhone,
                countdown,
                signInWithEmailAndPassword,
                awaitLoading,
                loading,
                createAccount,
                userErrorMessage,
                user,
                userLogOut,
                transformTittleInSlug,
                products,
                getProductDetails,
                productDetails,
                size,
                getCEP,

                addProductToCart,
                getProductsInCart,
                productsInCart,
                removeProductFromCart,
                removeAllProductsFromCart,

                markProductAsFavorite,
                favoritesProductsId,
                getIdFromFavoritesProducts,

                incrementQuantityFromItemInCart,
                decrementQuantityFromItemInCart,

                productsAsFavorites,
                removeProductFromFavorites,
                productsInCartIds,
                creditCardValidade,

                getCookie,setCookie,
                getSearchProducts,
                researchedProducts,
                setResearchedProducts,
                searchInput,setSearchInput,
                buyAsCreditCardMethod,
                getAddresses,
                addresses

            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider