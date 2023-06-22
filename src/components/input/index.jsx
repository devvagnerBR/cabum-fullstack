import React from 'react'
import { Warning } from '@phosphor-icons/react'

const Input = () => {

    return (
        <label className='flex flex-col pt-4 w-[23rem] max-[500px]:w-[90vw] text-orange-500' htmlFor="">
            Email
            <input
                type='email'
                className='border focus:border-orange-400  pl-2 w-full mt-2 h-[3.125rem] border-neutral-400 rounded-sm'
                placeholder='placeholder'
            />
            <p className='mt-2 flex items-center gap-2 text-red-500'>
                <Warning size={16} className='fill-red-500' weight='fill' />
                Mensagem de erro</p>
        </label>
    )
}

export default Input