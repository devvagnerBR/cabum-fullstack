import React from 'react';
import { db_firestore } from '../firebase';
import { getCookie } from './../../hooks/useCookie';
import firebase from 'firebase/app'

const CART_REQUESTS = () => {

    const [productsInCart,setProductsInCart] = React.useState( [] )
    const [productsInCartIds,setProductsInCardIds] = React.useState( [] )

    const token = getCookie( 'token' )

    const cartRef = db_firestore
        .collection( "users" )
        .doc( token )
        .collection( "cart" )

    const addProductToCart = async ( product ) => {

        const { id,price,image_url,name } = product
        try {

            await cartRef.doc( product.id ).set( { id,price,image_url,name,quantity: 1 } )
            console.log( 'produto adicionado com sucesso!' );

        } catch ( error ) {
            console.log( error );
        }
    }


    const getProductsInCart = async () => {

        try {

            cartRef.onSnapshot( ( docs ) => {
                let data = []
                docs.forEach( ( doc ) => {

                    data.push( doc.data() )
                } )

                setProductsInCart( data );
            } )

        } catch ( error ) {
            console.log( error );
        }
    }

    const removeProductFromCart = async ( productId ) => {


        try {

            await cartRef
                .doc( productId )
                .delete()
            console.log( 'produto removido do carrinho' );

        } catch ( error ) {
            console.log( error );
        }
    }



    const removeAllProductsFromCart = async () => {

        try {

            const products = await cartRef.get();
            const batch = db_firestore.batch();

            products.forEach( ( doc ) => {
                batch.delete( doc.ref );
            } )

            await batch.commit();
            console.log( 'carrinho deletado com sucesso' );

        } catch ( error ) {
            console.log( error );
        }
    }


    const incrementQuantityFromItemInCart = async ( productId ) => {

        try {

            await cartRef.doc( productId ).update( {
                quantity: firebase.firestore.FieldValue.increment( 1 )
            } )

        } catch ( error ) {
            console.log( error );
        }
    }

    const decrementQuantityFromItemInCart = async ( productId ) => {

        try {

            const docRef = cartRef.doc( productId );
            const doc = await docRef.get();
            if ( doc.exists ) {

                const quantity = doc.data().quantity;
                if ( quantity > 1 ) {
                    await cartRef.doc( productId ).update( {
                        quantity: firebase.firestore.FieldValue.increment( -1 )
                    } )
                }
            }

        } catch ( error ) {
            console.log( error );
        }
    }

    const getIdsFromItensInCart = async () => {


        try {

            cartRef.onSnapshot( ( docs ) => {
                let data = []
                docs.forEach( ( doc ) => {
                    data.push( doc.id )
                } )

                setProductsInCardIds( data )
            } )



        } catch ( error ) {
            console.log( error );
        }
    }





    return {
        addProductToCart,
        getProductsInCart,
        productsInCart,
        removeProductFromCart,
        removeAllProductsFromCart,
        incrementQuantityFromItemInCart,
        decrementQuantityFromItemInCart,
        getIdsFromItensInCart,
        productsInCartIds,

    }

}

export default CART_REQUESTS