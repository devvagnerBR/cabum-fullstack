import React from 'react'
import { textLimit } from './../../util/text-limit';
import { useNavigate } from 'react-router-dom';
import { useProductsContext } from '../../context/products-context';
import { useUtilitiesContext } from '../../context/utilities-context';

const ModalSearch = () => {

    const {
        setSearchInput
    } = useUtilitiesContext()

    const {
        researchedProducts,
        getProductDetails,
    } = useProductsContext()

    const {

    } = useProductsContext()

    const navigate = useNavigate()

    const goToProductDetails = async ( product ) => {
        await getProductDetails( product.id )
        setSearchInput( '' )
        navigate( `/produto/${product.id}` );
    }


    return (
        <div
            className='absolute w-full z-40  mt-32  bg-white border'>

            {researchedProducts?.map( ( product ) => {
                return (
                    <div
                        onClick={() => goToProductDetails( product )}
                        key={product?.id}
                        className='flex w-full items-center gap-2 p-2 h-10 border-b cursor-pointer'>
                        <img src={product?.image_url} className='w-6' alt='M' />
                        <h2
                            className='text-sm'>{textLimit( product?.name,70 )}
                        </h2>
                    </div>
                )
            } )}
        </div>
    )
}

export default ModalSearch