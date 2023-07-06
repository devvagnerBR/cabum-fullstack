import React from "react"
import { db_firestore } from "../firebase"

const PRODUCT_REQUESTS = () => {

    const [products,setProducts] = React.useState( [] )
    const [productDetails,setProductDetails] = React.useState( [] )
    const [researchedProducts,setResearchedProducts] = React.useState( [] )
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

    const getSearchProducts = async ( productName ) => {

        try {

            const productNameLowerCase = productName.trim().toLowerCase()

            productsRef.where( "tags","array-contains-any",[productName] )
                .onSnapshot( ( docs ) => {

                    let data = []

                    docs.forEach( ( doc ) => {
                        data.push( doc.data() )
                        setResearchedProducts( data );
                    } )


                } )





        } catch ( error ) {
            console.log( error );
        }
    }

    return {
        getAllProducts,
        products,
        getProductDetails,
        productDetails,
        getSearchProducts,
        researchedProducts,
        setResearchedProducts
    }
}


export default PRODUCT_REQUESTS