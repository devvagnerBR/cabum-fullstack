import React from 'react'
import { myContext } from '../../../../../../hooks/useContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import getAddress from '../../../../../../util/get-address'

const NewAddressForm = () => {

    const {
        formNewAddressValidate,
        getCEP,
        fullAddress,
        saveNewAddress
    } = myContext()

    const { watch,handleSubmit,register,formState: { errors } } = useForm( { resolver: zodResolver( formNewAddressValidate ) } )

    const handleAddNewAddress = async ( data ) => {

        const newAddress = {
            cep: data.cep,
            identification: data.identification,
            street: fullAddress.street,
            number: data.number,
            complement: data.complement,
            neighborhood: fullAddress.neighborhood,
            city: fullAddress.city,
            uf: fullAddress.uf
        }

        await saveNewAddress( newAddress )

    }





    return (
        <form
            onSubmit={handleSubmit( handleAddNewAddress )}
            className='pt-4 flex flex-col gap-2'>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="cep">
                CEP*
                <input
                    {...register( 'cep' )}
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
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.identification && errors.identification.message}</p>
            </label>


            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="street">
                Logradouro*
                <input
                    disabled={fullAddress.street}
                    id='street'
                    value={fullAddress?.street}
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
                        className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                        type="text"
                    />
                    <p className='text-red-500 text-xs'>{errors.number && errors.number.message}</p>
                </label>
                <label className='flex flex-col w-full  text-sm text-neutral-500 ' htmlFor="complement">
                    Complemento*
                    <input
                        {...register( 'complement' )}
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
                    disabled={fullAddress.neighborhood}
                    value={fullAddress?.neighborhood}
                    id='neighborhood'
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.neighborhood && errors.neighborhood.message}</p>
            </label>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="city">
                Cidade*
                <input
                    value={fullAddress?.city}
                    disabled={fullAddress?.city}
                    id='city'
                    className='border-neutral-400 text-base focus-within:border-orange-500 text-neutral-500 border h-12 rounded-sm pl-2'
                    type="text"
                />
                <p className='text-red-500 text-xs'>{errors.city && errors.city.message}</p>
            </label>
            <label className='flex flex-col  text-sm text-neutral-500 ' htmlFor="uf">
                UF*
                <input
                    disabled={fullAddress.uf}
                    value={fullAddress.uf}
                    id='uf'
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

export default NewAddressForm