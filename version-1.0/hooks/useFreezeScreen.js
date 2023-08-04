import React from 'react'

const useFreezeScreen = ( state ) => {

    React.useEffect( () => {
        if ( state ) {
            document.body.classList.add( 'overflow-hidden' )
        } else {
            document.body.classList.remove( 'overflow-hidden' )
        }

        return () => {
            document.body.classList.remove( 'overflow-hidden' )
        }
    },[state] )



}

export default useFreezeScreen