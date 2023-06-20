import React from 'react'
import { Carousel } from 'antd';
import banner1 from '../../../assets/banners/banner_1.webp'
import banner2 from '../../../assets/banners/banner_2.webp'
import banner3 from '../../../assets/banners/banner_3.webp'
import banner4 from '../../../assets/banners/banner_4.webp'
import banner5 from '../../../assets/banners/banner_5.webp'



const MainBanner = () => {

    const banners = [
        { id: 1,image: banner1 },
        { id: 2,image: banner2 },
        { id: 3,image: banner3 },
        { id: 4,image: banner4 },
        { id: 5,image: banner5 },
    ]


    return (

        <div className='w-10/12 max-2xl:w-full self-center  h-auto'>
            <Carousel
                dots={false}
                autoplay
            >
                {banners.map( ( banner ) => {
                    return (
                        <div className='cursor-pointer' key={banner.id}>
                            <img className=' max-[600px]:h-[160px] w-full' src={banner.image} alt="banner rotator" />
                        </div> )
                } )}
            </Carousel>
        </div>
    )
}

export default MainBanner