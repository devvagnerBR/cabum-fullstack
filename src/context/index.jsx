import React from 'react'
import { textLimit } from './../util/text-limit';




export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {

    const [modalMenu,setModalMenu] = React.useState( false )


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
            value={{ modalMenu,setModalMenu,textLimit }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider