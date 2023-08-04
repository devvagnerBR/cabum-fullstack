import React from 'react'
import PRODUCT_REQUESTS from '../services/requests/products-requests'
import { getCookie } from '../hooks/useCookie'


const ProductsContext = React.createContext( '' )

const ProductsProvider = ( { children } ) => {

    const token = getCookie( 'token' )

    const {
        getAllProducts,
        products,
        getProductDetails,
        productDetails,
        getSearchProducts,
        researchedProducts,
        setResearchedProducts
    } = PRODUCT_REQUESTS()

    React.useEffect( () => {
        getAllProducts()
    },[token] )

    return (
        <ProductsContext.Provider value={{
            getAllProducts,
            products,
            getProductDetails,
            productDetails,
            getSearchProducts,
            researchedProducts,
            setResearchedProducts,
        }}>
            {children}
        </ProductsContext.Provider>
    )

}

const useProductsContext = () => React.useContext( ProductsContext )

export { ProductsProvider,useProductsContext }