import React from 'react'
import Input from '../../components/input/index'
import { SignIn as SignInIcon,GoogleLogo } from '@phosphor-icons/react'


const SignIn = () => {

    return (
        <div className='flex flex-col items-center justify-center py-8 min-h-[500px] max-md:h-[calc(100dvh-15rem)] h-[calc(100dvh-18rem)] '>
            <form className='flex  items-center justify-center flex-col h-[500px]' action="">
                <h1 className='text-orange-500 text-2xl font-bold'>FAZER LOGIN</h1>
                <Input />
                <Input />
                <button className='hover:bg-orange-400 transition-all mt-6 h-[3.125rem] flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-full'>
                    <SignInIcon size={28} weight='regular' className='fill-white' />
                    ENTRAR
                </button>
                <section className='py-4 flex flex-col items-center w-full'>
                    <p className='text-neutral-500 text-sm'>Ou</p>
                    <button className='border flex items-center justify-center gap-2 text-neutral-500 border-orange-500 h-[3.125rem] w-full mt-4'>
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

export default SignIn