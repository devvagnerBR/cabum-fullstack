import React from 'react'
import cabum_logo from '../../assets/images/cabum-logo.png'
import { UserCircle,Heart,ShoppingCart,List,CaretLeft } from '@phosphor-icons/react'
import { GO_TO_CART,GO_TO_FAVORITES,GO_TO_LOGIN,GO_TO_MY_ACCOUNT,GO_TO_SIGNUP } from '../../router/navigation'
import { useLocation,useNavigate } from 'react-router-dom'
import SidebarMenu from '../sidebar-menu'
import { GO_TO_HOME } from './../../router/navigation';
import { myContext } from '../../hooks/useContext'
import profile_img from '../../assets/images/profile_ninja.png'
import { getCookie } from '../../hooks/useCookie'
import ModalSearch from './../modal-search/index';

const Header = () => {

    const navigate = useNavigate()
    const token = getCookie( 'token' )
    const { pathname } = useLocation()
    const { searchInput,setSearchInput } = myContext()

    const { modalMenu,
        setModalMenu,
        user,
        userLogOut,
        productsInCart,
        getSearchProducts,
        researchedProducts,
        setResearchedProducts
    } = myContext()

    const isLoginAndSignUpPage = pathname === '/entrar' || pathname === '/cadastro'
    const displayName = getCookie( 'username' ) || user?.name

    const productsLength = productsInCart?.length



    React.useEffect( () => {

        const timer = setTimeout( () => {
            const findProducts = async () => {
                if ( searchInput ) {
                    await getSearchProducts( searchInput )
                } else {
                    setResearchedProducts( [] )
                }
            }
            findProducts()
        },500 )
        return () => clearTimeout( timer )
    },[searchInput] )





    return (
        <header
            className={`bg-blue-700 ${isLoginAndSignUpPage && 'border-b-4 border-orange-400'}  h-[7rem] max-md:h-[4rem] max-md:justify-around px-4 justify-center flex items-center relative max-xl:w-full  max-xl:justify-evenly     gap-4 md:gap-8 lg:px-8  max-md:px-4 flex-wrap  m-auto`}>
            <div className='flex  gap-4 items-center justify-start '>
                <h1 onClick={() => GO_TO_HOME( navigate )} className={` ${!isLoginAndSignUpPage && 'hidden'} flex md:hidden items-center text-white gap-2  cursor-pointer`}><CaretLeft className='fill-white' size={20} /> Voltar </h1>
                <List onClick={() => setModalMenu( !modalMenu )} size={40} weight='regular' className={` ${isLoginAndSignUpPage && 'invisible'} fill-neutral-300 cursor-pointer`} />
                <img onClick={() => GO_TO_HOME( navigate )} className='max-md:hidden cursor-pointer' width={170} src={cabum_logo} alt="cabum logo" />
            </div>

            <div
                onBlur={() => setSearchInput( '' )}
                className='w-[25%] relative flex-1 max-md:w-[60%] max-w-[50rem]'>
                <input
                    value={searchInput}
                    onChange={( e ) => setSearchInput( e.target.value )}
                    placeholder='Busque aqui'
                    className={`${isLoginAndSignUpPage && 'invisible'}  w-full bg-neutral-100 pl-4 h-[2.25rem]  text-neutral-600 border focus:border-orange-500 rounded-sm placeholder:text-sm`}
                    type="text"
                />
                {researchedProducts.length > 0 && searchInput && <ModalSearch />}
            </div>
            <div className='flex gap-8  '>

                {token ?
                    <div className='text-xs flex gap-2 items-center max-md:hidden'>
                        <section>
                            <img src={profile_img} className='w-9  border-2 border-blue-500/80 rounded-full' alt="" />
                        </section>
                        <section>
                            <h1
                                className='text-neutral-100'>
                                Olá,
                                <span
                                    className='capitalize pl-1 text-neutral-100 font-semibold'>
                                    {displayName}
                                </span>
                            </h1>
                            <span
                                onClick={() => GO_TO_MY_ACCOUNT( navigate )}
                                className=' text-neutral-100 cursor-pointer hover:underline'>MINHA CONTA</span>
                            <span
                                className='text-neutral-100'> |<span onClick={() => {
                                    userLogOut()
                                    GO_TO_HOME( navigate )
                                }} className='pl-1 text-neutral-50 hover:underline cursor-pointer'>SAIR</span> </span>
                        </section>
                    </div>
                    :
                    <div className='text-xs flex gap-2 items-center max-md:hidden'>
                        <section>
                            <UserCircle size={40} weight='fill' className=' fill-neutral-100' />
                        </section>
                        <section>
                            <h1 className='text-neutral-100'>Faça <span onClick={() => GO_TO_LOGIN( navigate )} className='uppercase text-neutral-100 font-semibold hover:underline cursor-pointer transition-all'>Login</span> ou</h1>
                            <h1 className='text-neutral-100'>crie seu <span onClick={() => GO_TO_SIGNUP( navigate )} className='text-neutral-100 font-semibold uppercase hover:underline cursor-pointer transition-all'>Cadastro</span></h1>
                        </section>
                    </div>}
                <div className={`${isLoginAndSignUpPage && 'invisible'} flex items-center gap-4 max-[360px]:hidden`}>
                    <Heart onClick={() => GO_TO_FAVORITES( navigate )} size={22} weight='fill' className=' fill-neutral-100 cursor-pointer' />
                    <div className='flex items-center justify-center'>
                        <ShoppingCart
                            onClick={() => GO_TO_CART( navigate )} size={22} weight='fill' className=' fill-neutral-100 cursor-pointer absolute'
                        />
                        <p className={` ${productsLength > 0 ? '' : 'invisible'} relative left-3 flex items-center justify-center bg-orange-500 bottom-2 text-xs text-white h-4 w-4 rounded-full font-semibold`}>{productsLength}</p>

                    </div>

                </div>
            </div>

            {modalMenu && <SidebarMenu />}
        </header >
    )
}

export default Header

//800px - 50rem