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



    const formSignUpValidade = z.object( {

        name: z.string().nonempty( 'Campo nome está vazio' ),

        cpf: z.string().nonempty( 'Campo CPF está vazio' )
            .nonempty()
            .max( 11 ),

        birthday: z.string( 'Insira uma senha válida' ).nonempty( 'Campo data de nascimento está vazio' ),

        phone_number: z.string().max( 12,'' ).nonempty( 'O campo telefone está vazio' ),

        email: z.string()
            .nonempty( 'O campo email está vazio' )
            .email( 'Formato de email inválido' ),

        password: z.string()
            .nonempty( 'O campo senha está vazio' ),
        // .regex( /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).*$/,'A senha não atende aos requisitos' ),

        password_confirm: z.string( '' )
            .nonempty( 'O campo senha está vazio' )
        // .regex( /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~`]).*$/,'A senha não atende aos requisitos' ),
    } )


    return { formLoginValidade,formSignUpValidade }

}

export default formsValidate