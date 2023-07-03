import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { myContext } from '../../../../hooks/useContext'
import { useForm } from 'react-hook-form'
import InputMask from "react-input-mask";


const CreditCard = () => {

    const { productsInCart } = myContext()


    const totalPrice = productsInCart?.reduce( ( total,product ) => total + ( product.price * product.quantity ),0 )

    const {
        formSignUpValidade,
        createAccount,
        userErrorMessage
    } = myContext()

    const { handleSubmit,watch,
        register,
        formState: { errors }
    } = useForm( {
        resolver: zodResolver( formSignUpValidade )
    } )

    const parcelas = Array.from( { length: 10 },( _,index ) => index + 1 );


    return (
        <div className='flex flex-col'>
            <header>
                <h1 className='font-semibold text-lg leading-4'>Cartão de crédito</h1>
            </header>
            <form className=' flex flex-col gap-2 py-4' action="">
                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    Nome impresso no cartão
                    <input
                        type='text'
                        {...register( 'name' )}
                        className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                    />
                </label>


                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    Número do cartão
                    <InputMask
                        type='text'
                        mask={"9999-9999-9999-9999"}
                        maskChar={"_"}
                        {...register( 'card-number' )}
                        placeholder='0000-0000-0000-0000'
                        className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                    />

                </label>
                <section className='grid grid-cols-3 gap-4  max-lg:grid-cols-2 max-md:grid-cols-1'>
                    <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                        Validade
                        <InputMask
                            type='text'
                            mask={"99/99"}
                            maskChar={"_"}
                            {...register( 'validate' )}
                            placeholder='00/00'
                            className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                        />
                    </label>
                    <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                        Código de verificação (CVV)
                        <InputMask
                            type='text'
                            mask={"999"}
                            maskChar={"_"}
                            {...register( 'card-number' )}
                            placeholder='000'
                            className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                        />
                    </label>
                    <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                        Data de nascimento
                        <InputMask
                            type='text'
                            mask={"99/99/9999"}
                            maskChar={"_"}
                            {...register( 'card-number' )}
                            placeholder='00/00/0000'
                            className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                        />
                    </label>
                </section>
                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    CPF do titular
                    <InputMask
                        type='text'
                        mask={"999.999.999-99"}
                        maskChar={"_"}
                        {...register( 'cpf' )}
                        placeholder='000.000.000-00'
                        className='border border-neutral-400 text-orange-500 p-2 rounded-md h-12 focus:border-orange-400'
                    />
                </label>
                <label htmlFor="" className='flex flex-col gap-1 text-sm'>
                    Forma de pagamento
                    <select name="" id="" className='px-2 border h-12 rounded-md border-neutral-400'>
                        {parcelas.map( ( numParcelas ) => {
                            const valorParcela = totalPrice / numParcelas
                            return (
                                <option key={numParcelas} value={numParcelas} className='p-2'>
                                    {numParcelas}x sem juros - R${valorParcela.toFixed( 2 )}
                                </option>
                            )
                        } )}
                    </select>
                </label>
            </form>

        </div>
    )
}

export default CreditCard