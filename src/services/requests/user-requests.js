import React from "react";
import { db_firestore,auth,provider } from "../firebase"
import { GO_TO_HOME } from "../../router/navigation";
import { useNavigate } from "react-router-dom";



const USER_REQUESTS = () => {

    const navigate = useNavigate()
    const [userErrorMessage,setUserErrorMessage] = React.useState( null )
    const [user,setUser] = React.useState( null )


    const dataAlreadyExist = async ( itemName,item ) => {
        const userRef = db_firestore.collection( "users" );
        const q = await userRef.where( itemName,'==',item ).get();
        return !q.empty;
    }

    const createAccount = async ( data ) => {

        try {

            const { email,password,birthday,cpf,name,phone_number } = data
            const cpfAlreadyRegistered = await dataAlreadyExist( 'cpf',cpf );
            const emailAlreadyRegistered = await dataAlreadyExist( 'email',email );


            if ( cpfAlreadyRegistered ) {
                throw new Error( 'CPF já cadastrado' );
            }
            if ( emailAlreadyRegistered ) {
                throw new Error( 'Email já cadastrado' );
            } else {

                const res = await auth.createUserWithEmailAndPassword( email,password );
                await db_firestore.collection( "users" ).doc( res.user.uid ).set( {
                    uid: res.user.uid,
                    name,
                    email,
                    birthday,
                    cpf,
                    phone_number
                } )

                window.localStorage.setItem( 'token',res.user.uid )
                console.log( 'cadastrado com sucesso' );
                GO_TO_HOME(navigate)
            }
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

    const getLoggedUser = async () => {

        const token = window.localStorage.getItem( 'token' )
        if ( token ) {
            try {

                const userRef = db_firestore.collection( "users" ).doc( token )
                userRef.onSnapshot( ( docs ) => {
                    setUser( docs.data() )
                } )

            } catch ( error ) {
                console.log( error );
            }
        }
    }

    const userLogOut = async () => {

        try {

            await auth.signOut()
            window.localStorage.removeItem( 'token' )
            window.location.reload()

        } catch ( error ) {
            console.log( error )

        }
    }


    const checkForUpdate = async () => {

        auth.onAuthStateChanged( ( user ) => {

            if ( user ) {
                const userId = user.uid
                const userRef = db_firestore
                    .collection( "users" )
                    .doc( userId )

                userRef.onSnapshot( ( docs ) => {
                    if ( docs.exists ) {
                        setUser( docs.data() )
                    }
                } )
            }
        } )

    }


    return {
        createAccount,
        signInWithEmailAndPassword,
        userErrorMessage,
        getLoggedUser,
        user,setUser,userLogOut,checkForUpdate
    }

}

export default USER_REQUESTS