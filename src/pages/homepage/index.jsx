import React from 'react'
import MainBanner from './main-banner'
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
import Footer from '../../components/footer'



const Homepage = () => {

    const [customProducts,setCustomProducts] = React.useState( [] )
    const { products,favoritesProductsId,productsInCartIds } = myContext()

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

    React.useEffect( () => {
        const productsMarketAsFavorite = products?.map( ( product ) => {
            return {
                ...product,
                favorite: favoritesProductsId.includes( product.id ),
                inCart: productsInCartIds.includes( product.id )
            }
        } )



        setCustomProducts( productsMarketAsFavorite );
    },[favoritesProductsId,productsInCartIds] )


    return (
        <div className='flex-col self-center relative  h-full flex overflow-hidden pb-[12rem]'>
            <MainBanner
                banners={banners} />
            <OnSale
                onSaleProducts={customProducts} />
            <MainBanner
                banners={smallBanners} />
            <Categories />
            <ProductsSection
                products={customProducts}
                title='ACABARAM DE  CHEGAR'
                Icon={Lightning}
            />
            <ProductsSection
                products={customProducts}
                title='MAIS PROCURADOS'
                Icon={Lightning}
            />
            <Footer/>
        </div>
    )
}

export default Homepage