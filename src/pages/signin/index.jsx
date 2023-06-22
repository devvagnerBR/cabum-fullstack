import React from 'react'
import { SignIn as SignInIcon } from '@phosphor-icons/react'
import Input from '../../components/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { myContext } from '../../hooks/useContext'


const SignIn = () => {

    const [customError,setCustomError] = React.useState( null )
    const { formSignUpValidade } = myContext()
    const { handleSubmit,register,formState: { errors } } = useForm( { resolver: zodResolver( formSignUpValidade ) } )


    const handleCreateAccount = ( data ) => {
        const { password,password_confirm } = data;
        const isEqual = password === password_confirm
        if ( !isEqual ) {
            setCustomError( 'As senhas informadas não são iguais' )
            setTimeout( () => {
                setCustomError( null )
            },2000 )
        } else {
            console.log( 'é igual' );
        }

    }





    return (
        <div className='flex flex-col items-center justify-center  min-h-[760px] pt-4 max-md:h-fit h-[calc(100dvh-18rem)] '>
            <header>
                <h1 className='text-orange-500 text-2xl font-bold'>CRIAR CONTA</h1>
            </header>
            <form
                onSubmit={handleSubmit( handleCreateAccount )}
                className='grid grid-cols-2 gap-4 max-md:grid-cols-1 '>
                <Input
                    label='Nome completo*'
                    name='name'
                    type='text'
                    register={register}
                    error={errors.name && errors.name.message}
                    placeholder='Jhon Doe'

                />
                <Input
                    label='CPF*'
                    name='cpf'
                    type='text'
                    register={register}
                    error={errors.cpf && errors.cpf.message}
                    placeholder='___.___.___-__'
                />
                <Input
                    label='Data de nascimento*'
                    name='birthday'
                    type='date'
                    register={register}
                    error={errors.birthday && errors.birthday.message}
                    placeholder='Digite o seu email cadastrado'
                />
                <Input
                    label='Telefone celular*'
                    name='phone_number'
                    type='text'
                    register={register}
                    error={errors.phone_number && errors.phone_number.message}
                    placeholder='(__) _____-____'
                    maxLength={12}
                />
                <Input
                    label='Email*'
                    name='email'
                    type='text'
                    register={register}
                    error={errors.email && errors.email.message}
                    placeholder='jhondoe@example.com'
                />
                <Input
                    label='Senha*'
                    name='password'
                    type='password'
                    register={register}
                    error={errors.password && errors.password.message}
                    placeholder='Crie sua senha'

                />
                <Input
                    label='Confirmar senha*'
                    name='password_confirm'
                    type='password'
                    register={register}
                    error={errors.password_confirm && errors.password_confirm.message}
                    placeholder='Confirme sua senha'

                />
                <button
                    className='hover:bg-orange-400 transition-all  h-[3.125rem] max-md:mt-4 mt-11 flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-full'>
                    <SignInIcon
                        size={28}
                        weight='regular'
                        className='fill-white' />
                    ENTRAR
                </button>
            </form>
            <p className='h-8 flex pt-2'>{customError}</p>
        </div>
    )
}

export default SignIn