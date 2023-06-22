import React from 'react'
import cabum_logo from '../../assets/images/cabum-logo.png'
import { UserCircle,Heart,ShoppingCart,List,CaretLeft } from '@phosphor-icons/react'
import { GO_TO_CART,GO_TO_FAVORITES,GO_TO_LOGIN,GO_TO_SIGNUP } from '../../router/navigation'
import { useLocation,useNavigate } from 'react-router-dom'
import SidebarMenu from '../sidebar-menu'
import { GlobalContext } from '../../context'
import { GO_TO_HOME } from './../../router/navigation';

const Header = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate()
    const { modalMenu,setModalMenu } = React.useContext( GlobalContext )

    const isLoginAndSignUpPage = pathname === '/entrar' || pathname === '/cadastro'

    return (
        <header
            className={`bg-blue-700 ${isLoginAndSignUpPage && 'border-b-4 border-orange-400'}  h-[7rem] max-md:h-[4rem] max-md:justify-around px-4 justify-center flex items-center relative max-xl:w-full  max-xl:justify-evenly     gap-4 md:gap-8 lg:px-8  max-md:px-2 flex-wrap  m-auto`}>
            <div className='flex  gap-4 items-center justify-start '>
                <h1 onClick={() => GO_TO_HOME( navigate )} className={` ${!isLoginAndSignUpPage && 'hidden'} flex md:hidden items-center text-white gap-2  cursor-pointer`}><CaretLeft className='fill-white' size={20} /> Voltar </h1>
                <List onClick={() => setModalMenu( !modalMenu )} size={40} weight='regular' className={` ${isLoginAndSignUpPage && 'invisible'} fill-neutral-300 cursor-pointer`} />
                <img onClick={() => GO_TO_HOME( navigate )} className='max-md:hidden cursor-pointer' width={170} src={cabum_logo} alt="cabum logo" />
            </div>

            <div className='w-[25%]  flex-1 max-md:w-[60%] max-w-[50rem]'>
                <input placeholder='Busque aqui' className={`${isLoginAndSignUpPage && 'invisible'}  w-full bg-neutral-100 pl-4 h-[2.25rem]  text-neutral-600 border focus:border-orange-500 rounded-sm placeholder:text-sm`} type="text" />
            </div>

            <div className='flex gap-8  '>

                <div className='text-xs flex gap-2 items-center max-md:hidden'>
                    <section>
                        <UserCircle size={40} weight='fill' className=' fill-neutral-100' />
                    </section>
                    <section>
                        <h1 className='text-neutral-100'>Faça <span onClick={() => GO_TO_LOGIN( navigate )} className='uppercase text-neutral-100 font-semibold hover:underline cursor-pointer transition-all'>Login</span> ou</h1>
                        <h1 className='text-neutral-100'>crie seu <span onClick={() => GO_TO_SIGNUP( navigate )} className='text-neutral-100 font-semibold uppercase hover:underline cursor-pointer transition-all'>Cadastro</span></h1>
                    </section>
                </div>
                <div className={`${isLoginAndSignUpPage && 'invisible'} flex items-center gap-4 max-[360px]:hidden`}>
                    <Heart onClick={() => GO_TO_FAVORITES( navigate )} size={22} weight='fill' className=' fill-neutral-100 cursor-pointer' />
                    <ShoppingCart onClick={() => GO_TO_CART( navigate )} size={22} weight='fill' className=' fill-neutral-100 cursor-pointer' />
                </div>
            </div>

            {modalMenu && <SidebarMenu />}
        </header>
    )
}

export default Header

//800px - 50rem