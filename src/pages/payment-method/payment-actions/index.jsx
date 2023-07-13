import React from 'react'

const PaymentActions = ( { tittle,onSubmit,onClick } ) => {


    return (
        <div className='flex gap-4 py-4 items-end justify-end max-sm:flex-col max-sm:items-center max-sm:w-full '>
            <button className='border border-orange-500 h-12 px-2 rounded-md text-orange-500 font-bold w-[18rem] max-sm:w-full hover:border-orange-400'>VOLTAR</button>
            <button
                type='submit'
                onSubmit={onSubmit}
                onClick={onClick}
                className='border bg-orange-500 h-12 px-2 rounded-md text-white font-bold w-[18rem] max-sm:w-full hover:bg-orange-400'>{tittle}</button>
        </div>
    )
}

export default PaymentActions