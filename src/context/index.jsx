import React from 'react'
import { textLimit } from './../util/text-limit';
import formsValidate from '../services/forms-validate';
import formatPhone from './../util/convert-phone';




export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {

    const [modalMenu,setModalMenu] = React.useState( false )

    const {
        formLoginValidade,
        formSignUpValidade
    } = formsValidate()


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

    return (
        <GlobalContext.Provider
            value={{ modalMenu,setModalMenu,textLimit,formLoginValidade,formSignUpValidade,formatPhone }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider