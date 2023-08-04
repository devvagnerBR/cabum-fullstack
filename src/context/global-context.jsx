import React from 'react'
import { UserProvider } from './user-context'
import { CartProvider } from './cart-context'
import { ProductsProvider } from './products-context'
import { FavoritesProvider } from './favorites-context'
import { OrdersProvider } from './orders-context'
import { UtilitiesProvider } from './utilities-context'


const GlobalContext = ( { children } ) => {

    

    return (
        <React.Suspense fallback={<p>Loading...</p>}>
            <UserProvider>
                <OrdersProvider>
                    <FavoritesProvider>
                        <CartProvider>
                            <ProductsProvider>
                                <UtilitiesProvider>
                                    {children}
                                </UtilitiesProvider>
                            </ProductsProvider>
                        </CartProvider>
                    </FavoritesProvider>
                </OrdersProvider>
            </UserProvider>
        </React.Suspense>
    )

}

export default GlobalContext