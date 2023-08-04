import React from 'react'
import { Alarm } from '@phosphor-icons/react'
import CardProduct from '../../../components/card-product'

import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation,Pagination,Scrollbar,A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css'

import { useUtilitiesContext } from '../../../context/utilities-context';

const OnSale = ( { onSaleProducts } ) => {

    const {
        countdown,
        size
    } = useUtilitiesContext()


    const slidersCalc = () => {

        let calc = window.innerWidth

        if ( calc <= 450 ) return 1;
        if ( calc <= 600 ) return 2;
        if ( calc <= 880 ) return 3;
        if ( calc <= 1150 ) return 4;

        return 5;


    }

    return (
        <div

            className='w-10/12 max-2xl:w-full flex-col  self-center flex items-center bg-white  '>

            <header className='flex  w-full bg-orange-500 h-16 items-center justify-between px-4 flex-wrap max-[580px]:justify-center'>
                <div className='flex items-center gap-2'>

                    <h1 className='font-semibold text-neutral-100 text-xl  max-[580px]:text-3xl'>OFERTAS NINJAS</h1>
                </div>
                {countdown && <>

                    <div className='flex items-center gap-2 max-[580px]:hidden'>
                        <h1 className='font-bold text-neutral-100 text-lg max-[580px]:text-sm'>TERMINA EM</h1>
                        <Alarm className='fill-neutral-100 ' weight='fill' size={26} />
                        <h1 className='font-bold tracking-wide text-neutral-100 text-2xl max-[580px]:text-sm'> {countdown?.days}D {countdown?.hours}h : {countdown?.minutes} : {countdown?.seconds}</h1>
                    </div>
                </>
                }
            </header>

            <Swiper
                modules={[Navigation,Pagination,Scrollbar,A11y]}
                slidesPerView={slidersCalc()}
                navigation={size < 450}
                spaceBetween={5}
                className='w-full  gap-3 py-4 bg-white '>
                {onSaleProducts?.map( ( product ) => {

                    return (
                        <SwiperSlide
                            key={`on-sale-${product.id}`}>
                            <CardProduct
                                product={product}
                            />
                        </SwiperSlide>
                    )
                } )}

            </Swiper>
        </div>
    )


}

export default OnSale