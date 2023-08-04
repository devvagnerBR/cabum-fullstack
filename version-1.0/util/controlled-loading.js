import React from 'react'

const controlledLoading = () => {

    const [loading,setLoading] = React.useState( false )

    const awaitLoading = () => {

        setLoading( true )

        setTimeout( () => {
            setLoading( false )
        },2000 )

    }

    return { awaitLoading,loading }
}

export default controlledLoading