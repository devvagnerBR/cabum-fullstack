import React from 'react'
import { House,UserFocus,Basket,Heart } from '@phosphor-icons/react'
import { NavLink,Route,Routes } from 'react-router-dom'
import Home from './../home/index';
import Infos from './../infos/index';
import Orders from './../orders/index';

const SideBarProfile = () => {


    const [isHovered,setIsHovered] = React.useState( false );
    const handleMouseEnter = () => {
        setIsHovered( true );
    };

    const handleMouseLeave = () => {
        setIsHovered( false );
    };




    return (
        <div className='w-screen h-[calc(100vh-7rem)]   max-md:h-[calc(100vh-4rem)] flex'>

            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='flex flex-col w-16 hover:w-72 max-[450px]:hidden  shrink-0 z-10 bg-white shadow-sm shadow-neutral-600/60 relative'>

                <NavLink

                    to="" end
                    className='flex h-12 hover:bg-orange-50  items-center justify-start cursor-pointer '>

                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <House size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>


                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500'}`}>Início</h1>
                    </div>

                </NavLink>


                <NavLink
                    to="meus-dados"
                    className='flex h-14 hover:bg-orange-50  items-center justify-start cursor-pointer '>
                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <UserFocus size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>
                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500'}`}>Meus dados</h1>
                    </div>
                </NavLink>



                <NavLink
                    to="meus-pedidos"
                    className='flex h-14 hover:bg-orange-50  items-center justify-start cursor-pointer '>
                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <Basket size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>


                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500'}`}>Meus pedidos</h1>
                    </div>

                </NavLink>



                <NavLink
                    to="/favoritos"
                    className='flex h-14 hover:bg-orange-50  items-center justify-start cursor-pointer '>

                    <div
                        className={`justify-center  w-16 flex items-center`}>
                        <Heart size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 ' />
                    </div>


                    <div className='flex items-center'>
                        <h1 className={`${isHovered ? '' : 'hidden text-neutral-500'}`}>Favoritos</h1>
                    </div>

                </NavLink>




                {/* <NavLink to="meus-dados" className='hover:bg-red-100/40 w-full h-14 justify-center  fl cursor-pointer flex items-center'>
                    <UserFocus size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 transition-all' />
                </NavLink>
                <NavLink to="meus-pedidos" className='hover:bg-red-100/40 w-full h-14 justify-center  cursor-pointer flex items-center'>
                    <Basket size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 transition-all' />
                </NavLink>
                <NavLink to="/favoritos" className='hover:bg-red-100/40 w-full h-14 justify-center cursor-pointer  flex items-center'>
                    <Heart size={30} weight='fill' className='fill-orange-500  hover:fill-orange-600 transition-all' />
                </NavLink> */}
            </div >

            <main className='flex flex-wrap absolute bg-orange-300 pl-20 w-full p-2'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='meus-dados' element={<Infos />} />
                    <Route path='meus-pedidos' element={<Orders />} />
                </Routes>
            </main>

        </div >
    )
}

export default SideBarProfile
