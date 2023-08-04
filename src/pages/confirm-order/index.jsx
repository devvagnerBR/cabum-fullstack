import React from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../hooks/useContext'
import Footer from '../../components/footer'
import PersonalData from './personal-data'
import SummaryOrder from './summary-order'
import ProductsList from './products-list'
import ModalCompletedPurchase from '../../components/modal-completed-purchase'
import { useUserContext } from '../../context/user-context'
import { useOrdersContext } from '../../context/orders-context'
import { useCartContext } from '../../context/cart-context'



const ConfirmOrder = () => {

    const navigate = useNavigate()

    const {
        user,
        addresses,
        getAddresses
    } = useUserContext()

    const {
        getPreOrder,
        preOrder,
    } = useOrdersContext()

    const {
        productsInCart
    } = useCartContext()

    React.useEffect( () => {
        getPreOrder();
        getAddresses();
    },[] )

    const addressInfos = addresses[0]
    const products = preOrder?.products



    return (
        <div className={`flex relative flex-col items-center h-fit min-h-[calc(100vh-7rem)]  max-md:min-h-[calc(100vh-4rem)]  justify-start  px-4`}>

            <ModalCompletedPurchase />
            <section
                className='w-[1350px] py-4  max-[1350px]:w-full flex h-fit mb-60   max-[1150px]:flex-col  items-start gap-4'>
                <section className='w-full gap-4 flex flex-col'>
                    <PersonalData
                        user={user}
                        addressInfos={addressInfos}
                    />
                    <ProductsList
                        products={products}
                    />
                </section>
                <SummaryOrder
                    isOrder
                    products={productsInCart}
                    pre_order={preOrder}
                />
            </section>
            <Footer />

        </div>
    )

}

export default ConfirmOrder