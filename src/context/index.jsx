import React from 'react'




export const GlobalContext = React.createContext( '' )


const GlobalProvider = ( { children } ) => {

    const [modalMenu,setModalMenu] = React.useState( false )


    return (
        <GlobalContext.Provider
            value={{ modalMenu,setModalMenu }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider