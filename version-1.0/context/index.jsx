import React from 'react'
import { textLimit } from '../util/text-limit';
import formsValidate from '../services/forms-validate';
import formatPhone from '../util/convert-phone';
import countdownTime from '../util/countdown';
import USER_REQUESTS from '../services/requests/user-requests';
import controlledLoading from '../util/controlled-loading';
import { getCookie,setCookie } from '../hooks/useCookie';
import transformTittleInSlug from '../util/transform-tittle-in-slug';
import PRODUCT_REQUESTS from '../services/requests/products-requests';
import getPageWidth from '../util/get-page-width';

import CART_REQUESTS from '../services/requests/cart-requests';
import FAVORITES_REQUESTS from '../services/requests/favorite-request';
import PAYMENT_REQUESTS from '../services/requests/payments-requests';
import viaCEP from '../util/get-address';
import getViaCep from '../util/get-cep';
import ORDER_REQUESTS from '../services/requests/order-requests';
import useFreezeScreen from '../hooks/useFreezeScreen';

export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {

    const token = getCookie( 'token' )
    const [modalMenu,setModalMenu] = React.useState( false )
    const [modalNewAddress,setModalNewAddress] = React.useState( false )
    const [modalEditAddress,setModalEditAddress] = React.useState( null )
    const [editableAddress,setEditableAddress] = React.useState( null )
    const [modalCompletedPurchase,setModalCompletedPurchase] = React.useState( false )

    const [searchInput,setSearchInput] = React.useState( '' )
    const { countdown } = countdownTime()
    const { loading,awaitLoading } = controlledLoading()
    const { size } = getPageWidth()

    useFreezeScreen( modalMenu )


    const {
        formLoginValidade,
        formSignUpValidade,
        creditCardValidade,
        formNewAddressValidate
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
        addresses,
        saveNewAddress,
        deleteAddress,
        updateAddress,
        updateNameOrPhoneNumber
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
        productsInCartIds,
        addOrderInfos,
        getPreOrder,
        preOrder
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

    const {
        saveNewOrder,
        getOrders,
        orders
    } = ORDER_REQUESTS()

    const {
        getCEP,
        fullAddress
    } = viaCEP()

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
                formNewAddressValidate,
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
                getViaCep,

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
                deleteAddress,

                getCookie,setCookie,
                getSearchProducts,
                researchedProducts,
                setResearchedProducts,
                searchInput,setSearchInput,
                buyAsCreditCardMethod,
                getAddresses,
                addresses,
                getCEP,fullAddress,
                saveNewAddress,
                modalNewAddress,setModalNewAddress,
                modalEditAddress,setModalEditAddress,
                editableAddress,setEditableAddress,
                updateAddress,
                updateNameOrPhoneNumber,
                addOrderInfos,
                getPreOrder,
                preOrder,
                saveNewOrder,
                getOrders,
                orders,
                modalCompletedPurchase,
                setModalCompletedPurchase
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider