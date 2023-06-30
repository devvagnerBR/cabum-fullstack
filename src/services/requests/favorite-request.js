import React from 'react'
import { db_firestore } from '../firebase';
import { getCookie } from '../../hooks/useCookie';
import { Logger } from 'sass';

const FAVORITES_REQUESTS = () => {

    const [favoritesProductsId,setFavoritesProductsId] = React.useState( [] )
    const [productsAsFavorites,setProductsAsFavorites] = React.useState( [] )

    const token = getCookie( 'token' )
    const favoritesRef = db_firestore
        .collection( "users" )
        .doc( token )
        .collection( "favorites" )


    const markProductAsFavorite = async ( product ) => {

        const { id,price,image_url,name } = product

        try {
            await favoritesRef
                .doc( product.id )
                .set( { id,price,image_url,name } )
            console.log( 'produto marcado como favorito' );


        } catch ( error ) {

            console.log( error );
        }

    }

    const getIdFromFavoritesProducts = () => {


        try {

            favoritesRef.onSnapshot( ( docs ) => {

                let data = []
                docs.forEach( ( doc ) => {

                    data.push( doc.id )
                } )

                setFavoritesProductsId( data );
            } )


        } catch ( error ) {
            console.log( error );
        }


    }

    const getProductsMarkAsFavorite = async () => {

        try {

            favoritesRef.onSnapshot( ( docs ) => {
                let data = []
                docs.forEach( ( doc ) => {
                    if ( doc.exists ) data.push( doc.data() )
                } )

                setProductsAsFavorites( data )
            } )

        } catch ( error ) {
            console.log( error );
        }


    }

    const removeProductFromFavorites = async ( productId ) => {

        try {

            await favoritesRef
                .doc( productId )
                .delete();
            console.log( 'produto removido dos favoritos' );

        } catch ( error ) {
            console.log( error );
        }
    }




    return {
        markProductAsFavorite,
        getIdFromFavoritesProducts,
        favoritesProductsId,
        getProductsMarkAsFavorite,
        productsAsFavorites,
        removeProductFromFavorites
    }
}

export default FAVORITES_REQUESTS