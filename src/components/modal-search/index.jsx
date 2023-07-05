import React from 'react'
import { textLimit } from './../../util/text-limit';
import { myContext } from './../../hooks/useContext';




const ModalSearch = () => {


    const { products,getSearchProducts,researchedProducts } = myContext()


    return (
        <div className='absolute w-full  z-50 bg-white border'>

            {researchedProducts?.map( ( product ) => {
                return (
                    <div key={product.id} className='flex w-full items-center gap-2 p-2 h-10 border-b cursor-pointer'>
                        <img src={product.image_url} className='w-6' alt='M' />
                        <h2 className='text-sm'>{textLimit( product.name,70 )}</h2>
                    </div>
                )
            } )}
        </div>
    )
}

export default ModalSearch