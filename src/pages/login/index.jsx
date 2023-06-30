import React from 'react'
import Input from '../../components/input'
import { SignIn } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { myContext } from '../../hooks/useContext'
import { useNavigate } from 'react-router-dom'
import { GO_TO_HOME } from './../../router/navigation';
import Footer from '../../components/footer'



const LogIn = () => {


    const navigate = useNavigate()

    const {
        formLoginValidade,
        signInWithEmailAndPassword,
        awaitLoading,
        loading
    } = myContext()

    const { handleSubmit,register,formState: { errors } } = useForm( { resolver: zodResolver( formLoginValidade ) } )

    const handleLogin = async ( data ) => {
        await awaitLoading()
        await signInWithEmailAndPassword( data.email,data.password )
        GO_TO_HOME( navigate )
    }


    return (

        <div className='flex flex-col items-center justify-center  min-h-[500px] max-md:h-[calc(100dvh-15rem)] h-[calc(100dvh-18rem)] '>
            <form
                onSubmit={handleSubmit( handleLogin )}
                className='flex  items-center justify-center flex-col h-[350px]'>
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
                    disabled={loading === true}
                    className={`hover:bg-orange-400 transition-all mt-6 h-[3.125rem] flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-full ${loading && 'bg-orange-200'}`}>
                    <SignIn
                        size={28}
                        weight='regular'
                        className='fill-white'
                    />
                    ENTRAR
                </button>
            </form>

            <Footer />
        </div>
    )
}

export default LogIn