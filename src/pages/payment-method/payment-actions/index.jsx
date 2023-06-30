import React from 'react'

const PaymentActions = () => {
    return (
        <div className='w-[85vw] flex gap-4 max-w-[1350px] py-4 items-end justify-end'>
            <button className='border border-orange-500 h-12 px-2 rounded-sm text-orange-500 font-bold w-[18rem] hover:border-orange-400'>VOLTAR</button>
            <button className='border bg-orange-500 h-12 px-2 rounded-sm text-white font-bold w-[18rem] hover:bg-orange-400'>CONTINUAR</button>
        </div>
    )
}

export default PaymentActions