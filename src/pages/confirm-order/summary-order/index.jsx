import React from 'react'
import { FileSearch } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import convertToLocaleString from '../../../util/convert-to-locale-string'
import { myContext } from '../../../hooks/useContext'
import { GO_TO_MY_ACCOUNT } from '../../../router/navigation'
import usePaymentCheck from '../../../hooks/usePaymentCheck'
import { useUtilitiesContext } from '../../../context/utilities-context'
import { useOrdersContext } from '../../../context/orders-context'
import { useUserContext } from '../../../context/user-context'




const SummaryOrder = ( { products,isOrder,pre_order } ) => {

    const navigate = useNavigate()

    const {
        getAddresses,
        addresses
    } = useUserContext()
    
    const {
        saveNewOrder,
        addOrderInfos,
        preOrder,
    } = useOrdersContext()


    const {
        size,
        setModalCompletedPurchase
    } = useUtilitiesContext()



    const totalPrice = products?.reduce( ( total,product ) => total + ( product.price * product.quantity ),0 )

    const isOrderAndMobile = isOrder && size < 1150

    const handleAddPreOrderToCompletedOrder = async () => {
        await addOrderInfos( { address: addresses[0] } )
        await saveNewOrder( pre_order )
        setModalCompletedPurchase( true )
    }

    React.useEffect( () => {
        getAddresses()
    },[] )

    return (
        <div className={`w-[320px] shrink-0 flex flex-col items-start justify-start  border rounded-sm shadow-sm py-4 px-6  sticky top-4 ${isOrderAndMobile ? 'w-full' : 'max-[1150px]:hidden'}  `}>
            <header className='flex items-center gap-2'>
                <FileSearch weight='fill' size={22} className='fill-orange-500' />
                <h1 className='font-bold text-neutral-600 text-2xl'>RESUMO</h1>
            </header>
            <h3 className='text-xs border-b px-2 pt-8 pl-2  gap-2 w-full text-neutral-400 flex items-center justify-between'>Valor dos Produtos <span className='font-bold text-lg'>{convertToLocaleString( totalPrice )}</span> </h3>
            <h3 className='text-xs px-2 mt-2  gap-2 w-full pl-2  text-neutral-400 flex items-center justify-between'>Frete:<span className='font-bold text-lg'>R$ 0,00</span> </h3>
            <section className='flex flex-col bg-neutral-100/60 w-full mt-2 pb-2'>
                <h3 className='text-xs px-2 py-2 gap-2 w-full text-neutral-400 flex items-center justify-between'>Desconto: <span className='font-bold text-lg'>{convertToLocaleString( totalPrice * 0.05 )}</span> </h3>

            </section>
            <section className='bg-green-100 flex flex-col items-end w-full mt-8 p-2'>
                <h3
                    className='text-xs px-2  gap-1 w-full text-green-600 flex flex-col items-start justify-center'>
                    Forma de pagamento:
                    <span
                        className='text-green-700 font-semibold'>
                        {usePaymentCheck( preOrder?.paymentMethod )}
                    </span>
                </h3>
                <h1 className='mt-2 font-bold text-green-700 text-3xl'>{convertToLocaleString( totalPrice - ( totalPrice * 0.05 ) )}</h1>
            </section>

            <section className='flex flex-col w-full items-center justify-center gap-2 mt-7 '>
                <button
                    onClick={handleAddPreOrderToCompletedOrder}
                    className='bg-orange-500 h-12 w-full rounded-sm text-white font-semibold hover:bg-orange-400'>
                    FINALIZAR
                </button>
                <button
                    onClick={() => navigate( -1 )}
                    className='border border-orange-500 h-12 w-full rounded-sm text-orange-500 font-semibold hover:bg-orange-50'>
                    VOLTAR
                </button>
            </section>
        </div>
    )
}

export default SummaryOrder