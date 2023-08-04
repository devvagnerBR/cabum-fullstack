import React from 'react'
import { Wallet } from '@phosphor-icons/react'
import PaymentOptions from './payment-options'
import PaymentDescription from './payment-description'
import ModalProject from '../../components/modal-project'
import ConfirmOrder from '../confirm-order'



const PaymentMethod = () => {


    const [clickedMethod,setClickedMethod] = React.useState( '' )
    

    return (
        <div
            className='flex  flex-col w-full   items-center justify-start  relative  p-4 '>
            <section
                className='w-[85vw] max-xl:w-[95vw] max-w-[1350px] border  p-4'>

                <header className='flex items-center justify-start gap-2'
                >
                    <Wallet size={26} weight='fill' className='fill-orange-500' />
                    <h1 className='font-bold text-xl'
                    >FORMA DE PAGAMENTO</h1>
                </header>
                <section
                    className='flex gap-10 pt-10 max-[950px]:flex-col '>
                    <PaymentOptions
                        setClickedMethod={setClickedMethod}
                    />
                    <PaymentDescription
                        clickedMethod={clickedMethod}
                    />
                </section>
            </section>
            <ModalProject />
        </div>
    )
}

export default PaymentMethod