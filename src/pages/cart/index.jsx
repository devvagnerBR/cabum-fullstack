import React from 'react'
import { ShoppingCart } from '@phosphor-icons/react'
import CEPSection from './cep-section'
import SummarySection from './summary-section'
import ProductsInCartSection from './products-section'
import SummaryModal from './modal-summary'
import { myContext } from '../../hooks/useContext'
import DeliveryOptions from './delivery-options'
import { GO_TO_HOME } from '../../router/navigation'
import { useNavigate } from 'react-router-dom'

const Cart = () => {


    const navigate = useNavigate()
    const { getProductsInCart,productsInCart } = myContext()

    const [summaryModal,setSummaryModal] = React.useState( false )
    const hasProducts = productsInCart.length > 0

 

    return (
        <div className={`flex flex-col items-center    ${hasProducts ? 'justify-start' : 'justify-center'}   px-4    `}>
            {hasProducts ?
                <section
                    className='w-[1350px] py-4  max-[1350px]:w-full flex h-fit  max-[1150px]:flex-col  items-start gap-4'>

                    <section className='w-full'>
                        <CEPSection />
                        <ProductsInCartSection
                            products={productsInCart}
                            summaryModal={summaryModal}
                        />
                        <DeliveryOptions />
                    </section>

                    <SummarySection
                        products={productsInCart}
                    />
                    <SummaryModal
                        products={productsInCart}
                        summaryModal={summaryModal}
                        setSummaryModal={setSummaryModal}
                    />
                    <div>

                    </div>

                </section> :
                <section
                    className='flex flex-col items-center justify-center min-h-[700px] h-[calc(100vh-288px)] max-md:h-[calc(100vh-240px)] '>
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
        </div>
    )
}

export default Cart