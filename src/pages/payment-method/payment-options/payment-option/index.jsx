import React from 'react'

const PaymentOption = ( { method,setClickedMethod } ) => {





    return (
        <div
            onClick={() => setClickedMethod( method )}>
            <div className='flex items-center p-3 border rounded-sm border-orange-500 gap-2 cursor-pointer  hover:border-orange-400'>
                <method.icon
                    size={26}
                    weight='fill'
                    className='fill-orange-500'
                />
                <h1
                    className='font-bold text-lg text-orange-500'>
                    {method.name}
                </h1>
            </div>
        </div>
    )
}

export default PaymentOption