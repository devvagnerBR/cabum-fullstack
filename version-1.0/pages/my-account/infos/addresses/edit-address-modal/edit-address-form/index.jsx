import React from 'react'
import { myContext } from '../../../../../../hooks/useContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const EditAddressForm = () => {

    const {
        formNewAddressValidate,
        getCEP,
        fullAddress,
        setModalEditAddress,
        editableAddress,
        updateAddress
    } = myContext()

    const { watch,handleSubmit,register,formState: { errors } } = useForm( { resolver: zodResolver( formNewAddressValidate ) } )

    const handleSaveUpdatedAddress = async ( data ) => {

        const body = {
            id: editableAddress.id,
            cep: data.cep || editableAddress.cep,
            identification: data.identification || editableAddress.identification,
            street: fullAddress.street || editableAddress.street || data.street,
            number: data.number,
            complement: data.complement,
            neighborhood: editableAddress.neighborhood || fullAddress.neighborhood,
            city: fullAddress.city || editableAddress.city,
            uf: fullAddress.uf || editableAddress.uf
        }


        await updateAddress( body )
        setModalEditAddress( false )
    }




    return (
        <form
            onSubmit={handleSubmit( handleSaveUpdatedAddress )}
            className='pt-4 flex flex-col gap-2'>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="cep">
                CEP*
                <input
                    {...register( 'cep' )}
                    defaultValue={editableAddress?.cep ?? ''}
                    onBlur={() => getCEP( watch( 'cep' ) )}
                    id='cep'
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.cep && errors.cep.message}</p>
            </label>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="identification">
                Identificação*
                <input
                    id='identification'
                    {...register( 'identification' )}
                    defaultValue={editableAddress?.identification ?? ''}
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.identification && errors.identification.message}</p>
            </label>


            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="street">
                Logradouro*
                <input
                    disabled={fullAddress.street || editableAddress?.street}
                    id='street'
                    readOnly
                    value={fullAddress?.street || editableAddress?.street}
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.street && errors.street.message}</p>
            </label>
            <div className='flex max-sm:flex-col  gap-4'>

                <label className='flex flex-col w-full  text-sm text-neutral-500 ' htmlFor="number">
                    Número*
                    <input
                        id='number'
                        {...register( 'number' )}
                        defaultValue={editableAddress?.number ?? ''}
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                    />
                    <p className='text-red-500 text-xs'>{errors.number && errors.number.message}</p>
                </label>
                <label className='flex flex-col w-full  text-sm text-neutral-500 ' htmlFor="complement">
                    Complemento*
                    <input
                        {...register( 'complement' )}
                        defaultValue={editableAddress?.complement ?? ''}
                        id='complement'
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                    />
                    <p className='text-red-500 text-xs'>{errors.complement && errors.complement.message}</p>
                </label>

            </div>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="neighborhood">
                Bairro*
                <input
                    disabled={fullAddress.neighborhood || editableAddress?.neighborhood}
                    value={fullAddress?.neighborhood || editableAddress?.neighborhood}
                    readOnly
                    id='neighborhood'
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.neighborhood && errors.neighborhood.message}</p>
            </label>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="city">
                Cidade*
                <input
                    value={fullAddress?.city || editableAddress?.city}
                    disabled={fullAddress?.city || editableAddress?.city}
                    id='city'
                    readOnly
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.city && errors.city.message}</p>
            </label>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="uf">
                UF*
                <input
                    disabled={fullAddress.uf || editableAddress?.uf}
                    value={fullAddress.uf || editableAddress?.uf}
                    id='uf'
                    readOnly
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.uf && errors.uf.message}</p>
            </label>
            <button
                className='h-12 text-white font-semibold rounded-sm tracking-wider transition-all hover:bg-orange-400 bg-orange-500'>
                SALVAR ALTERAÇÕES
            </button>

        </form>
    )
}

export default EditAddressForm