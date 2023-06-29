import React from "react";
import { db_firestore,auth } from "../firebase"
import { GO_TO_HOME } from "../../router/navigation";
import { useNavigate } from "react-router-dom";
import { getCookie,removeCookie,setCookie } from "../../hooks/useCookie";



const USER_REQUESTS = () => {

    const navigate = useNavigate()
    const [userErrorMessage,setUserErrorMessage] = React.useState( null )
    const [user,setUser] = React.useState( null )


    const checkIfDataAlreadyExist = async ( itemName,item ) => {
        const userRef = db_firestore.collection( "users" );
        const q = await userRef.where( itemName,'==',item ).get();
        return !q.empty;
    }

    const createAccount = async ( data ) => {

        try {

            const { email,password,birthday,cpf,name,phone_number } = data
            const cpfAlreadyRegistered = await checkIfDataAlreadyExist( 'cpf',cpf );
            const emailAlreadyRegistered = await checkIfDataAlreadyExist( 'email',email );


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

                setCookie( 'token',res.user.uid,7 )
                setCookie( 'username',name,7 )
                console.log( 'cadastrado com sucesso' );
                GO_TO_HOME( navigate )
            }
        } catch ( error ) {
            setUserErrorMessage( error.message );
        }

    }

    const signInWithEmailAndPassword = async ( email,password ) => {

        try {

            const res = await auth.signInWithEmailAndPassword( email,password );
            const user = res.user;
            setCookie( 'token',res.user.uid,7 )
            console.log( 'logado com sucesso' );

        } catch ( error ) {
            console.log( error.message );

        }
    }

    const getLoggedUser = React.useCallback( async () => {

        const token = getCookie( 'token' )
        if ( token ) {
            try {

                const userRef = db_firestore.collection( "users" ).doc( token )
                userRef.onSnapshot( ( docs ) => {
                    setUser( oldUser => docs.data() )
                } )

            } catch ( error ) {
                console.log( error );
            }
        }
    },[user] )

    const userLogOut = async () => {

        try {

            await auth.signOut()
            removeCookie( 'token' )
            removeCookie( 'username' )
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