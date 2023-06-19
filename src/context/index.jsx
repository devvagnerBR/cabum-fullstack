import React from 'react'



export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {




    return (
        <GlobalContext.Provider
            value={{ oi: 'oi' }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider