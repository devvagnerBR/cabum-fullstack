import React from 'react'
import { useParams } from 'react-router-dom'
import { myContext } from '../../hooks/useContext'
import { ShoppingCart,WarningCircle } from '@phosphor-icons/react'


const ProductDetails = () => {

    const { id } = useParams()
    const { productDetails,getProductDetails } = myContext()
    const productPrice = productDetails?.price
    const specs = productDetails?.specs


    React.useEffect( () => {

        if ( productDetails.length === 0 ) {
            getProductDetails( id )
        }

    },[] )


    // const specs = [
    //     { title: 'Características',infos: ['Marca: Acer','Modelo: AN515-44-R629'] },
    //     { title: 'Especificações',infos: ['Processador AMD Ryzen R7-4800H–Octa Core','Tela de 15,6” IPS de 144HZ com resolução Full HD','Sistema Operacional Windows 11','GPU Nvidia GeForce GTX 1650 com 4 GB de memória dedicada GDDR6'] },
    //     { title: 'Sistema operacional',infos: ['Windows 11 Home 64-bits'] },
    //     { title: 'CPU',infos: ['AMD Ryzen 7-4800H','Octa core (16 threads)','Frequência: 2.9 Ghz até 4.2 GHz'] },
    // ]


    if ( productDetails )
        return (
            <div
                className={`flex flex-col items-start justify-start  pt-4 min-h-[700px] max-[1360px]:w-full  w-[1350px] max-xl:w-full m-auto`} >
                <div
                    className={`w-full max-xl:w-[100vw] flex flex-col items-center justify-center   `}>

                    <header
                        className='w-full text-start flex-wrap max-md:mt-2  mt-12 '>
                        <h1
                            className='font-bold text-2xl flex-wrap max-md:text-lg px-4'>{productDetails?.name}</h1>
                    </header>

                    <section
                        className='flex max-md:flex-col  items-center justify-start  w-full max-md:mt-2 mt-12 max-md:gap-2 gap-24 '>
                        <section
                            className='w-[25rem] max-md:w-[20rem]   flex  items-center justify-center'>
                            <img
                                className='w-[25rem] max-md:w-[20rem]' src={productDetails?.image_url} alt={productDetails?.name}
                            />
                        </section>

                        <section
                            className='w-full flex flex-col i flex-1  p-2  max-md:justify-center max-md:items-center   h-full '>
                            <h2
                                className='text-sm'>Vendido e entregue por: <span className='font-semibold'>KaBuM! </span>| <span className='text-green-600 font-semibold'> Em estoque</span> </h2>
                            <h2
                                className='pt-2 font-bold text-4xl text-orange-500'>{( productPrice - ( productPrice * 0.05 ) )?.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )}</h2>
                            <h2
                                className='text-sm pt-2'>À vista no PIX com até <span className='font-semibold'>5% OFF</span></h2>
                            <h2
                                className='text-sm pt-2 font-bold'>{productPrice?.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )}</h2>
                            <h2
                                className='text-sm'>Em até 10x de <span className='font-semibold'> {( productPrice / 10 )?.toLocaleString( 'pt-BR',{ style: 'currency',currency: 'BRL' } )} </span> sem juros no cartão</h2>
                            <h2
                                className='text-sm'>Ou em 1x no cartão com até  <span className='font-semibold'>5% OFF</span></h2>
                            <h3
                                className='underline cursor-pointer text-sm pt-2'>Ver mais opções de pagamento</h3>
                            <button
                                className='bg-orange-500 py-3 w-[20.5rem] hover:bg-orange-400 transition-all flex items-center justify-center gap-3 mt-6 rounded-sm text-white font-semibold tracking-wider'>
                                <ShoppingCart
                                    size={26}
                                    className='fill-white ' weight='fill' />
                                COMPRAR
                            </button>

                        </section>
                    </section>
                    <section className='flex flex-col gap-4  w-full pb-28 max-sm:mt-4 max-sm: mt-28 px-4'>
                        <h1 className='text-2xl font-bold mb-10 flex items-center gap-2'><WarningCircle weight='fill' className='fill-orange-500' /> INFORMAÇÕES TÉCNICAS</h1>
                        {specs?.map( ( itens,index ) => {
                            return (
                                <div key={index}>
                                    <h1 className='font-bold text-sm'>{itens.tittle}</h1>
                                    {itens.infos?.map( ( item,index ) => {
                                        return <p key={index} className='text-sm'>{item}</p>
                                    } )}
                                </div>
                            )
                        } )}

                    </section>

                    <div className='bg-blue-900  max-lg:flex-col flex items-center justify-center w-screen py-4 px-8 max-xl:px-2 max-lg:pb-6'>

                        <div className='max-[1360px]:w-full max-lg:flex-col   w-[1350px] flex items-center'>


                            <section className='flex flex-col w-48  max-lg:items-center max-lg:pb-2'>
                                <h1 className='text-white text-xl font-bold'>CaBuM! News</h1>
                                <h1 className='text-white text-xs'>Receba ofertas</h1>
                            </section>
                            <section className='grid grid-cols-3 max-lg:grid-cols-1 gap-4 max-lg:place-items-center py-4    w-full'>


                                <input
                                    className='py-3 rounded-sm max-lg:w-[95vw]  w-[100%] max-w-[28rem] max-lg:max-w-none  pl-2 border-2 focus:border-orange-500'
                                    type="text"
                                    placeholder='Qual o seu nome?'
                                />
                                <input
                                    className='py-3 rounded-sm max-lg:w-[95vw]  w-[100%] max-w-[28rem] max-lg:max-w-none pl-2 border focus:border-orange-500'
                                    type="email"
                                    placeholder='Qual o seu Email?'
                                />
                                <button
                                    className='bg-orange-500 py-3 h-full max-lg:h-12 max-lg:w-[95vw]   max-lg:w-[28rem] rounded-sm text-white font-bold tracking-wider hover:bg-orange-400 transition-all'>
                                    CADASTRAR
                                </button>

                            </section>
                        </div>
                    </div>
                </div>

            </div >
        )
}

export default ProductDetails