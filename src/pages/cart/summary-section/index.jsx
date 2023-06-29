import { FileSearch } from '@phosphor-icons/react'
import React from 'react'
import { myContext } from '../../../hooks/useContext'
import convertToLocaleString from '../../../util/convert-to-locale-string'
import { GO_TO_FAVORITES, GO_TO_HOME } from '../../../router/navigation'
import { useNavigate } from 'react-router-dom'

const SummarySection = ( { products } ) => {

    const navigate = useNavigate()

    const totalPrice = products?.reduce( ( total,product ) => total + ( product.price * product.quantity ),0 )
    return (
        <div className='w-[320px] shrink-0 flex flex-col items-start justify-start  border rounded-sm shadow-sm py-4 px-6  sticky top-4 max-[1150px]:hidden '>
            <header className='flex items-center gap-2'>
                <FileSearch weight='fill' size={16} className='fill-orange-500' />
                <h1 className='font-bold text-neutral-600 text-lg'>RESUMO</h1>
            </header>


            <h3 className='text-xs border-b px-2 pt-8 pl-2  gap-2 w-full text-neutral-400 flex items-center justify-between'>Valor dos Produtos <span className='font-bold text-lg'>{convertToLocaleString( totalPrice )}</span> </h3>
            <h3 className='text-xs px-2 mt-2  gap-2 w-full pl-2  text-neutral-400 flex items-center justify-between'>Frete:<span className='font-bold text-lg'>R$ 0,00</span> </h3>

            <section className='flex flex-col bg-neutral-100/60 w-full mt-2 pb-2'>
                <h3 className='text-xs px-2 py-2 gap-2 w-full text-neutral-400 flex items-center justify-between'>Total à prazo <span className='font-bold text-lg'>{convertToLocaleString( totalPrice )}</span> </h3>
                <h3
                    className='text-xs mt-2 gap-2 w-full text-neutral-400 flex items-center justify-center'>
                    em até
                    <span
                        className='text-neutral-400 font-semibold'>
                        10x
                    </span>
                    de
                    <span
                        className='text-neutral-400 font-semibold'>
                        {convertToLocaleString( totalPrice / 10 )} sem juros
                    </span>
                </h3>
            </section>

            <section className='bg-green-100 flex flex-col items-center w-full mt-8 p-4'>
                <h3
                    className='text-xs px-2  gap-1 w-full text-green-600 flex items-center justify-center'>
                    Valor à vista no
                    <span
                        className='text-green-700 font-semibold'>
                        Pix:
                    </span>
                </h3>

                <h1 className='mt-2 font-bold text-green-700 text-3xl'>{convertToLocaleString( totalPrice - ( totalPrice * 0.05 ) )}</h1>
                <h1 className='mt-2 text-green-600 text-sm'>Economize: <span className='font-semibold text-green-700'>{convertToLocaleString( totalPrice * 0.05 )}</span></h1>
            </section>

            <section className='flex flex-col w-full items-center justify-center gap-2 mt-7 '>
                <button className='bg-orange-500 h-12 w-full rounded-sm text-white font-semibold hover:bg-orange-400'>IR PARA O PAGAMENTO</button>
                <button onClick={() => GO_TO_HOME( navigate )} className='border border-orange-500 h-12 w-full rounded-sm text-orange-500 font-semibold hover:bg-orange-50'>CONTINUAR COMPRANDO</button>
            </section>
        </div>
    )
}

export default SummarySection