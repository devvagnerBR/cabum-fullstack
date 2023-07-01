import React from 'react'
import Pix from './pix';
import CreditCard from './credit-card';
import Boleto from './boleto';


const PaymentDescription = ( { clickedMethod } ) => {



    let method = clickedMethod.id - 1 || 0
    const methods = [
        [< Pix key='pix' />],
        [<Boleto key='boleto' />],
        [<CreditCard key='creditCard' />],

    ]


    return (
        <div className='w-full'>
            {methods[method]}
        </div>
    )
}

export default PaymentDescription