import React from "react";
import { db_firestore,auth,provider } from "../firebase"

const USER_REQUESTS = () => {

    const [userErrorMessage,setUserErrorMessage] = React.useState( null )

    const dataAlreadyExist = async ( itemName,item ) => {
        const userRef = db_firestore.collection( "users" );
        const q = await userRef.where( itemName,'==',item ).get();
        return !q.empty;
    }

    const createAccount = async ( data ) => {

        try {
            const { email,password,birthday,cpf,name,phone_number } = data
            const cpfAlreadyRegistered = await dataAlreadyExist( 'cpf',cpf );

            if ( cpfAlreadyRegistered ) {
                throw new Error( 'CPF já cadastrado' );
            }

            const res = await auth.createUserWithEmailAndPassword( email,password );
            window.localStorage.setItem( 'token',res.user.uid )
            await db_firestore.collection( "users" ).doc( res.user.uid ).set( {
                uid: res.user.uid,
                name,
                email,
                password,
                birthday,
                cpf,
                phone_number
            } )

            console.log( 'cadastrado com sucesso' );
        } catch ( error ) {
            setUserErrorMessage( error.message );
        }

    }

    const signInWithEmailAndPassword = async ( email,password ) => {

        try {


            const res = await auth.signInWithEmailAndPassword( email,password );
            const user = res.user;
            window.localStorage.setItem( 'token',user.uid )
            console.log( 'logado com sucesso' );

        } catch ( error ) {
            console.log( error.message );

        }
    }





    return { createAccount,signInWithEmailAndPassword,userErrorMessage }

}

export default USER_REQUESTS