import React from 'react'
import { textLimit } from './../util/text-limit';
import formsValidate from '../services/forms-validate';
import formatPhone from './../util/convert-phone';
import countdownTime from '../util/countdown';
import USER_REQUESTS from '../services/requests/user-requests';
import controlledLoading from '../util/controlled-loading';
import { getCookie,setCookie } from '../hooks/useCookie';





export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {

    const token = getCookie( 'token' )
    const [modalMenu,setModalMenu] = React.useState( false )
    const { countdown } = countdownTime()
    const { loading,awaitLoading } = controlledLoading()


    const {
        formLoginValidade,
        formSignUpValidade
    } = formsValidate()

    const {
        signInWithEmailAndPassword,
        createAccount,
        userErrorMessage,
        getLoggedUser,
        user,
        userLogOut,
        checkForUpdate,
    } = USER_REQUESTS()


    React.useEffect( () => {
        if ( modalMenu ) {
            document.body.classList.add( 'overflow-hidden' )
        } else {
            document.body.classList.remove( 'overflow-hidden' )
        }

        return () => {
            document.body.classList.remove( 'overflow-hidden' )
        }
    },[modalMenu] )


    React.useEffect( () => {
        checkForUpdate()
        getLoggedUser()
    },[token] )

    React.useEffect( () => {
        if ( user?.name ) setCookie( 'username',user?.name )
    },[user] )



    return (
        <GlobalContext.Provider
            value={{
                modalMenu,
                setModalMenu,
                textLimit,
                formLoginValidade,
                formSignUpValidade,
                formatPhone,
                countdown,
                signInWithEmailAndPassword,
                awaitLoading,
                loading,
                createAccount,
                userErrorMessage,
                user,
                userLogOut
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider