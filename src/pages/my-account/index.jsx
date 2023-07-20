import React from 'react'
import { House,UserFocus,Basket,Heart } from '@phosphor-icons/react'
import { NavLink,Route,Routes } from 'react-router-dom'
import Home from './home';
import Infos from './infos';
import Orders from './orders';
import CustomModal from '../../components/custom-modal';
import NewAddressModal from './infos/addresses/new-address-modal';
import { myContext } from '../../hooks/useContext';


const MyAccount = () => {


    const { modalNewAddress,setModalNewAddress } = myContext()
    const [isHovered,setIsHovered] = React.useState( false );

    const handleMouseEnter = () => {
        setIsHovered( true );
    };

    const handleMouseLeave = () => {
        setIsHovered( false );
    };



    return (
        <div className='w-screen relative min-h-[calc(100vh-7rem)] max-md:h-[calc(100vh-4rem)] flex'>
            {modalNewAddress && < CustomModal>
                <NewAddressModal setModalNewAddress={setModalNewAddress} />
            </CustomModal>}
            <aside
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${isHovered ? 'w-72' : ''} flex flex-col w-16  max-md:hidden shrink-0 z-10 bg-white shadow-sm shadow-neutral-600/60 relative`}>

                <NavLink
                    to="" end
                    className='flex h-12 hover:bg-orange-50  g items-center justify-start cursor-pointer '>
                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <House
                            size={30}
                            weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>
                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500 transition-all'}`}>Início</h1>
                    </div>
                </NavLink>
                <NavLink
                    to="meus-dados"
                    className='flex h-14 hover:bg-orange-50  items-center justify-start cursor-pointer '>
                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <UserFocus
                            size={30}
                            weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>
                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? 'flex' : 'hidden text-neutral-500 transition-all'}`}>Meus dados</h1>
                    </div>
                </NavLink>



                <NavLink
                    to="meus-pedidos"
                    className='flex h-14 hover:bg-orange-50  items-center justify-start cursor-pointer '>
                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <Basket
                            size={30}
                            weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>


                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500 transition-all'}`}>Meus pedidos</h1>
                    </div>

                </NavLink>



                <NavLink
                    to="/favoritos"
                    className='flex h-14 hover:bg-orange-50  items-center justify-start cursor-pointer '>

                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <Heart
                            size={30}
                            weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>


                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500 transition-all'}`}>Favoritos</h1>
                    </div>
                </NavLink>
            </aside >

            <main className='flex   max-md:pl-4 pl-[5rem] w-full shrink-0 absolute justify-center  p-4'>
                <section className='max-w-[1400px] w-full'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='meus-dados' element={<Infos />} />
                        <Route path='meus-pedidos' element={<Orders />} />
                    </Routes>
                </section>
            </main>

        </div >
    )
}

export default MyAccount
