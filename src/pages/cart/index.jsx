import React from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import CEPSection from './cep-section'
import SummarySection from './summary-section'
import ProductsInCartSection from './products-section'
import SummaryModal from './modal-summary'
import { myContext } from '../../hooks/useContext'
import DeliveryOptions from './delivery-options'
import { GO_TO_HOME,GO_TO_PAYMENT_METHOD } from '../../router/navigation'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer'

const Cart = () => {


    const navigate = useNavigate()
    const {
        productsInCart,
        getAddresses,
        addOrderInfos,
        addresses
    } = myContext()

    React.useEffect( () => {
        getAddresses();
    },[] )

    const [summaryModal,setSummaryModal] = React.useState( false )
    const hasProducts = productsInCart.length > 0

    const handleSetOrderProducts = async ( body ) => {
        await addOrderInfos( { products: body,address: addresses[0] } )
    }



    return (
        <div className={`flex flex-col items-center h-fit min-h-[calc(100vh-7rem)]  relative  justify-start  px-4      `}>
            {hasProducts ?
                <section
                    className='w-[1350px] py-4  max-[1350px]:w-full flex h-fit mb-60   max-[1150px]:flex-col  items-start gap-4'>

                    <section className='w-full'>
                        <CEPSection />
                        <ProductsInCartSection
                            products={productsInCart}
                            summaryModal={summaryModal}
                        />
                        <DeliveryOptions />
                        <section className={` min-[1150px]:hidden flex flex-col w-full items-center justify-center gap-2 mt-7 `}>
                            <button
                                onClick={() => {
                                    handleSetOrderProducts( productsInCart )
                                    GO_TO_PAYMENT_METHOD( navigate )
                                }}
                                className='bg-orange-500 h-12 w-full rounded-sm text-white font-semibold hover:bg-orange-400'>
                                IR PARA O PAGAMENTO
                            </button>
                            <button
                                onClick={() => GO_TO_HOME( navigate )}
                                className='border border-orange-500 h-12 w-full rounded-sm text-orange-500 font-semibold hover:bg-orange-50'>
                                CONTINUAR COMPRANDO
                            </button>
                        </section>
                    </section>

                    <SummarySection
                        products={productsInCart}
                    />
                    <SummaryModal
                        products={productsInCart}
                        summaryModal={summaryModal}
                        setSummaryModal={setSummaryModal}
                    />


                </section> :
                <section
                    className='flex flex-col items-center justify-start max-md:h-[calc(100vh-4rem)] pt-12   relative    '>
                    <h1 className='text-2xl font-bold'>O seu carrinho está vazio.</h1>
                    <h1 className='text-sm py-2'>Deseja olhar outros produtos similares?</h1>
                    <button
                        onClick={() => GO_TO_HOME( navigate )}
                        className='hover:bg-orange-400 transition-all text-lg  h-[3.125rem] max-md:mt-4 mt-4 flex items-center justify-center gap-2 rounded-sm text-white font-semibold bg-orange-500 w-full'>
                        <ShoppingCart
                            size={28}
                            weight='fill'
                            className='fill-white' />
                        CONTINUAR COMPRANDO
                    </button>
                </section>
            }
            <Footer />

        </div>
    )
}

export default Cart