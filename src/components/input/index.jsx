import React from 'react'
import { Warning } from '@phosphor-icons/react'


const Input = ( { name,type,label,register,error,placeholder } ) => {



    return (
        <label className='flex flex-col pt-4 w-[23rem] max-[500px]:w-[90vw] text-orange-500' htmlFor="">
            {label}
            <input
                type={type}
                className='border focus:border-orange-400  pl-2 w-full mt-3 h-[3.125rem] border-neutral-400 rounded-sm'
                placeholder={placeholder}
                {...register( name )}
            />
            <p
                className={`mt-2  leading-3 ${error ? '' : 'invisible'} text-sm flex items-center gap-2 text-red-500`}>
                <Warning size={16} className='fill-red-500' weight='fill' />
                {error}
            </p>
        </label>
    )
}

export default Input