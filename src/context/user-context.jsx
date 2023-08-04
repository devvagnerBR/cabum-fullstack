import React from 'react'
import USER_REQUESTS from '../services/requests/user-requests'
import { getCookie, setCookie } from '../hooks/useCookie'


const UserContext = React.createContext( '' )

const UserProvider = ( { children } ) => {

    const token = getCookie( 'token' )

    const {
        signInWithEmailAndPassword,
        createAccount,
        userErrorMessage,
        getLoggedUser,
        user,
        userLogOut,
        checkForUpdate,
        getAddresses,
        addresses,
        saveNewAddress,
        deleteAddress,
        updateAddress,
        updateNameOrPhoneNumber
    } = USER_REQUESTS()


    React.useEffect( () => {
        if ( user?.name ) setCookie( 'username',user?.name )
    },[user] )


    React.useEffect( () => {
        checkForUpdate()
        getLoggedUser()
    },[token] )

    return (
        <UserContext.Provider value={{
            signInWithEmailAndPassword,
            createAccount,
            userErrorMessage,
            getLoggedUser,
            user,
            userLogOut,
            checkForUpdate,
            getAddresses,
            addresses,
            saveNewAddress,
            deleteAddress,
            updateAddress,
            updateNameOrPhoneNumber }}>
            {children}
        </UserContext.Provider>
    )

}

const useUserContext = () => React.useContext( UserContext )

export { UserProvider,useUserContext }