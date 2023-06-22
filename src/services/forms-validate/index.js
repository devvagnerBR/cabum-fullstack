import React from 'react'
import { z } from 'zod'

const formsValidate = () => {


    const formLoginValidade = z.object( {
        email: z.string()
            .nonempty( 'O campo email está vazio' )
            .email( 'Formato de email inválido' )
        ,
        password: z.string()
            .nonempty( 'O campo senha está vazio' )
    } )


    return { formLoginValidade }

}

export default formsValidate