import { Cube } from '@phosphor-icons/react'
import React from 'react'

const Categories = () => {


    const categories = [
        { id: 1,name: 'HARDWARE',image_url: 'https://images.kabum.com.br/produtos/fotos/320797/processador-amd-ryzen-7-5700x-cache-36mb-3-8ghz-4-6ghz-max-turbo-am4-100-100000926wof_1647636511_gg.jpg' },
        { id: 2,name: 'GAMES',image_url: 'https://images.kabum.com.br/produtos/fotos/238670/console-sony-playstation-5-edicao-digital_1634132110_gg.jpg' },
        { id: 3,name: 'PERIFÉRICOS',image_url: 'https://images.kabum.com.br/produtos/fotos/39393/39393_1528893662_index_gg.jpg' },
        { id: 4,name: 'PERIFÉRICOS',image_url: 'https://images.kabum.com.br/produtos/fotos/39393/39393_1528893662_index_gg.jpg' },
        { id: 5,name: 'COMPUTADORES',image_url: 'https://images.kabum.com.br/produtos/fotos/369923/notebook-asus-intel-core-i3-1005g1-4gb-ram-256gb-ssd-tela-15-6-endless-os-cinza-x515ja-br2750_1660313491_gg.jpg' },
        { id: 6,name: 'TV',image_url: 'https://images.kabum.com.br/produtos/fotos/154974/smart-tv-samsung-43-polegadas-uhd-4k-3-hdmi-1-usb-processador-crystal-4k-tela-sem-limites-alexa-controle-unico-un43au7700gxzd_1667248886_gg.jpg' },
        { id: 7,name: 'CELULAR & SMARTPHONE',image_url: 'https://images.kabum.com.br/produtos/fotos/324826/smartphone-samsung-galaxy-a23-4gb-ram-128gb-octa-core-camera-quadrupla-50mp-tela-infinita-6-6-azul-sm-a235mlbrzto_1648829309_gg.jpg' },
        { id: 8,name: 'CELULAR & SMARTPHONE',image_url: 'https://images.kabum.com.br/produtos/fotos/324826/smartphone-samsung-galaxy-a23-4gb-ram-128gb-octa-core-camera-quadrupla-50mp-tela-infinita-6-6-azul-sm-a235mlbrzto_1648829309_gg.jpg' },
    ]


    return (
        <div
            className='w-10/12 max-2xl:w-full flex-col  self-center flex items-center bg-white  '>
            <header className='w-full h-8 flex items-center gap-2 pl-4  max-[390px]:justify-center max-[390px]:mt-8 max-[390px]:pl-0'>
                <Cube size={24} className='fill-orange-500' />
                <h1 className='text-xl  font-semibold text-neutral-600'>DEPARTAMENTOS</h1>
            </header>
            {/* max-md:grid-cols-1 */}
            {/* max-[560px]:grid-cols-1 */}
            <section
                className='w-full grid grid-cols-4  max-lg:grid-cols-3  lg:px-32   gap-4 place-items-center  max-sm:w-[85vw] max-[390px]:grid-cols-2    p-2 bg-white '>

                {/* <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div>
                <div className='flex bg-orange-500 h-56 w-[310px]'></div> */}
                {categories?.map( ( category ) => {
                    return (
                        <div key={category.id} className='bg-white w-[16vw]  max-lg:w-[28vw]  h-fit flex p-2 flex-col items-center pb-4 rounded  cursor-pointer'>
                            <h1 className='pt-4 font-bold'>{category.name}</h1>
                            <img src={category.image_url} className='w-[8rem] pt-4' alt="" />
                        </div>
                    )
                } )}

            </section>
        </div>
    )
}

export default Categories

//max-xl === aumentar o tamanho do card