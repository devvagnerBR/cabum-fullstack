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
            .max( 14 ),

        birthday: z.string( 'Insira uma senha válida' ).nonempty( 'Campo data de nascimento está vazio' ),

        phone_number: z.string().max( 15,'' ).nonempty( 'O campo telefone está vazio' ),

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


    const creditCardValidade = z.object( {
        name: z.string().nonempty( 'Campo obrigatório' ),
        card_number: z.string().nonempty( 'Campo obrigatório' ),
        expiration_date: z.string().nonempty( 'Campo obrigatório' ),
        security_code: z.string().nonempty( 'Campo obrigatório' ),
        card_number: z.string().nonempty( 'Campo obrigatório' ),
        birth: z.string().nonempty( 'Campo obrigatório' ),
        cpf: z.string().nonempty( 'Campo obrigatório' ),

    } )

    return { formLoginValidade,formSignUpValidade,creditCardValidade }

}

export default formsValidate