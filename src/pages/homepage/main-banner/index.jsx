import React from 'react'
import { Carousel } from 'antd';


const MainBanner = ( { banners } ) => {


    return (

        <div className='w-10/12 max-2xl:w-full self-center  h-auto'>
            <Carousel
                dots={false}
                autoplay>
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