import React from 'react'
import { Money,Rocket,Article,CreditCard } from '@phosphor-icons/react'
import PaymentOption from './payment-option'

const methods = [
    { id: 1,name: 'PIX',icon: Money },
    { id: 2,name: 'BOLETO BANCÁRIO',icon: Article },
    { id: 3,name: 'CARTÃO DE CRÉDITO',icon: CreditCard },
]



const PaymentOptions = ( { setClickedMethod } ) => {



    return (
        <div className='flex flex-col w-[320px] max-sm:w-full gap-2'>
            {methods?.map( ( method ) => {
                return (
                    <PaymentOption
                        key={method.id}
                        method={method}
                        setClickedMethod={setClickedMethod}
                    />
                )
            } )}

        </div>
    )
}

export default PaymentOptions