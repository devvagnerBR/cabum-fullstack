import React from 'react'
import { api } from './../services/base-url';



export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {




    return (
        <GlobalContext.Provider
            value={{ api }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider