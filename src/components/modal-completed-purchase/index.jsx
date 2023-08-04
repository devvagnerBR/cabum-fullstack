import { CheckCircle } from '@phosphor-icons/react'
import React from 'react'
import useFreezeScreen from '../../hooks/useFreezeScreen'
import { Link,useNavigate } from 'react-router-dom'
import { GO_TO_HOME } from '../../router/navigation'
import { useUtilitiesContext } from '../../context/utilities-context'




const ModalCompletedPurchase = () => {

    const navigate = useNavigate()

    const {
        modalCompletedPurchase,
        setModalCompletedPurchase
    } = useUtilitiesContext()



    useFreezeScreen( modalCompletedPurchase )

    const handleCloseModal = () => {
        setModalCompletedPurchase( false )
        GO_TO_HOME( navigate )
    }

    const handleGoToUserOrders = () => {
        setModalCompletedPurchase( false )
        navigate( '/minha-conta/meus-pedidos' )
    }

    return (
        <div
            className={`${modalCompletedPurchase ? 'flex' : 'hidden'}  flex-col items-center z-10 justify-center  absolute top-0 w-full h-[calc(100vh-7rem)] max-md:h-[calc(100vh-4rem)] bg-neutral-700/70 `}>
            <section
                className='bg-white rounded-sm border-2 border-neutral-500 gap-2 flex-col max-w-[500px] max-sm:max-w-none w-[90%] h-fit p-8  max-sm:w-full max-sm:h-full max-sm:mt-0 transition-all  flex items-center justify-center max-sm:justify-start max-sm:pt-2'>
                <header
                    className='flex gap-2 items-start max-sm:pt-10'>
                    <CheckCircle
                        className='fill-green-500'
                        weight='fill'
                        size={24} />
                    <h1 className='font-bold text-xl text-center max-sm:text-base'>Obrigado por comprar na <Link to="/"> <span className='text-orange-500 capitalize underline'>CaBuM</span> </Link> </h1>
                </header>
                <nav className='pt-2 flex gap-2 max-sm:flex-col max-sm:w-full w-full'>
                    <button
                        onClick={handleGoToUserOrders}
                        className='bg-orange-500 px-4 py-4 text-white font-semibold w-full tracking-wider rounded-sm'>MEUS PEDIDOS</button>
                    <button
                        onClick={handleCloseModal}
                        className='border border-orange-500 px-4 py-4 text-orange-500 w-full font-semibold tracking-wider rounded-sm'>FECHAR</button>
                </nav>
            </section>
        </div>
    )
}

export default ModalCompletedPurchase