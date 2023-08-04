import React from 'react'
import FAVORITES_REQUESTS from '../services/requests/favorite-request'
import { getCookie } from '../hooks/useCookie'


const FavoritesContext = React.createContext( '' )

const FavoritesProvider = ( { children } ) => {

    const token = getCookie( 'token' )


    const {
        markProductAsFavorite,
        favoritesProductsId,
        getIdFromFavoritesProducts,
        getProductsMarkAsFavorite,
        productsAsFavorites,
        removeProductFromFavorites
    } = FAVORITES_REQUESTS()


    React.useEffect(() => {
        getIdFromFavoritesProducts()
        getProductsMarkAsFavorite()
    },[token])


    return (
        <FavoritesContext.Provider value={{
            markProductAsFavorite,
            favoritesProductsId,
            getIdFromFavoritesProducts,
            getProductsMarkAsFavorite,
            productsAsFavorites,
            removeProductFromFavorites
        }}>
            {children}
        </FavoritesContext.Provider>
    )

}

const useFavoritesContext = () => React.useContext( FavoritesContext )

export { FavoritesProvider,useFavoritesContext }