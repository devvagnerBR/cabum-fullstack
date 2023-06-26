import React from 'react'
import MainBanner from './main-banner'
import OnOffer from './on-sale'
import Categories from './categories'
import { Lightning } from '@phosphor-icons/react'

import banner1 from '../../assets/banners/banner_1.webp'
import banner2 from '../../assets/banners/banner_2.webp'
import banner3 from '../../assets/banners/banner_3.webp'
import banner4 from '../../assets/banners/banner_4.webp'
import banner5 from '../../assets/banners/banner_5.webp'

import small_banner1 from '../../assets/banners/banner_small_1.webp'
import small_banner2 from '../../assets/banners/banner_small_2.webp'
import small_banner3 from '../../assets/banners/banner_small_3.webp'
import ProductsSection from './products-section'
import { myContext } from '../../hooks/useContext'
import OnSale from './on-sale'


const Homepage = () => {


    const { products } = myContext()

    const banners = [
        { id: 1,image: banner1 },
        { id: 2,image: banner2 },
        { id: 3,image: banner3 },
        { id: 4,image: banner4 },
        { id: 5,image: banner5 },
    ]

    const smallBanners = [
        { id: 1,image: small_banner1 },
        { id: 2,image: small_banner2 },
        { id: 3,image: small_banner3 },
    ]

    return (
        <div className='flex-col self-center h-full flex overflow-hidden'>
            <MainBanner
                banners={banners} />
            <OnSale
                onSaleProducts={products} />
            <MainBanner
                banners={smallBanners} />
            <Categories />
            <ProductsSection
                products={products}
                title='ACABARAM DE  CHEGAR'
                Icon={Lightning}
            />
            <ProductsSection
                products={products}
                title='MAIS PROCURADOS'
                Icon={Lightning}
            />
        </div>
    )
}

export default Homepage