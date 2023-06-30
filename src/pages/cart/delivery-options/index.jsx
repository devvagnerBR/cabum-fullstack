import React from 'react'

import { Truck } from '@phosphor-icons/react'
import convertToLocaleString from './../../../util/convert-to-locale-string';

const delivery = [
    { id: 1,name: 'GLF',time: '5',price: 'Grátis' },
    { id: 2,name: 'Correios PAG',time: '8',price: 27.81 },
    { id: 3,name: 'Sedex',time: '6',price: 46.22 },
    { id: 4,name: 'Movvi',time: '7',price: 51.12 },
    { id: 5,name: 'Azul',time: '7',price: 65.67 },
]

const DeliveryOptions = () => {



    return (
        <div className='w-full border p-4 '>
            <header className='flex items-center gap-2'>
                <Truck size={22} weight='fill' className='fill-orange-500' />
                <h1 className='font-semibold'>FRETE:</h1>
            </header>

            <section className='flex flex-col gap-2'>
                <h1 className='text-xs font-semibold pt-6'>Para receber no seu endereço:</h1>


                {delivery?.map( ( option ) => {
                    return (
                        <div key={option.id} className='flex  items-center justify-between'>

                            <div className='flex items-center gap-2'>
                                <input
                                    id={option.name}
                                    type='radio'
                                    value={option.name} />
                                <label
                                    htmlFor={option.name}
                                    className='font-semibold text-xs'>
                                    {option.name}{" "}
                                    <span className='font-normal'>
                                        - Até {option.time} dias úteis
                                    </span>
                                </label>
                            </div>

                            <div>
                                <p className='text-xs font-semibold'>{convertToLocaleString( option.price )}</p>
                            </div>
                        </div>
                    )
                } )}



            </section>
        </div>
    )
}

export default DeliveryOptions