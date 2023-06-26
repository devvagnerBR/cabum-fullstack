import React from "react"
import { db_firestore } from "../firebase"

const PRODUCT_REQUESTS = () => {

    const [products,setProducts] = React.useState( [] )
    const [productDetails,setProductDetails] = React.useState( [] )

    const productsRef = db_firestore.collection( "products" )

    const getAllProducts = async () => {

        productsRef.orderBy( "price","asc" ).onSnapshot( ( products ) => {

            products.forEach( ( product ) => {
                setProducts( state => [...state,product.data()] );
            } )
        } )

    }


    const getProductDetails = async ( productId ) => {

        const q = await productsRef.where( "id","==",productId ).get()
        q.forEach( ( docs ) => {
            setProductDetails( state => docs.data() );
        } )
    }

    return {
        getAllProducts,
        products,
        getProductDetails,
        productDetails
    }
}


export default PRODUCT_REQUESTS