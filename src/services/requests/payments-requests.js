import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { db_firestore } from '../firebase';
import { getCookie } from '../../hooks/useCookie';




const PAYMENT_REQUESTS = () => {

    const token = getCookie( 'token' )

    const ordersRef = db_firestore
        .collection( "users" )
        .doc( token )
        .collection( "orders" )

    const buyAsCreditCardMethod = async ( body ) => {

        const {
            delivery_address,
            total_price_order,
            delivery_method,
            itens,
        } = body


        try {

            console.log( {

                order_number: uuidv4(),
                status: 'em processo',
                order_date: Date.now(),
                payment_method: 'credit-card',
                delivery_address,
                total_price_order,
                delivery_method,
                itens

            } )

            // await ordersRef.doc( uuidv4() ).set( {

            //     order_number: uuidv4(),
            //     status: '',
            //     order_date: Date.now(),
            //     payment_method,
            //     delivery_address,
            //     total_price_order,
            //     delivery_method,
            //     itens

            // } )

        } catch ( error ) {
            console.log( error );
        }




    }



    return { buyAsCreditCardMethod }


}

export default PAYMENT_REQUESTS