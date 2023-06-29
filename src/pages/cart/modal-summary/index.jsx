import { CaretDown,CaretUp,FileSearch } from '@phosphor-icons/react'
import React from 'react'
import convertToLocaleString from '../../../util/convert-to-locale-string';

const SummaryModal = ( { setSummaryModal,summaryModal,products } ) => {


    const totalPrice = products?.reduce( ( total,product ) => total + ( product.price * product.quantity ),0 )
    
    return (
        <div className={`min-[1150px]:hidden w-full  flex flex-col   px-4 fixed bottom-0 left-0 h-fit bg-white shadow-lg items-start pt-4 transition-all pb-4 shadow-black ${summaryModal && ''}`}>
            <div
                onClick={() => setSummaryModal( !summaryModal )}
                className='absolute items-start  flex justify-center left-[47%] top-[-15px] bg-white h-8 w-8 rounded-full cursor-pointer'>
                {SummaryModal ? <CaretUp size={20} weight='bold' className='' /> : <FileSearch size={20} weight='bold' className='' />}
            </div>


            <header className='flex items-center w-full justify-between'>
                <div className='flex gap-2 items-center'>
                    <FileSearch weight='fill' size={18} className='fill-orange-500' />
                    <h1 className='font-bold text-sm'>RESUMO</h1>
                </div>
                <h1 className='text-xs font-bold'>VALOR DO PEDIDO: {convertToLocaleString(totalPrice)}</h1>
            </header>
            <div className={`flex max-[400px]:flex-col max-[400px]:items-center   w-full gap-4 ${!summaryModal && 'hidden'}`}>

                <section className='mt-10 flex flex-col w-2/4 max-[400px]:w-full items-center justify-start '>
                    <div className='flex w-full justify-between border-b pb-2'>
                        <h1 className='text-sm'>Valor do Produtos:</h1>
                        <h1 className='text-sm font-semibold'>{convertToLocaleString(totalPrice)}</h1>
                    </div>
                    <div className='flex w-full justify-between pt-2'>
                        <h1 className='text-sm'>Frete:</h1>
                        <h1 className='text-sm font-semibold'>R$ 0,00</h1>
                    </div>
                    <div className='flex w-full justify-between pt-2'>
                        <h1 className='text-sm'>Total à prazo:</h1>
                        <h1 className='text-sm font-semibold'>{convertToLocaleString(totalPrice)}</h1>
                    </div>
                    <p className='text-xs pt-2 w-full text-end max-[400px]:text-center max-[500px]:text-left'>({" "}em até <span className='font-semibold'>10x</span> de <span>{convertToLocaleString( totalPrice / 10 )}</span>)</p>
                </section>


                <section className='mt-10 max-[400px]:mt-0 flex flex-col bg-green-200 w-2/4 max-[400px]:p-2 max-[400px]:w-full items-center gap-1 justify-center'>
                    <h1 className='text-xs text-green-700'>Valor à vista no <span className='font-bold text-sm text-green-700'>Pix:</span></h1>
                    <h1 className='text-2xl text-green-700 font-semibold'>{convertToLocaleString( totalPrice - ( totalPrice * 0.05 ) )}</h1>
                    <p className='text-xs text-green-700  w-full text-center'>({" "}Economize: <span className='font-semibold text-green-700'>{convertToLocaleString( totalPrice * 0.05 )}</span> )</p>
                </section>

            </div>

        </div>
    )
}

export default SummaryModal