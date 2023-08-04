import React from "react";
import { db_firestore,auth } from "../firebase"
import { GO_TO_HOME } from "../../router/navigation";
import { useNavigate } from "react-router-dom";
import { getCookie,removeCookie,setCookie } from "../../hooks/useCookie";



const USER_REQUESTS = () => {

    const navigate = useNavigate()
    const [userErrorMessage,setUserErrorMessage] = React.useState( null )
    const [addresses,setAddresses] = React.useState( [] )
    const [user,setUser] = React.useState( null )
    const token = getCookie( 'token' )

    const checkIfDataAlreadyExist = async ( itemName,item ) => {
        const userRef = db_firestore.collection( "users" );
        const q = await userRef.where( itemName,'==',item ).get();
        return !q.empty;
    }

    const addressesRef = db_firestore
        .collection( "users" ).doc( token )
        .collection( "addresses" )

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



    const getAddresses = () => {



        try {

            addressesRef.onSnapshot( ( docs ) => {
                let data = []
                docs.forEach( ( doc ) => {
                    data.push( doc.data() )
                } )
                setAddresses( data )
            } )

        } catch ( error ) {
            console.log( error );
        }
    }


    const saveNewAddress = async ( address ) => {

        try {
            await addressesRef
                .doc( address.id )
                .set( address )
            console.log( 'endereço cadastrado com sucesso' );

        } catch ( error ) {
            console.log( error );
        }
    }


    const deleteAddress = ( addressId ) => {

        try {

            addressesRef
                .doc( addressId )
                .delete();
            console.log( 'endereço deletado com sucesso' );

        } catch ( error ) {
            console.log( error );
        }
    }

    const updateAddress = async ( body ) => {
        await addressesRef
            .doc( body.id )
            .update( body )
        console.log( 'Endereço atualizado com sucesso' );

    };


    const updateNameOrPhoneNumber = async ( body ) => {

        const userRef = db_firestore.collection( "users" );
        const { newName,newPhoneNumber } = body;

        const dataToUpdate = {}
        if ( newName ) dataToUpdate.name = newName;
        if ( newPhoneNumber ) dataToUpdate.phone_number = newPhoneNumber;

        try {
            await userRef
                .doc( token )
                .update( dataToUpdate )
            console.log( 'dados atualizados com sucesso' );

        } catch ( error ) {
            console.log( error );
        }

    }






    return {
        createAccount,
        signInWithEmailAndPassword,
        userErrorMessage,
        getLoggedUser,
        user,setUser,userLogOut,checkForUpdate,
        getAddresses,addresses,saveNewAddress,deleteAddress,
        updateAddress,updateNameOrPhoneNumber
    }

}

export default USER_REQUESTS