import React from 'react'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../hooks/useContext'
import Footer from '../../components/footer'
import PersonalData from './personal-data'
import SummaryOrder from './summary-order'
import ProductsList from './products-list'


const ConfirmOrder = () => {


    const { productsInCart,
        user,
        getPreOrder,
        preOrder,
        addresses,
        getAddresses
    } = myContext();

    React.useEffect( () => {
        getPreOrder();
        getAddresses();
    },[] )

    const addressInfos = addresses[0]
    const products = preOrder?.products

    return (
        <div className={`flex relative flex-col items-center h-fit min-h-[calc(100vh-7rem)]  max-md:min-h-[calc(100vh-4rem)]  justify-start  px-4      `}>
            <section
                className='w-[1350px] py-4  max-[1350px]:w-full flex h-fit mb-60   max-[1150px]:flex-col  items-start gap-4'>
                <section className='w-full gap-4 flex flex-col'>
                    <PersonalData
                        user={user}
                        addressInfos={addressInfos} />
                    <ProductsList products={products} />
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