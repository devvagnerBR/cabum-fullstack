import React from 'react'
import { MapPin } from '@phosphor-icons/react'

const CEPSection = () => {




    return (
        <div className='flex flex-col items-start max-[550px]:items-center justify-start h-full w-full py-4 px-6  border rounded-sm shadow-sm'>

            <header className='flex items-center gap-2'>
                <MapPin weight='fill' size={16} className='fill-orange-500' />
                <h1 className='font-bold text-xl text-neutral-600'> SELECIONE O ENDEREÇO</h1>
            </header>

            <div className='pt-6 flex  max-[550px]:flex-col  gap-4 items-center w-full'>
                <form className='flex gap-3 max-[550px]:w-full '>
                    <input type="text" className='border  max-[550px]:w-[90%] h-12 pl-2' placeholder='_____-__' />
                    <button className='bg-orange-500 text-white h-12 px-4 rounded-md hover:bg-orange-400 transition-all font-bold'>OK</button>
                </form>
                <p className='text-xs cursor-pointer text-orange-500 font-semibold'>Não lembro meu CEP</p>
            </div>
            <section className='pt-4'>
                <p className='font-semibold text-xs text-neutral-400'>Entregar em: <span className='font-light text-neutral-400'> Jardim Campomar - Rio das Ostras / RJ</span> </p>
            </section>
        </div>
    )
}

export default CEPSection