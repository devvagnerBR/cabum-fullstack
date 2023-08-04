import React from 'react'
import { UserCircle,House,Heart,ShoppingCart,X,Basket,UserFocus } from '@phosphor-icons/react'
import { GO_TO_CART,GO_TO_FAVORITES,GO_TO_HOME,GO_TO_LOGIN,GO_TO_MY_ACCOUNT,GO_TO_SIGNUP } from '../../router/navigation';
import { useNavigate } from 'react-router-dom';
import { myContext } from '../../hooks/useContext';


const SidebarMenu = () => {

    const navigate = useNavigate()

    const { modalMenu,setModalMenu,user,userLogOut } = myContext()

    const handleOutsideClick = ( e ) => {
        if ( e.target === e.currentTarget ) setModalMenu( false )
    }

    return (
        <div
            onClick={handleOutsideClick}

            className='w-full h-[100dvh] max-md:h-[calc(100dvh-4rem)] bg-neutral-800/70 z-50 absolute max-md:top-[4rem] top-0 left-0'>
            <aside className='bg-blue-500 w-[20rem] h-full max-md:w-full'>

                <header className='w-full h-[4rem] flex items-center pl-4 gap-4'>
                    <UserCircle size={40} weight='fill' className=' fill-neutral-100' />
                    <h1 className='text-neutral-200 text-[1.25rem] font-extrabold'>{`${user?.name ? `Olá, ${user?.name}` : 'Olá. Faça seu login'}`}</h1>
                </header>

                <section
                    onClick={() => {
                        GO_TO_MY_ACCOUNT( navigate )
                        setModalMenu( false )
                    }}
                    className='w-full h-[3rem] flex items-center  pl-8 gap-4  '>
                    <House weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-md cursor-pointer'>Minha conta</h1>
                </section>
                <section
                    onClick={() => {
                        navigate( '/minha-conta/meus-pedidos' )
                        setModalMenu( false )
                    }}
                    className='w-full h-[3rem] flex items-center  pl-8 gap-4 '>
                    <Basket weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-md cursor-pointer'>Meus pedidos</h1>
                </section>
                <section
                    onClick={() => {
                        navigate( '/minha-conta/meus-dados' )
                        setModalMenu( false )
                    }}
                    className='w-full h-[3rem] flex items-center  pl-8 gap-4 '>
                    <UserFocus weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-md cursor-pointer'>Meus dados</h1>
                </section>
                <section
                    onClick={() => {
                        GO_TO_FAVORITES( navigate )
                        setModalMenu( false )
                    }}
                    className='w-full h-[3rem] flex items-center  pl-8 gap-4 '>
                    <Heart weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-md cursor-pointer'>Favoritos</h1>
                </section>
                <section
                    onClick={() => {
                        GO_TO_CART( navigate )
                        setModalMenu( false )
                    }}
                    className='w-full h-[3rem] flex items-center  pl-8 gap-4 '>
                    <ShoppingCart weight='fill' size={22} className='fill-neutral-100' />
                    <h1 className='text-neutral-100 text-md cursor-pointer'>Carrinho</h1>
                </section>
                <footer className=' w-[20rem] flex flex-col items-center justify-center max-md:w-full h-[7rem] fixed bottom-0'>

                    {!user ? <>
                        <section className=' w-11/12 rounded-md bg-orange-500  justify-center h-[3rem] flex items-center '>
                            <h1
                                onClick={() => {
                                    GO_TO_LOGIN( navigate )
                                    setModalMenu( false )
                                }}
                                className='text-neutral-100  cursor-pointer font-semibold text-lg'>ENTRAR</h1>
                        </section>
                        <section
                            onClick={() => {
                                GO_TO_SIGNUP( navigate )
                                setModalMenu( false )
                            }}
                            className='w-11/12 rounded-md cursor-pointer  justify-center h-[3rem] flex items-center '>
                            <h1
                                className='text-neutral-100 font-semibold text-lg'>CADASTRO</h1>
                        </section> </> :
                        <section
                            onClick={() => {
                                userLogOut()
                                GO_TO_HOME( navigate )
                            }}
                            className=' w-11/12 rounded-md cursor-pointer bg-orange-500  justify-center h-[3rem] flex items-center '>
                            <h1
                                className='text-neutral-100   font-semibold text-lg'>SAIR</h1>
                        </section>
                    }

                </footer>
            </aside>
            <div className='w-10 h-10 absolute max-md:hidden  left-[20.2rem] top-[20px] cursor-pointer '>
                <X onClick={() => setModalMenu( !modalMenu )} size={36} className='fill-neutral-100' />
            </div>
        </div >
    )
}

export default SidebarMenu