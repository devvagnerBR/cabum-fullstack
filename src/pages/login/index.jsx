import React from 'react'
import Input from '../../components/Input/Index'
import { SignIn,GoogleLogo } from '@phosphor-icons/react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { GlobalContext } from '../../context'



const LogIn = () => {

    const { formLoginValidade } = React.useContext( GlobalContext )

    const {
        // watch,
        handleSubmit,
        register,
        formState: { errors }
    } = useForm( {
        resolver: zodResolver( formLoginValidade )
    } )


    const handleLogin = ( data ) => {
        //console.log( data );
    }


    return (

        <div className='flex flex-col items-center justify-center py-8 min-h-[500px] max-md:h-[calc(100dvh-15rem)] h-[calc(100dvh-18rem)] '>
            <form
                onSubmit={handleSubmit( handleLogin )}
                className='flex  items-center justify-center flex-col h-[500px]'>
                <h1
                    className='text-orange-500 text-2xl font-bold'>FAZER LOGIN</h1>
                <Input
                    label='Email'
                    name='email'
                    type='text'
                    register={register}
                    error={errors.email && errors.email.message}
                    placeholder='Digite o seu email cadastrado'
                >

                </Input>
                <Input
                    placeholder='Digite sua senha cadastrada'
                    register={register}
                    label='Senha'
                    name='password'
                    type='password'
                    error={errors.password && errors.password.message}
                />
                <button
                    className='hover:bg-orange-400 transition-all mt-6 h-[3.125rem] flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-full'>
                    <SignIn
                        size={28}
                        weight='regular'
                        className='fill-white'
                    />
                    ENTRAR
                </button>
                <section
                    className='py-4 flex flex-col items-center w-full'>
                    <p
                        className='text-neutral-500 text-sm'>Ou</p>
                    <button
                        className='border flex items-center justify-center gap-2 text-neutral-500 border-orange-500 h-[3.125rem] w-full mt-4'>
                        <GoogleLogo
                            size={33}
                            weight='bold'
                            className='fill-orange-500'
                        />
                        Entrar com o Google
                    </button>
                </section>
            </form>
        </div>
    )
}

export default LogIn