
import React from 'react';
import { getCookie } from '../../hooks/useCookie';
import { db_firestore } from './../firebase/index';


const ORDER_REQUESTS = () => {


    const [orders,setOrders] = React.useState( [] )
    const globalOrdersRefs = db_firestore.collection( "global-orders" )
    const token = getCookie( 'token' )

    const getGlobalOrdersSize = async () => {

        const orders = await globalOrdersRefs.get()
        return orders.size

    }


    const deleteCartItens = async () => {

        const cartRef = db_firestore
            .collection( "users" ).doc( token )
            .collection( "cart" );

        const cart = await cartRef.get();
        cart.forEach( ( doc ) => [
            doc.ref.delete()
        ] )

    }


    const deletePreOrder = async () => {

        const preOrderRef = db_firestore
            .collection( "users" ).doc( token )
            .collection( "pre-order" );

        const cart = await preOrderRef.get();
        cart.forEach( ( doc ) => [
            doc.ref.delete()
        ] )

    }



    const saveNewOrder = async ( preOrder ) => {

        try {

            const lastOrder = await getGlobalOrdersSize()
            const newOrderNumber = lastOrder + 1
            console.log( '[1]:',newOrderNumber );
            const order = { ...preOrder,order_number: newOrderNumber,order_date: Date.now() }
            await db_firestore
                .collection( "users" ).doc( token )
                .collection( "orders" ).doc( newOrderNumber.toString() )
                .set( order )
            console.log( '[2]: pedido realizado' );
            await db_firestore
                .collection( "global-orders" ).doc( newOrderNumber.toString() )
                .set( {
                    order_number: newOrderNumber,
                    user_id: token,
                    order_date: Date.now()
                } )
            console.log( '[3]: salvo no global-orders' );
            await deleteCartItens()
            console.log( '[4]: carrinho deletado com sucesso' )
            await deletePreOrder()
            console.log( '[5]: pre-order deletado com sucesso' )
            console.log( '[6]: compra realizada com sucesso' );

        } catch ( error ) {
            console.log( error );
        }
    }


    const getOrders = async () => {

        const ordersRef = db_firestore
            .collection( "users" ).doc( token )
            .collection( "orders" );

        try {

            ordersRef.onSnapshot( ( docs ) => {

                let data = []
                docs.forEach( ( doc ) => {

                    data.push( doc.data() )
                } )

                setOrders( data )

            } )

        } catch ( error ) {
            console.log( error );
        }


    }



    return {
        getGlobalOrdersSize,
        saveNewOrder,
        getOrders,
        orders
    }
}

export default ORDER_REQUESTS