import React from 'react'
import CardProduct from '../../../components/card-product'

import { Swiper,SwiperSlide } from 'swiper/react'
import { Navigation,Pagination,Scrollbar,A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css'
import { useUtilitiesContext } from '../../../context/utilities-context';


const ProductsSection = ( { products,Icon,title = 'PRODUTOS' } ) => {


    const {
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
        <section className='w-10/12 max-2xl:w-full flex-col  self-center flex items-center bg-white  '>
            <header className='flex  w-full gap-2  h-16 items-center justify-start px-4 flex-wrap max-[580px]:justify-center'>

                <  Icon size={18} weight='bold' className='fill-orange-500' />
                <h1 className='font-bold text-neutral-700 text-xl  max-[580px]:text-3xl'>{title}</h1>
            </header>
            <Swiper
                modules={[Navigation,Pagination,Scrollbar,A11y]}
                slidesPerView={slidersCalc()}
                navigation={size < 450}
                spaceBetween={5}
                className='w-full  gap-3 p-4 bg-white '>
                {products?.map( ( product ) => {
                    return (
                        <SwiperSlide
                            key={product.id} >
                            <CardProduct
                                product={product} />
                        </SwiperSlide>
                    )
                } )}
            </Swiper>

        </section>
    )
}

export default ProductsSection