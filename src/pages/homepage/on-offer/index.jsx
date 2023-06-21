import React from 'react'
import { Star,Alarm,ShoppingCart } from '@phosphor-icons/react'
import { GlobalContext } from '../../../context'







const OnOffer = () => {

    const { textLimit } = React.useContext( GlobalContext )


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
        }
    ]




    return (
        <div

            className='w-10/12 max-2xl:w-full flex-col  self-center flex items-center bg-white mb-8  '>

            <header className='flex  w-full bg-orange-500 h-16 items-center justify-between px-4 flex-wrap max-[580px]:justify-center'>
                <div className='flex items-center gap-2'>
                    <Star className='fill-neutral-100 max-[580px]:hidden' weight='fill' size={20} />
                    <h1 className='font-semibold text-neutral-100 text-xl  max-[580px]:text-3xl'>OFERTAS NINJAS</h1>
                </div>
                <div className='flex items-center gap-2 max-[580px]:hidden'>
                    <h1 className='font-bold text-neutral-100 text-lg max-[580px]:text-sm'>TERMINA EM</h1>
                    <Alarm className='fill-neutral-100 ' weight='fill' size={26} />
                    <h1 className='font-bold tracking-wide text-neutral-100 text-2xl max-[580px]:text-sm'>02D 15 : 20 : 29</h1>
                </div>
            </header>

            <section
                className='w-full grid grid-cols-5  max-xl:grid-cols-4 place-items-center max-[950px]:grid-cols-3  max-md:grid-cols-2  max-[560px]:grid-cols-1 gap-3 p-4 bg-neutral-100 '>
                {products?.map( ( product ) => {
                    return (
                        <div key={product.id} className='h-fit flex items-center flex-col relative shadow-sm border bg-white max-[490px]:w-[80%] w-[1fr] p-2'>
                            <div className='border border-orange-500 rounded absolute left-2 top-2 w-12 h-10 flex items-center justify-center flex-col'>
                                <p className='text-[9px] text-orange-500 leading-3'>RESTAM</p>
                                <p className='text-[12px] text-orange-500 font-bold leading-3'>{product.quantity}</p>
                                <p className='text-[9px] text-orange-500 leading-3'>UNID.</p>
                            </div>
                            <img src={product.image_url} className='w-[9rem] mt-8' alt="" />
                            <div className=''>
                                <h1 className='text-sm  font-semibold flex flex-wrap w-11/12  h-[5rem] pl-2 leading-4 max-[560px]:w-[100%] max-[560px]:max-w-[300px]'>{textLimit( product.name,66 )}</h1>
                                <h2 className=' text-orange-500 font-bold text-2xl pl-2'>R$ 119,99</h2>
                                <h2 className='font-light text-xs pl-2'>À vista no PIX</h2>
                                <div className='flex items-center gap-2 justify-center bg-orange-500 p-3 rounded mt-8 cursor-pointer'>
                                    <ShoppingCart className='fill-neutral-50 ' weight='fill' size={20} />
                                    <p className='text-neutral-50 font-semibold text-sm'>COMPRAR</p>

                                </div>
                            </div>
                        </div>
                    )
                } )}
            </section>

        </div>
    )


}

export default OnOffer