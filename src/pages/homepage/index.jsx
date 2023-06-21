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

const Homepage = () => {

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

    const products = [
        {
            id: 1,
            name: 'Mouse Gamer HyperX Pulsefire FPS PRO RGB, 16000DPI',
            image_url: 'https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_gg.jpg',
            quantity: 10
        },
        {
            id: 2,
            name: 'Cadeira Gamer Husky Gaming Tempest 700, Cinza Claro, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável',
            image_url: 'https://images.kabum.com.br/produtos/fotos/134178/cadeira-gamer-tempest-husky-gaming-light-grey-700_1621889965_gg.jpg',
            quantity: 27
        },
        {
            id: 3,
            name: 'Notebook Gamer Acer Nitro 5 AMD Ryzen 7-4800H, 8GB RAM, SSD 256GB, GeForce GTX 1650, HDD 1TB, 15.6 Full HD, Windows 11, Preto',
            image_url: 'https://images.kabum.com.br/produtos/fotos/339504/notebook-gamer-acer-nitro-5-amd-ryzen-7-4800h-geforce-gtx-1650-8gb-ram-ssd-256gb-hdd-1tb-15-6-fhd-ips-144hz-windows-11-an515-44-r629_1652732334_gg.jpg',
            quantity: 12
        },
        {
            id: 4,
            name: 'Mouse Gamer HyperX Pulsefire Surge RGB 16000 DPI',
            image_url: 'https://images.kabum.com.br/produtos/fotos/95566/95566_1522950995_index_gg.jpg',
            quantity: 90
        },
        {
            id: 5,
            name: 'Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo',
            image_url: 'https://images.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_gg.jpg',
            quantity: 550
        },
        {
            id: 6,
            name: 'Notebook Gamer Acer Nitro 5 AMD Ryzen 7-4800H, 8GB RAM, SSD 256GB, GeForce GTX 1650, HDD 1TB, 15.6 Full HD, Windows 11, Preto',
            image_url: 'https://images.kabum.com.br/produtos/fotos/339504/notebook-gamer-acer-nitro-5-amd-ryzen-7-4800h-geforce-gtx-1650-8gb-ram-ssd-256gb-hdd-1tb-15-6-fhd-ips-144hz-windows-11-an515-44-r629_1652732334_gg.jpg',
            quantity: 12
        },
        {
            id: 7,
            name: 'Mouse Gamer HyperX Pulsefire Surge RGB 16000 DPI',
            image_url: 'https://images.kabum.com.br/produtos/fotos/95566/95566_1522950995_index_gg.jpg',
            quantity: 90
        },
        {
            id: 8,
            name: 'Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo',
            image_url: 'https://images.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_gg.jpg',
            quantity: 550
        }
    ]


    // banner title| array  de banners |  
    return (
        <div className='flex-col self-center h-full flex overflow-hidden'>
            <MainBanner
                banners={banners} />
            <OnOffer />
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