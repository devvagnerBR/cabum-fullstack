import React from 'react'
import convertToLocaleString from './../../../../util/convert-to-locale-string';
import PaymentActions from './../../payment-actions/index';
import { GO_TO_CONFIRM_ORDER } from '../../../../router/navigation';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../../../context/cart-context';
import { useOrdersContext } from '../../../../context/orders-context';

const Boleto = () => {

    const navigate = useNavigate()
    const {
        productsInCart,
    } = useCartContext()

    const {
        addOrderInfos
    } = useOrdersContext()


    const totalPrice = productsInCart?.reduce( ( total,product ) => total + ( product.price * product.quantity ),0 )

    const handleSetPaymentMethod = async () => {
        await addOrderInfos( { paymentMethod: '2' } )
        GO_TO_CONFIRM_ORDER( navigate )
    }

    return (
        <div className='flex flex-col  pb-24 max-md:pb-6'>
            <header>

                <h1 className='font-semibold'>Boleto Bancário</h1>
                <h3
                    className='text-sm flex-wrap pt-4'>Até <span className='font-semibold'>15% de desconto</span> Você poderá visualizar ou imprimir o boleto após a finalização do pedido.Mas fique de olho! Passada a data de vencimento, seu pedido perderá automaticamente a validade.
                </h3>
            </header>
            <section className='grid grid-cols-2 m-auto w-full mt-4 gap-4 max-md:flex-col max-md:flex mb-6'>
                <div className='bg-orange-100 w-full flex items-center justify-center p-6 flex-col gap-2 rounded-md'>
                    <h1 className='text-orange-500 font-semibold'>TOTAL DA SUA COMPRA:</h1>
                    <h1 className='font-bold text-3xl text-orange-500'>{convertToLocaleString( totalPrice )}</h1>
                </div>
                <div className='bg-green-100 w-full  flex items-center justify-center p-4 flex-col gap-1 rounded-md'>
                    <h1 className='text-green-600 font-semibold'>PAGAMENTO VIA PIX:</h1>
                    <h1 className='font-bold text-3xl text-green-600'>{convertToLocaleString( totalPrice - ( totalPrice * 0.05 ) )}</h1>
                    <h1 className='text-xs text-green-600 leading-3'>(Economize: {convertToLocaleString( totalPrice * 0.05 )} )</h1>
                </div>
            </section>

            <PaymentActions
                onClick={handleSetPaymentMethod}
                tittle='PAGAR COM BOLETO' />
        </div>
    )
}

export default Boleto