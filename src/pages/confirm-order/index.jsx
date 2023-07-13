import React from 'react'
import CEPSection from '../cart/cep-section'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../hooks/useContext'
import Footer from '../../components/footer'
import SummaryModal from '../cart/modal-summary'
import SummarySection from '../cart/summary-section'
import ProductsInCartSection from '../cart/products-section'
import DeliveryOptions from '../cart/delivery-options'
import PersonalData from './personal-data'
import SummaryOrder from './summary-order'
import ProductsList from './products-list'


const ConfirmOrder = () => {

    const navigate = useNavigate()
    const { getProductsInCart,productsInCart } = myContext()
    const [summaryModal,setSummaryModal] = React.useState( false )

    return (
        <div className={`flex relative flex-col items-center h-fit min-h-[calc(100vh-7rem)]  max-md:min-h-[calc(100vh-4rem)]  justify-start  px-4      `}>
            <section
                className='w-[1350px] py-4  max-[1350px]:w-full flex h-fit mb-60   max-[1150px]:flex-col  items-start gap-4'>
                <section className='w-full gap-4 flex flex-col'>
                    <PersonalData />
                    <ProductsList />
                </section>
                <SummaryOrder products={productsInCart} />
            </section>
            <Footer />

        </div>
    )

}

export default ConfirmOrder