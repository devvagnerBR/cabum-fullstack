import React from 'react'
import ORDER_REQUESTS from '../services/requests/order-requests'


const OrdersContext = React.createContext( '' )

const OrdersProvider = ( { children } ) => {

    const {
        getGlobalOrdersSize,
        saveNewOrder,
        getOrders,
        orders,
        addOrderInfos,
        getPreOrder,
        preOrder
    } = ORDER_REQUESTS()

    return (
        <OrdersContext.Provider value={{
            getGlobalOrdersSize,
            saveNewOrder,
            getOrders,
            orders,
            addOrderInfos,
            getPreOrder,
            preOrder
        }}>
            {children}
        </OrdersContext.Provider>
    )

}

const useOrdersContext = () => React.useContext( OrdersContext )

export { OrdersProvider,useOrdersContext }